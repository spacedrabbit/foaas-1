module.exports = {
  name: 'Bye',
  shortname: 'Bye',
  availableForMod: false,
  url: '/bye/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bye/:from', function (req, res) {
      const message = 'Fuckity bye!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
