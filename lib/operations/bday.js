module.exports = {
  name: 'Birthday',
  shortname: 'Birthday)',
  availableForMod: false,
  url: '/bday/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bday/:name/:from', function (req, res) {
      const message = `Happy Fucking Birthday, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
