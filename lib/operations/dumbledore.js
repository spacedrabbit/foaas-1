module.exports = {
  name: 'Dumbledore',
  shortname: 'Dumbledore',
  availableForMod: false,
  url: '/dumbledore/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/dumbledore/:from', function (req, res) {
      const message = 'Happiness can be found, even in the darkest of times, if one only remembers to fuck off.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
