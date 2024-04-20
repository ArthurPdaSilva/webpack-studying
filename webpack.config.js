const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// O webpack é um empacotador de módulos para aplicações JavaScript modernas, ou seja, ele é responsável por juntar todos os arquivos JavaScript e suas dependências em um único arquivo.
module.exports = {
  // Ponto de entrada da aplicação
  entry: "./src/index.js",
  // Configuração de saída
  output: {
    // Caminho de saída
    // __dirname é uma variável global do Node.js que retorna o diretório atual
    path: __dirname + "/dist",
    // Nome do arquivo de saída
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // Expressão regular que verifica se o arquivo termina com .js
        test: /\.js$/,
        // Exclui a pasta node_modules
        exclude: /node_modules/,
        // Usa o loader do Babel
        // Loader do Babel converte o código ES6 para ES5
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
