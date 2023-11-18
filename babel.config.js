module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@api': './src/api',
            '@assets': './src/assets',
            '@screens': './src/screens',
            '@components': './src/components',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  }
}
