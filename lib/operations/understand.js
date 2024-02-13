module.exports = {
  name: 'Understand',
  shortname: 'Understand?',
  availableForMod: false,
  url: '/understand/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/understand/:name/:from', function (req, res) {
      const message = `Listen here ${req.params.name}!  What part of 'Fuck Off' don't you understand?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
