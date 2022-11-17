class ProfileController {

  // [GET] /profile/:id
  getProfile(req, res, next) {
    return res.send('Hello world!');
  }

  // [PUT] /profile/:id
  updateProfile(req, res, next) {
    return res.send('Hello world!');
  }

}

module.exports = new ProfileController();