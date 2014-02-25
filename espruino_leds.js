clearInterval();

clearInterval(aTimer);
clearInterval(bTimer);
clearInterval(cTimer);

var a = false;
var b = false;
var c = false;

var aTimer = null;
var bTimer = null;
var cTimer = null;

var aTimer = setInterval(function(){
	a = !a;
	LED1.write(a);
},1000);

var bTimer = setInterval(function(){
	b = !b;
	LED2.write(b);
},500);

var cTimer = setInterval(function(){
	c = !c;
	LED3.write(c);
},250);