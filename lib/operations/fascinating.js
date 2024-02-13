module.exports = {
  name: 'Fascinating',
  shortname: 'Fascinating',
  availableForMod: false,
  url: '/fascinating/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/fascinating/:from', function (req, res) {
      const message = 'Fascinating story, in what chapter do you shut the fuck up?'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
