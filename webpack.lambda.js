//webpack.config.js
// const path = require("path")
// require('dotenv').config({
//     path:  path.resolve(process.cwd(),'src/lambda/.env.development')
// })

const pkg = require('./package')
const GenerateJsonPlugin = require('generate-json-webpack-plugin')

const externals = [
    'firebase-admin',
]

const genPackage = () => ({
    name: 'netlify-functions',
    private: true,
    main: 'secretData.js',
    author:"@saphidev",
    license: 'MIT',
    dependencies: externals.reduce(
    (acc, name) =>
        Object.assign({}, acc, {
        [name]:
            pkg.dependencies[name]
        }),
    {}
    )
})


module.exports = {
    target: 'node',
    resolve: {
        mainFields: ['module', 'main']
    },
    externals: externals.reduce(
        (acc, name) => Object.assign({}, acc, { [name]: true }),
        {}
    ),
    plugins: [
        new GenerateJsonPlugin('package.json', genPackage()),
    ]
}