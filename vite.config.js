import { fileURLToPath, URL } from 'url'
import vitePluginRaw from 'vite-plugin-raw';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path');
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    new MiniCssExtractPlugin( {
      filename: 'styles.css'
  } ),
    vitePluginRaw({
      match: /\.svg$/,
      exclude: path.resolve('./src/assets')
    })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
          
    },
    module: {
      rules: [
          {
              test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
              use: [ 'raw-loader' ]
          },
          {
              test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
              use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                      loader: 'postcss-loader',
                      options: {
                          postcssOptions: styles.getPostCssConfig( {
                              themeImporter: {
                                  themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                              },
                              minify: true
                          } )
                      }
                  }
              ]
          }
        ]
        }   
  }

)

  // transpileDependencies: [
  //   /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/,
  // ],
  // configureWebpack: {
  //   plugins: [
  //     // CKEditor needs its own plugin to be built using webpack.
  //     new CKEditorWebpackPlugin({
  //       // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
  //       language: 'es',

  //       // Append translations to the file matching the `app` name.
  //       translationsOutputFile: /app/
  //     })
  //   ]
  // },

  
    // chainWebpack: config => {
    //   // (1.) To handle editor icons, get the default rule for *.svg files first:
    //   const svgRule = config.module
    //   .rule('cke-css')
    //   .test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
    //   .use('postcss-loader')
    //   .loader('postcss-loader')
    //   .tap(() => {
    //     return {
    //       postcssOptions: styles.getPostCssConfig({
    //         themeImporter: {
    //           themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
    //         },
    //         minify: true
    //       })
    //     };
 

      // Then you can either:
      //
      // * clear all loaders for existing 'svg' rule:
      //
      // svgRule.uses.clear();
  