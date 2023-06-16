const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports ={
    mode:"development",
    entry: path.join(__dirname, "src","index.js"),
    output:{
        filename: "bundle.js",
        path: path.resolve(__dirname, "public", "assets", "js"),
    },
    module:{
        rules:[
            {
                test:/\.?js$/,
                exclude:/node_modules/, 
                use:
                    {
                        loader:"babel-loader",
                        options:{
                            presets:['@babel/preset-env','@babel/preset-react']
                        }
                    }
            },
            {test:/\.css$/i, use:['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.s[ac]ss$/i, use:['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(png|jp(e*)g|svg|gif)$/,exclude:/node_modules/,use:['file-loader'],}
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname, "src", "index.html"),
        }),
    ],
    
}