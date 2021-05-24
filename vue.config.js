module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': '@/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}