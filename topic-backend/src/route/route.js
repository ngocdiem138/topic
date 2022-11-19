// const loginRoute = require('./login-route');
// import userRoute from './user-route.js'
const userRoute = require('./user-route.js')
function route(app) {
  // app.use('/login', loginRoute);
  // app.use('/profile', profileRoute);
  // app.use('/topic', topicRoute);
  app.use('/user', userRoute);
  // app.use('/evaluate', evaluateRoute);
}

module.exports = route;