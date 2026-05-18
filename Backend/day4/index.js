const http=require('http');

const server=http.createServer((req,res)=>{
// res.end("hello this is deepanshu singh kadyan");
if(req.url
    ==="/"){
res.end("hello jaat ji ")
}
else if(req.url==="/about"){
    res.end("hello this is about page ")
}
else if (req.url==="/contact"){
    res.end("hello this is contact page  ")
}
else{
    res.end("Error : page not find")
}
});

server.listen(4000,()=>{

console.log("I am listen at port number 4000");
})