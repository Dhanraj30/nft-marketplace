const path = require('path');

module.exports = {
    // other configurations...
    resolve: {
        fallback: {
            fs: false,
            path: require.resolve('path-browserify')
        }
    }
};
