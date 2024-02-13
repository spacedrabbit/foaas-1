module.exports = {
  name: 'Chainsaw',
  shortname: 'Chainsaw',
  availableForMod: false,
  url: '/chainsaw/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/chainsaw/:name/:from', function (req, res) {
      const message = `Fuck me gently with a chainsaw, ${req.params.name}. Do I look like Mother Teresa?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
