const {BrowserWindow} = require('electron').remote
const {ipcRenderer} = require('electron')

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