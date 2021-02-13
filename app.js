const express = require('express')
let app = express()

app.set('views','views')
app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/',function(req,res){
    res.render('main')
})
app.listen(3000)