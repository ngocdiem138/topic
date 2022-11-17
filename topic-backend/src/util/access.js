import { UserService } from '../app/service/user.service';

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