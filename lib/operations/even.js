module.exports = {
  name: 'Even',
  shortname: 'Even',
  availableForMod: true,
  url: '/even/:from',
  fields: [
    { name: 'From', field: 'from' }
  ], 
  defaults: { from: 'Hagrid' },
  
  withDefaults() {
    const message = "I can't fuckin' even."
    const subtitle = `- ${this.defaults.from}`
    return {message, subtitle}
  },

  register (app, output) {
    return app.get('/even/:from', function (req, res) {
      const message = "I can't fuckin' even."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
