const { Home } = require('../models')

module.exports = {
    // get all room
    async index(req, res) {
        try {
            const homes = await Home.findAll()
            res.send(homes)
        } catch (err) {
            res.status(500).send({
                error: 'The homes information was incorrect'
            })
        }
    },

    // create room
    async create(req, res) {
        try {
            const home = await Home.create(req.body)
            res.send(home.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create home incorrect'
            })
        }
    },

    // edit room, suspend, active
    async put(req, res) {
        try {
            await Home.update(req.body, {
                where: {
                    id: req.params.homeId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update home incorrect'
            })
        }
    },

    // delete room
    async remove(req, res) {
        try {
            const home = await Home.findOne({
                where: {
                    id: req.params.homeId
                }
            })

            if (!home) {
                return res.status(403).send({
                    error: 'The home information was incorrect'
                })
            }

            await home.destroy()
            res.send(home)
        } catch (err) {
            res.status(500).send({
                error: 'The home information was incorrect'
            })
        }
    },

    // get room by id
  async show (req, res) {
    try {
      const home = await Home.findByPk(req.params.homeId)
      res.send(home)
    } 
    catch (err) {
        res.status(500).send({
            error: 'The home information was incorrect'
        })
    }
  }
}