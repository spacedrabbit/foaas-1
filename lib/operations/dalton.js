module.exports = {
  name: 'Dalton',
  shortname: 'Dalton',
  availableForMod: false,
  url: '/dalton/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/dalton/:name/:from', function (req, res) {
      const message = `${req.params.name}: A fucking problem solving super-hero.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
