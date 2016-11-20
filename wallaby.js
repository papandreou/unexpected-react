

var Babel = require('babel-core');

module.exports = function (wallaby) {

    return {
        files: [
            'src/**/*.js',
            {
                pattern: 'src/tests/**/*.spec.js',
                ignore: true
            },
            {
                pattern: 'src/tests/helpers/**/*.js',
                instrument: false
            },
            {
                pattern: 'src/react-devtools/**/*.js',
                instrument: false
            },
            {
                pattern: 'src/react-devtools/frontend/**/*.js',
                ignore: true
            },
            {
                pattern: 'src/react-devtools/plugins/**/*.js',
                ignore: true
            }],

        tests: ['src/tests/general/**/*.spec.js', 'src/tests/regressions/**/*.spec.js'],
        env: {
            type: 'node',
            runner: 'node'
        },

        compilers: {
            'src/**/*.js': wallaby.compilers.babel({
                babel: Babel
            }),
            'src/**/*.jsx': wallaby.compilers.babel({
                babel: Babel
            })
        }
    };
};