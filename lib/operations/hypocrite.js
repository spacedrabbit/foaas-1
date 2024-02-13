module.exports = {
  name: "Hypocrite",
  shortname: 'Hypocrite',
  availableForMod: false,
  url: '/deraadt/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/hypocrite/:name/:from', function (req, res) {
      const message = `${req.params.name} you are being the usual slimy hypocritical asshole... You may have had value ten years ago, but people will see that you don't anymore.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
