module.exports = {
  name: 'Maybe',
  shortname: 'Maybe',
  availableForMod: false,
  url: '/maybe/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/maybe/:from', function (req, res) {
      const message = 'Maybe. Maybe not. Maybe fuck yourself.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
