var webpack = require('webpack');



module.exports = {
  entry : [
  'script!jquery/dist/jquery.min.js',
  'script!foundation-sites/dist/foundation.min.js',
  './app/app.jsx'
  ],
  externals: {
    jquery : 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$' : 'jquery',
      'jQuery' : 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  output : {
    path : __dirname,
    filename : './public/bundle.js'
  },
  resolve : {
    root : __dirname,
    alias : {
      Main : 'app/components/Main.jsx',
      Nav : 'app/components/Nav.jsx',
      CreateReferral : 'app/components/CreateReferral.jsx',
      About : 'app/components/About.jsx',
      CreateScheme : 'app/components/CreateScheme.jsx',
      CreateReferralForm : 'app/components/CreateReferralForm.jsx',
      UserMsg : 'app/components/UserMsg.jsx',
      CreateSchemeForm : 'app/components/CreateSchemeForm.jsx',
      openWeatherMap : 'app/api/openWeatherMap.jsx',
      ErrorModal : 'app/components/ErrorModal.jsx',
      applicationStyles : 'app/styles/app.scss',
      contractconf : 'app/api/contractconf.jsx',
      RedeemReferral : 'app/components/RedeemReferral.jsx',
      RedeemReferralForm : 'app/components/RedeemReferralForm.jsx',
      CreateReferralPromised : 'app/api/CreateReferralPromised.jsx',
      CreateSchemePromised : 'app/api/CreateSchemePromised.jsx',
      RedeemReferralPromised : 'app/api/RedeemReferralPromised.jsx'
    },
    extensions : ['','.js','.jsx']
  },
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        query : {
          presets : ['react','es2015']
        },
        test : /\.jsx?$/,
        exclude : /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
