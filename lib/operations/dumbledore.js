module.exports = {
  name: 'Dumbledore',
  shortname: 'Dumbledore',
  availableForMod: true,
  url: '/dumbledore/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],
  defaults: { from: 'Dumbledore' },
  
  withDefaults() {
    const message = 'Happiness can be found, even in the darkest of times, if one only remembers to fuck off.'
    const subtitle = `- ${defaults.from}`
    return {message, subtitle}
  },

  register (app, output) {
    return app.get('/dumbledore/:from', function (req, res) {
      const message = 'Happiness can be found, even in the darkest of times, if one only remembers to fuck off.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
