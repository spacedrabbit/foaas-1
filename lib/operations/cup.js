module.exports = {
  name: 'Can I Get You A Cup?',
  shortname: 'Cup',
  availableForMod: false,
  url: '/cup/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/cup/:from', function (req, res) {
      const message = 'How about a nice cup of shut the fuck up?'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
