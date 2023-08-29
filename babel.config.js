module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['last 2 versions', 'not dead'],
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
}
