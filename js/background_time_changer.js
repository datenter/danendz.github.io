//Скрипт на смену фона по времени
var d = new Date();
var n = d.getHours();
if(n>7&&n<18){
  document.write('<style> body{background-color:#ecf0f1;} </style>');
}
else{
  document.write('<style> body{background-color:#2c3e50;color:#ecf0f1;} .clientbtn{color:#ecf0f1;} .clientbtn1{color:#ecf0f1;} .crmpbtn{color:#ecf0f1;} .list-group{color:#2c3e50;} .btnmod{color:#ecf0f1;} </style>');
}