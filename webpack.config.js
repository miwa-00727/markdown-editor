const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/, //   exclude は除外するファイルを正規表現で指定
        },
      ],
    },
    resolve: {  // resolve セクションは、モジュールとして解決するファイルの拡張子を指定
        extensions: ['.js', '.ts', '.tsx'],
    },
  output: {  // 出力するファイルの設定
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',  // dist というディレクトリに対して、ファイル名 index.js で出力している
    publicPath: 'dist/',  // 変換する際は JavaScript 内に書かれている相対パスのリソースへ自動的に dist/を追加してくれる
  }
}
