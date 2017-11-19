const watch = require('node-watch');
const fs = require('fs-extra');

console.log('Watching ./my-snippets .....');
watch('./my-snippets', { recursive: true }, (evt, name) => {
  if (evt == 'update') {
    // on create or modify 
    console.log(name + ' is created or modified');
    fs.removeSync(name.replace('my-snippets', 'snippets'));
    fs.copySync(name, name.replace('my-snippets', 'snippets'));
  }

  if (evt == 'remove') {
    console.log(name + 'is removed');
  }
});
