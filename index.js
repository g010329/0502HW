const express = require('express');
const index = express();
index.listen(3000);

index.use(express.static('public'))

index.get('/',(req,res)=>{
    res.send('Hello, My Server!');
});

index.get('/getData',(req,res)=>{
    const number = req.query.number;
    // console.log(number);
    if (number==undefined) {
        res.send('Lack of Parameter!!!');
    } else {
        const checkN = parseInt(number);
        // console.log(checkN);
        if (checkN>0) {
            let result=0;
            for (let i=1; i<=checkN; i++) {
            result+=i;
            };
            res.send(result.toString());
        } else {
            res.send('Wrong Parameter');
        }
    }  
});