module.exports = {
  name: 'Field of Fucks',
  shortname: 'Fields, Verily',
  availableForMod: true,
  url: '/field/:name/:from/:reference',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' },
    { name: 'Reference', field: 'reference' }
  ],
  defaults: {
    to: 'you',
    from: 'Wendesday Addams', 
    reference: 'Me'
  },
  
  withDefaults() {
    const message = `And ${defaults.from} said unto ${defaults.to}, 'Verily, cast thine eyes upon the field in which I grow my fucks', and ${defaults.to} gave witness unto the field, and saw that it was barren.`
    const subtitle = `- ${defaults.reference}`
    return {message, subtitle}
  },


  register (app, output) {
    return app.get('/field/:name/:from/:reference', function (req, res) {
      const message = `And ${req.params.name} said unto ${req.params.from}, 'Verily, cast thine eyes upon the field in which I grow my fucks', and ${req.params.from} gave witness unto the field, and saw that it was barren.`
      const subtitle = `- ${req.params.reference}`
      return output(req, res, message, subtitle)
    })
  }
}
