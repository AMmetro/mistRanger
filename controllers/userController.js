class UserController {
    async login (req, res){
          res.json('userController positive response')
    }

    async registration (req, res){       
    }
}

module.exports = new UserController()