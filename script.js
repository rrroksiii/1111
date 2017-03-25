"use strict"


var tv = new Tv("Теличек", true, 1, 2);
console.dir(tv);
var menu = new MenuDevices(tv);

menu.start();
console.dir(menu);


