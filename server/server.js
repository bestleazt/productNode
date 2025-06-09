// Step 1
const  express =  require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {readdirSync} = require('fs')
const cors = require('cors')


// Step 4 middleware 
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


readdirSync('./routers').map((item)=>{
        app.use('/api',require('./routers/'+item))
})


// Step 2 Start Server
app.listen(5000,()=> console.log('Server is Running on port 5000'))