const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');


app.get('/addition', (req, res) => {
    res.render('addition.ejs');  
    
});
app.post('/sum', (req,res)=>{
    const number1 =parseInt(req.body.number1);
    const number2 =parseInt(req.body.number2) ;
    const number3 =parseInt(req.body.number3) ;
    const number4 = parseInt(req.body.number4);
    const number5 =parseInt(req.body.number5);

    const arr = [number1, number2, number3, number4, number5];
    
    console.log(number1);
    console.log(number2);
    console.log(number3);
    console.log(number4);
    console.log(number5);


    let  sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];  
    }
    console.log(sum);
    res.send("Sum is: " + sum );

});
app.get('/multiply', (req, res)=>{
    res.render('multiply');

})
app.post('/product', (req, res)=>{
    const number1 =parseInt(req.body.number1);
    const number2 =parseInt(req.body.number2) ;
    const number3 =parseInt(req.body.number3) ;
    const number4 = parseInt(req.body.number4);
    const number5 =parseInt(req.body.number5);

    const arr = [number1, number2, number3, number4, number5];
    let  product = 1;
    for(let i = 0; i < arr.length; i++){
        // sum += arr[i];
        product *= arr[i];
    }
    res.send("product is:" + product);
    console.log(product);


})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});