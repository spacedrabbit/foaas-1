module.exports = {
  name: 'Bravo Mike',
  shortname: 'Bravo Mike',
  availableForMod: false,
  url: '/bm/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bm/:name/:from', function (req, res) {
      const message = `Bravo mike, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
