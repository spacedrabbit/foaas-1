module.exports = {
  name: 'Can I Get You A Cup?',
  shortname: 'Cup',
  availableForMod: true,
  url: '/cup/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],
  defaults: { from: 'Garfield' },

  withDefaults() {
    const message = 'How about a nice cup of shut the fuck up?'
    const subtitle = `- ${defaults.from}`
    return {message, subtitle}
  },

  register (app, output) {
    return app.get('/cup/:from', function (req, res) {
      const message = 'How about a nice cup of shut the fuck up?'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
