module.exports = {
  name: 'Immensity',
  shortname: 'Immensity',
  availableForMod: false,
  url: '/immensity/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/immensity/:from', function (req, res) {
      const message = 'You can not imagine the immensity of the FUCK I do not give.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
