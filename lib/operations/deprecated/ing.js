module.exports = {
  name: 'Fucking',
  url: '/ing/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/ing/:name/:from', function (req, res) {
      const message = `Fucking fuck off, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
