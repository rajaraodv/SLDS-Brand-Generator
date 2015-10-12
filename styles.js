var path = require('path');
var sass = require('node-sass');

sass.render({
  file: 'styles.scss'
}, function (err, result) {
  if (err) throw err;
  console.log(result.css.toString());
});
