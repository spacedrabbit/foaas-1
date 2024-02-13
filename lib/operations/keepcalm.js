module.exports = {
  name: 'Keep Calm',
  shortname: 'Keep Calm',
  availableForMod: false,
  url: '/keepcalm/:reaction/:from',
  fields: [
    { name: 'Reaction', field: 'reaction' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/keepcalm/:reaction/:from', function (req, res) {
      const message = `Keep the fuck calm and ${req.params.reaction}!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
