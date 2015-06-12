
angular
  .module('MyApp', ['ngMaterial'])
  .controller('gridListDemoCtrl', function($scope) {

    this.tiles = [];
    	
  	this.tiles.push({"icon": "TwitterLogo_white.png",
  									 "title": "@mollie_taylor",
  									 "link": "https://twitter.com/mollie_taylor",
  									 "span": {"col": 1, "row": 1},
  									 "background": "#55acee"});
    	
  	this.tiles.push({"icon": "maptime.png",
  									 "title": "Co-Organizer, MaptimeATL!",
  									 "link": "http://www.meetup.com/MaptimeATL/",
  									 "span": {"col": 2, "row": 1},
  									 "background": "#fff"});
    	
  	this.tiles.push({"icon": "codeforatlanta.png",
  									 "title": "Co-Organizer, Code for Atlanta",
  									 "link": "http://www.codeforatlanta.org/",
  									 "span": {"col": 2, "row": 2},
  									 "background": "#fff"});
    	
  	this.tiles.push({"icon": "proximity-doo-small.jpg",
  									 "title": "Art Project: Proximity To Nature",
  									 "link": "http://proximity2nature.tumblr.com/",
  									 "span": {"col": 1, "row": 1},
  									 "background": "#202020"});
    	
  	this.tiles.push({"icon": "GitHub-Mark-Light-120px-plus.png",
  									 "title": "mollietaylor",
  									 "link": "https://github.com/mollietaylor",
  									 "span": {"col": 1, "row": 1},
  									 "background": "#000"});
    	
  	this.tiles.push({"icon": "prox-mollie1.png",
  									 "title": "President, Proximity Viz LLC",
  									 "link": "http://proximityviz.com/",
  									 "span": {"col": 2, "row": 2},
  									 "background": "#fff"});
    	
  	this.tiles.push({"icon": "Public-images-osm_logo.png",
  									 "title": "mollietaylor",
  									 "link": "https://www.openstreetmap.org/user/mollietaylor/history",
  									 "span": {"col": 1, "row": 1},
  									 "background": "green"});
    	
  	this.tiles.push({"icon": "blog.png",
  									 "title": 'Blog: "Maps and Apps"',
  									 "link": "http://blog.mollietaylor.com/",
  									 "span": {"col": 1, "row": 1},
  									 "background": "#f5f5f5"});
    	
  	this.tiles.push({"icon": "googlemail-128.png",
  									 "title": "mollie.taylor@gmail.com",
  									 "link": "mailto:mollie.taylor@gmail.com",
  									 "span": {"col": 1, "row": 1},
  									 "background": "#3F87F9"});
    	
  	this.tiles.push({"icon": "Glyph_Logo_png.png",
  									 "title": "molliemtaylor",
  									 "link": "https://instagram.com/molliemtaylor/",
  									 "span": {"col": 1, "row": 1},
  									 "background": "#241E20"});
    	
  	this.tiles.push({"icon": "goodreads.jpg",
  									 "title": "I've read 362 books over the last 13 years.",
  									 "link": "https://www.goodreads.com/user/show/1409406-mollie-t",
  									 "span": {"col": 1, "row": 1},
  									 "background": "#fff"});
    	
  	// this.tiles.push({"icon": "",
  	// 								 "title": "",
  	// 								 "link": "",
  	// 								 "span": {"col": 1, "row": 1},
  	// 								 "background": "green"});

    console.log(this.tiles);
  })
  .config( function( $mdIconProvider ){
    $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
  });
