const loginRoute = require('./login-route');
const profileRoute = require('./profile-route.js');
const topicRoute = require('./topic-route.js');
const userRoute = require('./user-route.js');
const evaluateRoute = require('./evaluate-route');

function route(app) {
  app.use('/login', loginRoute);
  app.use('/profile', profileRoute);
  app.use('/topic', topicRoute);
  app.use('/user', userRoute);
  app.use('/evaluate', evaluateRoute);
}

module.exports = route;