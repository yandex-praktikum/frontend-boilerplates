module.exports = ({tsconfigPath, compilerOptions: overrideCompilerOptions}) => webpackConfig => {
    const compilerOptions = overrideCompilerOptions ? {
        ...overrideCompilerOptions,
    } : undefined;

    if (compilerOptions) {
        console.log('Overriding typescript options with', JSON.stringify(compilerOptions, null, 2));
    }

    // ------------------------------------
    // TypeScript
    // ------------------------------------
    webpackConfig.module.rules.push({
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        // happyPackMode: true,
                        configFile: tsconfigPath,
                        compilerOptions,
                    },
                },
            ],
            exclude: /(node_modules)/
        }
    );

    return webpackConfig;
};
