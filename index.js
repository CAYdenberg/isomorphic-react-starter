
const path = require('path')
const express = require('express')
const hbs = require('express-hbs')
const Bundler = require('parcel-bundler')
const ReactEntry = require('./server/src/components').default
const ReactRender = require('react-dom/server').renderToString

const app = express()

// use Parcel bundler hot module reloading when in development environment
if (process.env.NODE_ENV === 'development') {
  const bundler = new Bundler('src/entry-client.js', {
    outFile: 'main.js',
    outDir: 'dist',
  })
  app.use(bundler.middleware())
}

app.use(express.static(path.join(__dirname, 'dist')))

// view engine setup
app.engine('hbs', hbs.express4())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.all('*', (req, res) => {
  const reactHtml = ReactRender(ReactEntry())
  res.render('base', {reactHtml})
})

app.listen(3000)
