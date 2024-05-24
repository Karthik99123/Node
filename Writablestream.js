const fs=require('fs');
let writeData=fs.createWriteStream("./text.txt")
writeData=Write("Hello JavaScript Hello ReactJS"(err)=>
{
if (err)
throw Error(err)
else
console.log("Data written successful")
})
