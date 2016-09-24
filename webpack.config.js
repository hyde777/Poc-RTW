module.exports = {
     entry: './src/HelloWorld.tsx',
     output: {
         path: './bin',
         filename: 'bundle.js'
     },
     module: {
         loaders: [{
             test: /\.jsx$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query:{
                 "presets": [ "es2015" , "react"] 
             }
         },
        {
            test: /\.tsx?$/, loader: "ts-loader" 
        }],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]

     },
     watch:true,
     externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devtool: "inline-source-map"
 };