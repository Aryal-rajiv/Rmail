const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req,res)=>{
    res.send('hello worlkd');
});

app.listen(port, ()=>{
console.log('server is running on the http/localhost: ${port}')

});