### Webpack
Wepack is a static moduel bundler for JS applications which takes modules with dependencies and generatesw one or more bundles.

### Babel
Bable.js is a tool that transpiles ES6 code into ES5 that can then run in current JS environment.

``` bash
mkdir es6-starter
cd es6-starter
npm init -y
npm install --save-dev webpack
npm install --save-dev webpack-dev-server
npm install --save-dev babel-loader babel-core babel-preset-es2015
```

### Install webpack 
``` bash
npm install webpack-cli -D
```

Configure babel to use ES2015 presets
``` bash
touch babelrc
```

Add this,
``` js
{
"presets": ["es2015"]
}
```

Create index.html and and index.js in the root.
Now project directory looks like this.  
|--- index.html  
|--- index.js  
|--- package.json  
|--- .babelrc  
|--- node_modules  

### Configuring Webpack
``` bash
touch webpack.config.js
```

``` js
module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}
```

### Using Loaders
Update webpack.config.js to process all .js files using bable-loader.  
``` js
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    }
}
```

### Add generated bundle.js to index.html
``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>ES6</title>
</head>

<body>
    <h1>ES6 Starter</h1>
    <p>Hello World</p>
    <div id="main"></div>
    <script src="dist/bundle.js"></script>
</body>

</html>
```

### Compile .js files
``` bash
webpack
```

- webpack : build once for development
- webpack -p : builde once for production (minify)
- webpack -w : continuous incremental build in development (fast)
- webpack -d : include source maps
- webpack --progress --colors : progress bar and colors

``` bash
node_modules/.bin/webpack-dev-server -d --progress --colors
```
Running the command in this way is not quite easy. It is better to add it as a npm command.
Update package.json:
``` js
    "scripts": {
        "start": "webpack-dev-server --hot --inline --colors",
        "watch": "webpack -w -d",
        "build": "webpack -p",
        "test": "echo \"Error: no test specified\" && exit 1"
    }
```
How to use:
- npm start : run a dev server at localhost:8080 and watch for changes
- npm run watch : only watch for/recompile on changes on your own web-server
- npm run build : generate a minified production ready build