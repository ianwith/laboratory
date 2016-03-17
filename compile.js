var swig = require('swig');
swig.renderFile('./index.html', {}, function (err, output) {
  if (err) {
    throw err;
  }
  console.log(output);
});
