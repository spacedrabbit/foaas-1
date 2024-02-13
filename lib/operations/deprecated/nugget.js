module.exports = {
  name: 'Nugget',
  url: '/nugget/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/nugget/:name/:from', function (req, res) {
      const message = `Well ${req.params.name}, aren't you a shining example of a rancid fuck-nugget.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
