module.exports = {
  name: 'Madison',
  shortname: 'Billy',
  availableForMod: false,
  url: '/madison/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/madison/:name/:from', function (req, res) {
      const message = `What you've just said is one of the most insanely idiotic things I have ever heard, ${req.params.name}. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points ${req.params.name}, and may God have mercy on your soul.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
