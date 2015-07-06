var path = require('path');

module.exports = {
    entry: {
        app: './app/js/app.js'
    },
    output: {
        path: path.join(__dirname, '/app/build'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/app/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    resolve: {
        root: path.resolve('./app/js'),
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules']
    },
    devtool: 'source-map'
};
