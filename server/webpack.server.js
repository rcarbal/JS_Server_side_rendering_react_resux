const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.js')
const config = {
    /**
     * Inform webpack that we are building a bundle for NodeJS
     * Rather than for the browser
     */

     target: 'node',
     
     // Tell webpack the root file of our server application.
     entry: './src/index.js', 
    // Tells webpack where to put the output file that is generated
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
}

module.exports = merge(base, config);