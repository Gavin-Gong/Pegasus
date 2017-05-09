// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {
      remove: false,
      browsers: ['last 2 versions']
    },
    "pxtore" :{
      rootValue: 10,
      unitPrecision: 5,
      propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'padding', 'margin'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
