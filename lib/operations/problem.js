module.exports = {
  name: 'Problem',
  shortname: 'Problem',
  availableForMod: false,
  url: '/problem/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/problem/:name/:from', function (req, res) {
      const message = `What the fuck is your problem ${req.params.name}?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
