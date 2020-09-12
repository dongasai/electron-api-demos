const {app, dialog} = require('electron')
const path = require('path')



let aa = 1616161;
if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('electron-api-demos', process.execPath, [path.resolve(process.argv[1])])

  }

} else {
  aa= app.setAsDefaultProtocolClient('electron-api-demos');


}

app.on('open-url', (event, url) => {
  dialog.showErrorBox('Welcome Back', `You arrived from: ${url}`)
})
app.on('ready', () => {
  // console.log(arguments)
  dialog.showErrorBox('defaultApp ',`You arrived `+process.defaultApp+aa);
})

