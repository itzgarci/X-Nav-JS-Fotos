function aleatorio(){
	var lista =['http://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Arundel_Cathedral_Sanctuary%2C_West_Sussex%2C_UK_-_Diliff.jpg/500px-Arundel_Cathedral_Sanctuary%2C_West_Sussex%2C_UK_-_Diliff.jpg',
	'http://upload.wikimedia.org/wikipedia/commons/a/a3/Arco_di_Tito.jpg',
	'http://upload.wikimedia.org/wikipedia/commons/e/ec/Moscow_July_2011-4a.jpg',
	'http://3.bp.blogspot.com/-zF9OHmRb6s4/VC2nQ8QD22I/AAAAAAAAWLA/4NzQRqmd-lk/s1600/Carrie_Yoga_shoot_002_(8328572519).jpg'];
	var operation = document.getElementById("photo");
	var NumAleatorio = Math.floor(Math.random()*4);
	operation.setAttribute("src",lista[NumAleatorio]);
}
