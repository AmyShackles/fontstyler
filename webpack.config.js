const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-transform-runtime"],
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "FontStyler.js",
        library: "fontstyler",
        libraryTarget: "umd",
        environment: {
            arrowFunction: true,
            const: true,
            destructuring: true,
            module: true,
        },
    },
    externals: {
        react: "react",
        "react-dom": "reactDOM",
    },
};
