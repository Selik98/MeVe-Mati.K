const path = require('path')


const userController = {

    login: ('/login', (req,res) => {
        console.log ('Hicieron un Request en "/login"')
      //  res.sendFile(path.join(__dirname, '../views/login.html'))
      res.render('login')
    }),
    register: ('/register', (req,res) => {
        console.log ('Hicieron un Request en "/register"')
     //   res.sendFile(path.join(__dirname, '../views/register.html'))
    res.render('register')
    })
}

module.exports = userController;