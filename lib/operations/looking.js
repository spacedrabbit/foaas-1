module.exports = {
  name: 'Looking',
  shortname: 'Looking',
  availableForMod: true,
  url: '/looking/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],
  defaults: {
    from: 'Seth Rogan',
  },
  
  withDefaults() {
    const message = 'Looking for a fuck to give.'
    const subtitle = `- ${this.defaults.from}`
    return {message, subtitle}
  },

  register (app, output) {
    return app.get('/looking/:from', function (req, res) {
      const message = 'Looking for a fuck to give.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
