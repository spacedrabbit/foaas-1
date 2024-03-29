module.exports = {
  name: 'Holygrail',
  shortname: 'Holy Grail',
  availableForMod: true,
  url: '/holygrail/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],
  defaults: {
    from: 'Monty P.',
  },
  
  withDefaults() {
    const message = 'I don\'t want to talk to you, no more, you empty-headed animal, food trough wiper. I fart in your general direction. Your mother was a hamster and your father smelt of elderberries. Now go away or I shall taunt you a second time.'
    const subtitle = `- ${this.defaults.from}`
    return {message, subtitle}
  },

  register (app, output) {
    return app.get('/holygrail/:from', function (req, res) {
      const message = 'I don\'t want to talk to you, no more, you empty-headed animal, food trough wiper. I fart in your general direction. Your mother was a hamster and your father smelt of elderberries. Now go away or I shall taunt you a second time.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
