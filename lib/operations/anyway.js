module.exports = {
  name: 'Who the fuck are you anyway',
  shortname: 'Who are you?',
  availableForMod: false,
  url: '/anyway/:company/:from',
  fields: [
    { name: 'Company', field: 'company' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/anyway/:company/:from', function (req, res) {
      const message = `Who the fuck are you anyway, ${req.params.company}, why are you stirring up so much trouble, and, who pays you?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
