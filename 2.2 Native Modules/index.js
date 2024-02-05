// const fs = require("fs")
import fs from "fs"

// fs.writeFile('message.txt', "Hello from Node!", (err)=>{
//    if(err) throw err;
//    console.log("Successfully done.")
// })

fs.readFile('message.txt', 'utf8', (err,data)=>{
   if(err) throw err;
   console.log(data);
})