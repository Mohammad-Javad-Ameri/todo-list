const Logger = (req, res, next) => {
  console.log(`the api has a new request.METHOD: ${req.method}, URL: ${req.url}`);
  next();
};
module.exports = Logger;