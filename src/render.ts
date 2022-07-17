const selectDirBtn = document.getElementById('open-button');
const curDirText = document.getElementById('cur-dir-text');
const container = document.getElementById('container');

selectDirBtn?.addEventListener('click', () => {
  window.electronAPI.openFileDialog();
});

window.electronAPI.getSelectedFiles((e, path) => {
  if (curDirText) {
    if (path.filePaths) {
      if (path.filePaths.length && path.filePaths.length > 1) {
        window.logger.error('select only one folder');
        return;
      }
      curDirText.innerText = path.filePaths[0];
      window.electronAPI.readDirs(path.filePaths[0]);
      
    }
  }
  window.logger.log(path);
});

window.electronAPI.getDirs((e, files) => {
  files.forEach((fileName:string) => {
    const name = document.createElement('div');
    name.innerText = fileName;
    container?.append(name);
  });
});
