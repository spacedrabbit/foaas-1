module.exports = {
  name: 'Outside',
  shortname: 'Hide-n-Go',
  availableForMod: false,
  url: '/outside/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/outside/:name/:from', function (req, res) {
      const message = `${req.params.name}, why don't you go outside and play hide-and-go-fuck-yourself?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
