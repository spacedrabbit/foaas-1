module.exports = {
  name: 'Cocksplat',
  shortname: 'Weinersplat',
  availableForMod: false,
  url: '/cocksplat/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/cocksplat/:name/:from', function (req, res) {
      const message = `Fuck off ${req.params.name}, you worthless cocksplat`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
