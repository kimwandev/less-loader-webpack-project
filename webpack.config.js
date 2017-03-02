//webpack-config-file
module.exports = {
    entry: "./src/styles/global.less",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
        ]
    }
};