var sessionChecker = (req, res, next) => {
  console.log(req.session);
  if (req.session.profile) {
    console.log('Found User Session');
    next();
  } else {
    console.log('No User Session Found');
    res.send({ message: 'No User Session Found' });
  }
};

module.exports = sessionChecker;
