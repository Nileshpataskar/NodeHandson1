const http = require("http")
const fs =require("fs")


const htmlData = `
<!DOCTYPE html>
<html>
<body>
  <h1>What is Node</h1>
  <p>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</p>
</body>
</html>
`;

const jsondata = `{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }, },`;

const app =http.createServer((req,res)=>{
 


   
    if(req.url=="/home"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlData);
    }

    if (req.url=="/json"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(jsondata);
    }
    else{
        res.write("No data")
        res.end()
    }
})

app.listen(4000,()=>{console.log("Server is running")})



// for showing htmlfile
// fs.readFile("../index2.html",(err,data)=>{
//     if(err){
//         res.writeHead(500,{"Content-Type": "text/plain"})
//         res.end("Error with data")
//     }
//     else{
//         res.writeHead(200,{"Content-Type": "text/html"})
//                 res.end(data)
//     }
//    })