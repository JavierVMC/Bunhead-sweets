var sessionChecker = (req, res, next) => {
  console.log(`Session Checker: ${req.session.id}`.green);
  console.log(req.session);
  if (req.session.profile) {
    console.log('Found User Session');
    next();
  } else {
    console.log('No User Session Found');
  }
};

module.exports = sessionChecker;
