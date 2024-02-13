module.exports = {
  name: 'Do Something',
  shortname: 'Do Something',
  availableForMod: false,
  url: '/dosomething/:do/:something/:from',
  fields: [
    { name: 'Do', field: 'do' },
    { name: 'Something', field: 'something' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/dosomething/:do/:something/:from', function (req, res) {
      const message = `${req.params.do} the fucking ${req.params.something}!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
