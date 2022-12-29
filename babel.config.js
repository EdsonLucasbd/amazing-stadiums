module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: false
      }
    ],
    ['@babel/plugin-proposal-class-properties']
  ],
  presets: ['@babel/preset-env', 'next/babel', '@babel/preset-typescript']
}
