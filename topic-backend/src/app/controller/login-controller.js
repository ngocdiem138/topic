const checkAccess = require('../../util/access');
const { UserService } = require('../service/user.service');

class LoginController {

  // userService = new UserService();

  // [POST] /login
  login(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;
    // const user = this.userService.authentication(username, password);
    return res.send(user);
  }

}

module.exports = new LoginController();