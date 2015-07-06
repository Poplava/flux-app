module.exports = {
    entry: './client/app/app.js',
    output: {
        filename: 'client/build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'jsx-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
