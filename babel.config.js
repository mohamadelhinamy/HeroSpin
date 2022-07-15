module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@navigators': './src/navigators',
          '@modules': './src/modules',
          '@styles': './src/styles',
          '@context': './src/context',
          '@config': './src/config',
        },
      },
    ],
  ],
}
