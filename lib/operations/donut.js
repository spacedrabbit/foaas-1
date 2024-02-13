module.exports = {
  name: 'Donut',
  shortname: 'Donut',
  availableForMod: false,
  url: '/donut/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/donut/:name/:from', function (req, res) {
      const message = `${req.params.name}, go and take a flying fuck at a rolling donut.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
