module.exports = {
  name: 'Idea',
  shortname: 'Idea',
  availableForMod: true,
  url: '/idea/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],
  defaults: { from: 'Leslie Knoppe' },
  
  withDefaults() {
    const message = 'That sounds like a fucking great idea!'
    const subtitle = `- ${this.defaults.from}`
    return {message, subtitle}
  },

  register (app, output) {
    return app.get('/idea/:from', function (req, res) {
      const message = 'That sounds like a fucking great idea!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
