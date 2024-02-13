module.exports = {
  name: 'Version',
  shortname: 'Version',
  availableForMod: false,
  url: '/version',
  fields: [],

  register (app, output, version) {
    return app.get('/version', function (req, res) {
      const message = `Version ${version}`
      const subtitle = 'FOAAS'
      return output(req, res, message, subtitle)
    })
  }
}
