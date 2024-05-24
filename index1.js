const http=require('http');
const fs=require('fs');
let server=http.createServer((req,res)=>
{
    if(req.url==="/")
    {
        fs.readFile("./index.html","utf-8",(err,data)=>
        {
            if(err)
            throw Error(err)
        return res.end(data)
        })
    }
    else if(req.url==="/products" && req.method==="GET")
    {
        fs.readFile("./products.html","utf-8",(err,data)=>
        {
            if(err)
            throw Error(err)
        return res.end(data)
        })
    }
    else if(req.url==="/products" && req.method==="post")
    {
        fs.readFile("./productsadded.html","utf-8",(err,data)=>
        {
            if(err)
            throw Error(err)
        return res.end(data)
        })
    }
    else if(req.url==="/profile")
    {
        fs.readFile("./profile.html","utf-8",(err,data)=>
        {
            if(err)
            throw Error(err)
        return res.end(data)
        })
    }
    else if(req.url==="/signup")
    {
        fs.readFile("./signup.html","utf-8",(err,data)=>
        {
            if(err)
            throw Error(err)
        return res.end(data)
        })
    }
    else if(req.url==="/login")
    {
        fs.readFile("./login.html","utf-8",(err,data)=>
        {
            if(err)
            throw Error(err)
        return res.end(data)
        })
    }
    else if(req.url==="/students")
    {
        fs.readFile("./students.json","utf-8",(err,data)=>
        {
            if(err)
            throw Error(err)
        return res.end(data)
        })
    }
    else
    {
         fs.readFile("./pnf.html","utf-8",(err,data)=>
         {
            if(err)
            throw Error(err)
        return res.end(data)
         })
    }
    
})

server.listen(4000,()=>{console.log("Server is running on port 4000")})