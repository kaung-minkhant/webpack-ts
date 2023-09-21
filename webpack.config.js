const path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/index.ts', // relative path
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')], // absolute path
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'), // absolute path
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js'],
    }
}