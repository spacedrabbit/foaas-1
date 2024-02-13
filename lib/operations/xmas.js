module.exports = {
  name: 'Holiday',
  shortname: 'Holiday',
  availableForMod: false,
  url: '/holiday/:holiday/:name/:from',
  fields: [
    { name: 'Holiday', field: 'holiday'},
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/xmas/:name/:from', function (req, res) {
      const message = `Happy Fucking ${req.params.holiday}, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
