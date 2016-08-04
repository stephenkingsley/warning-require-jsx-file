# warning-require-jsx-file
this is a webpack plugin, when you require .jsx file, warning you~

## USE
    npm i --save-dev check-jsx-file

and then in your webpack file

```javascrip

var checkJSXFile = require('check-jsx-file');

plugins: [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new checkJSXFile(),
  new webpack.NoErrorsPlugin()
]

```
