module.exports = {
  name: 'You Think',
  shortname: 'Don\'t Care',
  availableForMod: false,
  url: '/think/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/think/:name/:from', function (req, res) {
      const message = `${req.params.name}, you think I give a fuck?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
