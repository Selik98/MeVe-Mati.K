const path = require('path')


const controller = {
    home: ('/', (req, res) => {
        console.log('Hicieron un Request en "/"')
        res.sendFile(path.join(__dirname, '../views/index.html'))
    })
}

module.exports = controller;