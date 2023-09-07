import express from "express"
import bodyParser from "body-parser"

const app=express();
const port=3000;
var count=0;
var array=[];
var arrayToday=[];
var time=new Date();
var month=""

const d=time.getDate();
const m=time.getMonth();
const y=time.getFullYear();

switch(m){
case 0: 
month="January"; 
break;


case 1: 
month="February";
break; 


case 2:
month= "March";
break;


case 3:
month= "April";
break; 


case 4:
    month= "May"; 
 break; 


case 5:
month= "June";
break; 


case 6: 
month="July";
break;


case 7:
month= "August";
break;


case 8:
    month= "September"; 
break; 


case 9:
month= "October";
break; 


case 10: 
month="November";
break; 


case 11:
month= "December"; 
break; 

}

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.render("index.ejs");
})

app.get("/index2.ejs", (req,res)=>{
  
    res.render("index2.ejs", {date:d, monthA:month, year:y});
})



app.get("/index.ejs", (req,res)=>{
    res.render("index.ejs");
})

app.post("/submit", (req,res)=>{
 
    const str = req.body["task"];   
    array.push(str);
    res.render("index.ejs", {text:str, arr:array} );
    
})

app.post("/submit1", (req,res)=>{   
    const str1=req.body["task"];
    arrayToday.push(str1);
    res.render("index2.ejs", {text1:str1, arr1:arrayToday , date:d,monthA:month,year:y})

})

app.listen(port, ()=>{
    console.log('Server is now running at port '+port);
})



