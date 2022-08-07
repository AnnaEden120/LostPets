const {Client} = require ('pg');
const express= require("express");
const chance= require("chance").Chance();
const shuffleArray= require("shuffle-array");

const app=express();

app.get("/data", (req, res)=>{
	res.send("hey dom");
});

app.listen(3001, ()=>console("app is running"));

const client =new Client({
	user:"postgres",
	password:"test",
	host:"localhost",
	port:5432,
	database:"lost_pets"
});



client.connect()
.then(()=> console.log("Connected Successfuly"))
.then(()=>client.query("select * from pets_table"))
.then(results=>console.table(results.rows))
.catch(e=>console.log(e))
.finally(()=>client.end)
