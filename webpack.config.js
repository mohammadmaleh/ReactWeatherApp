module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{

      Weather:'app/components/Weather.jsx',
      WeatherForm:'app/components/WeatherForm.jsx',
      WeatherMessage:'app/components/WeatherMessage.jsx',
      Main:'app/components/Main.jsx',
      About:'app/components/About.jsx',
      Examples:'app/components/Examples.jsx',
      Nav:'app/components/Nav.jsx',
      OpenWeatherMap:'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
