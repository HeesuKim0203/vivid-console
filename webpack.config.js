const path = require('path')

module.exports = [
    {
        entry: './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: { 
                        loader : 'ts-loader',
                        options : {
                            configFile : path.resolve(__dirname, 'configs/tsconfig.bundle.json')
                        }
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'index.bundle.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'VC',
            libraryTarget: 'window',
            libraryExport: 'default'
        }
    },
    {
        entry: './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: { 
                        loader : 'ts-loader',
                        options : {
                            configFile : path.resolve(__dirname, 'configs/tsconfig.cjs.json')
                        }
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'lib/cjs'),
            libraryTarget: 'commonjs2',
            libraryExport : 'default'
        }
    },
    {
        entry: './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: { 
                        loader : 'ts-loader',
                        options : {
                            configFile : path.resolve(__dirname, 'configs/tsconfig.esm.json')
                        }
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'lib/esm'),
            libraryTarget: 'module',
            module : true
        },
        experiments : {
            outputModule : true
        }
    }
]