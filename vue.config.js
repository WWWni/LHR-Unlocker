module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      preload: 'src/preload.js',
      builderOptions: {
        nsis: {
          allowToChangeInstallationDirectory: true,
          oneClick: false
        },
        win: {
          icon: 'public/favicon.ico'
        },
        productName: 'LHR Unlocker'
      }
    },
  }
}