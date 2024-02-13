module.exports = {
  name: 'Blackadder',
  shortname: 'Blackadder',
  availableForMod: false,
  url: '/blackadder/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/blackadder/:name/:from', function (req, res) {
      const message = `${req.params.name}, your head is as empty as a eunuch's underpants. Fuck off!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
