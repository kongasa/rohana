const selectDirBtn = document.getElementById('open-button')

selectDirBtn?.addEventListener('click', () => {
  window.electronAPI.openFileDialog()
})

// window.electronAPI.getSelectedFiles( function (e, path) {
//   console.log(path);
// })
