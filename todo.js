const {BrowserWindow} = require('electron').remote
const {ipcRenderer} = require('electron')
const Store = require('electron-store');

const store = new Store();

const btnSaveTask = document.getElementById('btn-save-task')

btnSaveTask.addEventListener('click', () => {
    ipcRenderer.send('todoCreated', {'todo': 'bibi'})
})