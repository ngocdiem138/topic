const jwt = require('jsonwebtoken');
let jwtKey = 'set_your_jwt_key';

function verifyTeacher(req, res, next) {
  console.log(req.headers['authorization']);
  const Header = req.headers['authorization'];

  if (typeof Header !== 'undefined') {
    // decodedData = jwt.decode(req.headers['authorization']);
    // if(decodedData.Account)
    jwt.verify(Header, jwtKey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        console.log(authData);
        if (authData.Account === 1) {
          next();
        } else {
          res.sendStatus(403);
        }
      }
    });
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

function verifyTeacherAdmin(req, res, next) {
  console.log(req.headers['authorization']);
  const Header = req.headers['authorization'];

  if (typeof Header !== 'undefined') {
    // decodedData = jwt.decode(req.headers['authorization']);
    // if(decodedData.Account)
    jwt.verify(Header, jwtKey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        console.log(authData);
        if (authData.Account === 1 || authData.Account === 2) {
          next();
        } else {
          res.sendStatus(403);
        }
      }
    });
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

function verifyAdmin(req, res, next) {
  console.log(req.headers['authorization']);
  const Header = req.headers['authorization'];

  if (typeof Header !== 'undefined') {
    // decodedData = jwt.decode(req.headers['authorization']);
    // if(decodedData.Account)
    jwt.verify(Header, jwtKey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        console.log(authData);
        if (authData.Account === 2) {
          next();
        } else {
          res.sendStatus(403);
        }
      }
    });
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

function verifyAdminStudent(req, res, next) {
  console.log(req.headers['authorization']);
  const Header = req.headers['authorization'];

  if (typeof Header !== 'undefined') {
    // decodedData = jwt.decode(req.headers['authorization']);
    // if(decodedData.Account)
    jwt.verify(Header, jwtKey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        console.log(authData);
        if (authData.Account === 2) {
          next();
        } else if (authData.Account === 3) {
          if (authData._id === req.params.id) {
            next();
          } else {
            res.sendStatus(403);
          }
        } else {
          res.sendStatus(403);
        }
      }
    });
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

function verifyStudent(req, res, next) {
  console.log(req.headers['authorization']);
  const Header = req.headers['authorization'];

  if (typeof Header !== 'undefined') {
    // decodedData = jwt.decode(req.headers['authorization']);
    // if(decodedData.Account)
    console.log('err', 1);
    jwt.verify(Header, jwtKey, (err, authData) => {
      console.log('err', 2);
      if (err) {
        console.log('err', err);
        res.sendStatus(403);
      } else {
        if (authData._id === req.params.id) {
          console.log(authData);
          if (authData.Account === 3) {
            next();
          } else {
            res.sendStatus(403);
          }
        } else {
          res.sendStatus(403);
        }
      }
    });
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

module.exports = {
  verifyTeacherAdmin,
  verifyStudent,
  verifyTeacher,
  verifyAdmin,
  verifyAdminStudent
};
