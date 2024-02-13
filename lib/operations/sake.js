module.exports = {
  name: 'sake',
  shortname: 'FFS',
  availableForMod: false,
  url: '/sake/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/sake/:from', function (req, res) {
      const message = "For Fuck's sake!"
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
