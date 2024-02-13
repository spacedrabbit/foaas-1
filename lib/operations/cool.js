module.exports = {
  name: 'Cool Story Bro',
  shortname: 'Cool Story Bro',
  availableForMod: false,
  url: '/cool/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/cool/:from', function (req, res) {
      const message = 'Cool story, bro.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
