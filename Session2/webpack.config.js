const path = require('path');

module.exports = {
    "entry": "./src/app.js",
    "output":{
        "path": path.resolve(__dirname, 'public/scripts'),
        "filename": 'bundle.js'
    }
}