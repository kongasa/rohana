function initMain(){
  const wrapper = document.createElement('div');

  const h1 = document.createElement('h1');
  const h1Text = document.createTextNode('Rohana');
  h1.appendChild(h1Text);

  const info = document.createElement('p');
  const pText = document.createTextNode('Make sure rohana has access to the files.');
  info.appendChild(pText);

  const openButton = document.createElement('button');
  const openButtonText = document.createTextNode('open');
  openButton.appendChild(openButtonText);
  openButton.id = 'open-button';
  openButton.addEventListener('click', () => {
    window.electronAPI.openFileDialog();
  })
  const curDirWrapper = document.createElement('p');
  curDirWrapper.id = 'file-list';
  const curDir = document.createElement('span');
  curDir.id = 'cur-dir-text';
  curDirWrapper.appendChild(curDir);

  window.electronAPI.getSelectedFiles((e, path) => {
    if (curDir) {
      if (path.filePaths) {
        if (path.filePaths.length && path.filePaths.length > 1) {
          window.logger.error('select only one folder');
          return;
        }
        curDir.innerText = path.filePaths[0];
        window.electronAPI.readDirs(path.filePaths[0]);

      }
    }
    window.logger.log(path);
  });

  const container = document.createElement('div');
  container.id = 'container';

  window.electronAPI.getDirs((e, files) => {
    files.forEach((fileName:string) => {
      const name = document.createElement('div');
      name.innerText = fileName;
      container?.append(name);
    });
  });

  wrapper.append(h1,info,openButton,curDirWrapper,container,container);
  document.getElementById('main')?.replaceWith(wrapper);
}

initMain();
