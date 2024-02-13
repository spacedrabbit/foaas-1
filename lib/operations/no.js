module.exports = {
  name: 'No',  
  shortname: 'None',
  availableForMod: false,
  url: '/no/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/no/:from', function (req, res) {
      const message = 'No fucks given.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
