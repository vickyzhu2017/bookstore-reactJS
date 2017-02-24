var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var Book = require('./model').Book;


app.set('views', path.resolve(__dirname,'../build'));
app.engine('.html',require('ejs').__express);
app.set('view engine','html');

app.use(express.static(path.resolve(__dirname,'../build')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE");
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
app.get('/', function(req,res){
    res.render('index');
});


app.get('/books',function(req,res){
    Book.find({},function(err,books){
        console.error(err);
        res.send(books);
    });
});
app.get('/books/:_id',function(req,res){
    Book.findById(req.params._id,function(err,book){
        res.send(book);
    });
});

app.post('/books',function(req,res){
    Book.create(req.body,function(err,book){
        res.send(book);
    });
});
app.put('/books',function(req,res){
    var _id = req.query._id;
    Book.update({_id},req.body,function(err,result){
        Book.findById({_id:id},function(err,doc){
            res.send(doc);
        });
    });
});
app.delete('/books',function(req,res){
    var _id = req.query._id;
    console.log('delete',_id);
    Book.remove({_id},function(err,result){
        console.log(result);
        res.send({});
    });
});
app.listen(3000);
