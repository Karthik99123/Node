const http=require("http")
const fs=require("fs")
let server=http.createServer((req,res)=>
{
  res.writeHead(201,{"content-type":"text/html"})
  fs.readFile("./index.html","utf-8",(err,data)=>
  {
    if(err)
    {
        throw Error(err)
    }
    else{
        return res.end(data)    
    }
  })
})

server.listen(4000,(err)=>
{
    if(err)
    throw Error(err)
console.log("Server is running on port 4000");
})