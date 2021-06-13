const path = require('path');

module.exports = {
    "entry": "./src/app.js",
    "output":{
        "path": path.resolve(__dirname, 'public/scripts'),
        "filename": 'bundle.js'
    },
    "devServer": {
        "contentBase": path.join(__dirname, 'public'),
        "port": 8900,
    },
    "mode":"development",
    "devtool":"eval-source-map"
}