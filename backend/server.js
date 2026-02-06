const app = require('./src/app.js')
const {config} = require('dotenv')
const connectToDb = require('./src/db/db.js')

config()
connectToDb()

app.listen(3000, () => {
    console.log(`Server is running http://localhost:3000`);
});