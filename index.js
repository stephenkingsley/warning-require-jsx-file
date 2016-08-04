function checkJSXFile() {

}

checkJSXFile.prototype.apply = function (compiler) {
  compiler.plugin('normal-module-factory', function (nmf) {
    nmf.plugin('after-resolve', function (data, done) {
      var pathName = data.resource.split('?')[0];
      if (pathName.match(/\/[A-Za-z0-9]+\.jsx$/)) {
        done(new Error('do not require .jsx file in ', pathName));
      } else {
        done(null, data);
      }
    });
  });
};

module.exports = checkJSXFile;
