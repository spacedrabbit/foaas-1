module.exports = {
  name: 'Fuck That Shit',
  shortname: 'F-That',
  availableForMod: false,
  url: '/fts/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/fts/:name/:from', function (req, res) {
      const message = `Fuck that shit, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
