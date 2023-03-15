const express=require('express');

const app=express();

var mysql =require('mysql');

var con = mysql.createConnection({
    host: "192.168.2.8",
    user: "trainee",
    password: "trainee@123",
    database:"trainee"

  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
  



// //   1) Add 5 movies to the collection, every movie should include the following properties: 


// // name 
	
// // genre(Horror,thriller,Science Fiction,Drama,Comedy,Art etc.,) 
	
// // rating (out of 10) 
	
// // language

// function data(error) {
//   if (error) throw error;
//   var sql = "INSERT INTO isha_movie (name, genre,rating,language) VALUES ('movie 16', 'Drama',1,'English')";
//   con.query(sql,function(err,result){
//     if (err) throw err;
//     console.log(result);
//     console.log("1 record inserted");
//   })
// };

// data()


// // 2) Write a query that returns all the movies



// function data1(error){
//   if (error) throw error;
//   sql="SELECT * FROM isha_movie order by rating desc limit 3";
//   con.query(sql,function(err,result){
//     if (err) throw err;
//     console.log(result);
//     console.log("done")
//   })
// }
// data1()

// // 3) Write a query that returns the three highest rated movies

// function data3(error){
//   if (error) throw error;
//   sql="SELECT * FROM isha_movie order by rating desc limit 3"
//   con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log(result);
//     console.log("done data3")
//   })
// }

// data3();



// // 4) Update the rating of all Comedy movies
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("update isha_movie set rating = 10 where genre = \"comedy\" ", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// function data4(error){
//   if (error) throw error;
// sql="update isha_movie set rating = 10 where genre = \"comedy\" ";
// con.query(sql,function(err,result){
//   if(err) throw err;
//   console.log(result)
//   console.log("done data 4")
// })

// }

// data4()


// 5) Write a query to delete movie with least rating.


// function data5(error){
//   if (error) throw error;
//   sql="delete FROM isha_movie where rating = 1"
//   con.query(sql,function(err,result){
//     if (err) throw err;
//     console.log(result);
//     console.log("done data5")
//   })
// }

// data5()
