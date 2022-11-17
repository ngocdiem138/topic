const loginRoute = require('./login-route');

function route(app) {
  app.use('/login', loginRoute);
  // app.use('/profile', profileRoute);
  // app.use('/topic', topicRoute);
  // app.use('/user', userRoute);
  // app.use('/evaluate', evaluateRoute);
}

module.exports = route;