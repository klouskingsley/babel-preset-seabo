module.exports = function (context, options = {}) {
  let browsers = ["last 2 versions", "ie >= 9"]
  if (Array.isArray(options.browsers)) {
    browsers = options.browsers
  }

  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          "targets": {
              "browsers": browsers
          }
        }
      ],
      require('@babel/preset-react'),
    ],
    plugins: [
      require('@babel/plugin-transform-runtime'),
      require('@babel/plugin-syntax-dynamic-import'),
      [require('@babel/plugin-proposal-decorators'), { "legacy": true }],
      [require('@babel/plugin-proposal-class-properties'), { loose: true }],
      [require('babel-plugin-import'), { "libraryName": "antd"}, "ant"],
      [require('babel-plugin-import'), { "libraryName": "antd-mobile"}, "ant-mobile"]
    ]
  }
}
