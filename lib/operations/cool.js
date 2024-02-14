module.exports = {
  name: 'Cool Story Bro',
  shortname: 'Cool Story Bro',
  availableForMod: true,
  url: '/cool/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],
  defaults: { from: 'That one bro. You know the one.' },

  withDefaults() {
    const message = 'Cool story, bro.'
    const subtitle = `- ${this.defaults.from}`
    return {message, subtitle}
  },

  register (app, output) {
    return app.get('/cool/:from', function (req, res) {
      const message = 'Cool story, bro.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
