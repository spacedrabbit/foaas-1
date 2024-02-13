module.exports = {
  name: 'Fascinating',
  shortname: 'Fascinating',
  availableForMod: true,
  url: '/fascinating/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],
  defaults: { from: 'Ron Swanson' },
  
  withDefaults() {
    const message = 'Fascinating story, in what chapter do you shut the fuck up?'
    const subtitle = `- ${defaults.from}`
    return {message, subtitle}
  },

  register (app, output) {
    return app.get('/fascinating/:from', function (req, res) {
      const message = 'Fascinating story, in what chapter do you shut the fuck up?'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
