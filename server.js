const express = require('express')
const app = express()
const port = 5000 
const general_aps = require("./controllers/general_aps")
const aggregateCal = require("./controllers/aggregate")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res, next) => {
  const {marks} = req.body
  if(!marks){
    res.status(401).send("Marks are required");
  }else{
    const aps = general_aps.calculateAps(marks);
    const aggregate = aggregateCal.calculateAggregate(marks)
    res.send({aps: aps, aggregate: aggregate});
    res.end()
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})