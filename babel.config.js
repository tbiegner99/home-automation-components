module.exports = {
  presets: [
    ['@babel/preset-env',{"exclude": ['@babel/plugin-transform-regenerator']}], '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',

  ]
};
