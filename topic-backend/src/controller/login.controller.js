app.post('/api/login', (req, res) => {
  Joi.validate(
      req.body,
      Joi.object().keys({
        email: Joi.string()
            .max(200)
            .required(),
        password: Joi.string()
            .max(100)
            .required()
      }),
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(400).send(err.details[0].message);
        } else {
          Employee.findOne(
              { Email: req.body.email },
              'Password _id Account FirstName LastName',
              function (err, document) {
                if (err || document == null) {
                  res.send('false');
                } else {
                  if (document.Password == req.body.password) {
                    emp = {
                      _id: document._id,
                      Account: document.Account,
                      FirstName: document.FirstName,
                      LastName: document.LastName
                    };
                    var token = jwt.sign(emp, jwtKey);
                    res.send(token);
                  } else {
                    res.sendStatus(400);
                  }
                }
              }
          );
        }
      }
  );
});
