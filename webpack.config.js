const path = require('path');

module.exports = {
    entry: {
        bundle: './src/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'es2016', 'es2017']
                }
            }
        ]
    }
};
