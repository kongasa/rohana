// eslint-disable-next-line @typescript-eslint/no-var-requires
const ipc = require('electron').ipcRenderer

const selectDirBtn = document.getElementById('open-button')

selectDirBtn?.addEventListener('click', () => {
  ipc.send('open-file-dialog')
})

// ipc.on('selected-directory', function (e, path) {
//   console.log(path);
// })
