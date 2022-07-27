
module.exports = (env, args) => ({
    resolve: { extensions: ['.scss'] },
    devtool: args.mode == 'development' ? 'source-map' : false,

    entry: {
        'components.bwa': './css/components.bwa.scss'
    },
    module: {
        rules: [
            { test: /\.(s(a|c)ss)$/, use: ['css-loader', 'sass-loader'] }
        ],
    }
})
