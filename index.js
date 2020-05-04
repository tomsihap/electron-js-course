const {BrowserWindow} = require('electron').remote

const {ipcRenderer, ipcMain} = require('electron')

const newWindowBtn = document.getElementById('btn-about-window')

newWindowBtn.addEventListener('click', () => {

    alert('bouton cliqué !')
    let win = new BrowserWindow({ width: 400, height: 320 })

    win.loadURL('https://yahoo.fr')
    //win.show()
})

const errBtn = document.getElementById('btn-alert')

errBtn.addEventListener('click', () => {
    ipcRenderer.send('open-error-dialog')
})

const btnTransparent = document.getElementById('btn-transparent-window')

btnTransparent.addEventListener('click', () => {
    ipcRenderer.send('btn-transparent')
})

const addTaskBtn = document.getElementById('btn-add-task')

    addTaskBtn.addEventListener('click', () => {
    
    let winTask = new BrowserWindow({
        width: 400,
        height: 320,
        webPreferences: {
            nodeIntegration: true
        }
    })

    winTask.loadFile('todo.html')
    winTask.show()
})

ipcMain.on('test', () => {
    dialog.showErrorBox('ok', "ok")
})
