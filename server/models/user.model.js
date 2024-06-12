import mysql from 'mysql2'

const conn = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"imsdb"

});

conn.connect((err) =>{
    if(err) throw err;
    console.log("DB connected sucessfully No problem Encountered !!");
})
 
export default conn;