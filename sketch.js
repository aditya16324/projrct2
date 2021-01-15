

var database;
var gameStatefreezer;
var playercountfreezer;
var form1;

function setup(){
  createCanvas(1200,600);
 database = firebase.database();
form1=new Form();
}


function draw(){
form1.displayer()

}
