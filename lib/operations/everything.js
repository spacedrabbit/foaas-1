module.exports = {
  name: 'Everything',
  shortname: 'Everything',
  availableForMod: false,
  url: '/everything/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/everything/:from', function (req, res) {
      const message = 'Fuck everything.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
