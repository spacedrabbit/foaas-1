module.exports = {
  name: 'Asshole',
  shortname: 'Butthole',
  availableForMod: false,
  url: '/asshole/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/asshole/:from', function (req, res) {
      const message = 'Fuck you, asshole.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
