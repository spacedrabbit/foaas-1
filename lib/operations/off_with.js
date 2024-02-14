module.exports = {
  name: 'Fuck Off With',
  shortname: 'Off With',
  availableForMod: false,
  url: '/off-with/:behavior/:from',
  fields: [
    { name: 'Behavior', field: 'behavior' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/off-with/:behavior/:from', function (req, res) {
      const message = `Fuck off with ${req.params.behavior}`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
