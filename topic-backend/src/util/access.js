const UserService = require('../app/service/user.service');

function checkAccess(req) {
  return new UserService()
      .authentication(
          req.headers.get('authentication').username,
          req.headers.get('authentication').password
      );
}

module.exports = {
  checkAccess
};