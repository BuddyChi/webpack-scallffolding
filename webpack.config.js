var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry:  __dirname + "/app/main.js",
    output: {
      path: __dirname + "/public",
      filename: "bundle.js"
    },
    devServer:{
        contentBase:__dirname+'/public',
        historyApiFallback:true,
        inline:true,
        hot:true
    },
    module:{
        rules:[
            {
                test:/(\.jsx|.js)$/,
                use:{
                    loader:'babel-loader',
                },
                exclude:/node_modules/
            },
            {
                test:/\.css/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader',
                     options:{
                         module:true,
                         localIdentName:'name_[local]--[hash:base64:5]'
                     }   
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
  }
