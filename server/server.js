const http= require ("http");
const url= require ("url");
const fs= require ("fs");
const filename= "./db.json"
let list;

http.createServer((req ,res)=>{

let parseURL =url.parse(req.url, true)
fs.readFile(filename, "UTF-8",(err ,data)=>{
    if(!err){
        if(data.length==0){
            list=[];
        }
        else {
            list=JSON.parse(data);
        }

        switch(parseURL.pathname){
          //  case '/'{}
            case '/add':
            let Name=parseURL.query["name"]
            let newguy =
            {name:Name};
            list.push(newguy);
            SaveData(list);
            break;

            } 
           // case '/delete'
        res.write(JSON.stringify(list))
        res.end();
        }
        else{
            console.log("err");
        }
        
    })
}).listen(4000);

function SaveData(data){
    
    fs.writeFile(filename, JSON.stringify(data), (err)=>{

    })
}