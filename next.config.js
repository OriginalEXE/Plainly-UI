const withCSS = require ('@zeit/next-css');

module.exports = withCSS ({
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
      config.module.rules.push ({
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      });
    }

    return config;
  },
  onDemandEntries: {
    websocketPort: 3001,
  },
});
