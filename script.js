// Define a new module for our app
var app = angular.module("classfinder", ['uiGmapgoogle-maps']).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://www.google.com/maps/embed**'
  ]);
});

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

app.controller('ClassfinderController', ['$scope', function($scope) {
  $scope.items = [
		{
			title: 'CS 107',
			desc: 'Computer Systems',
			bldg: 'NVIDIA',
			loc: "https://www.google.com/maps/embed/v1/place?q=37%C2%B025'41.2%22N%20122%C2%B010'26.7%22W&key=AIzaSyAOpii1ESYwlE64cPlCCXRijnkymgNJp4A"
		}, 
		{ 
			title: 'CS 110',
			desc:'Principles of Computer Systems',
			bldg: 'CEMEX',
			loc: "https://www.google.com/maps/embed/v1/place?q=37%C2%B025'41.2%22N%20122%C2%B010'26.7%22W&key=AIzaSyAOpii1ESYwlE64cPlCCXRijnkymgNJp4A"
		}, 
		{ 
			title: 'CS 42',
			desc: 'CallBack Me Maybe',
			bldg: '530-127',
			loc: "https://www.google.com/maps/embed/v1/place?q=37%C2%B025'34.5%22N%20122%C2%B010'14.9%22W&key=AIzaSyAOpii1ESYwlE64cPlCCXRijnkymgNJp4A"
		},
				{ 
			title: 'CS 108',
			desc: 'Object-Oriented Systems Design',
			bldg: ' 370-370',
			loc: "https://www.google.com/maps/embed/v1/place?q=37%C2%B025'40.7%22N%20122%C2%B010'17.6%22W&key=AIzaSyAOpii1ESYwlE64cPlCCXRijnkymgNJp4A"
		},
			{ 
			title: 'CS 142',
			desc: 'Web Applications',
			bldg: ' 200-034',
			loc: "https://www.google.com/maps/embed/v1/place?q=37%C2%B025'42.7%22N%20122%C2%B010'13.3%22W&key=AIzaSyAOpii1ESYwlE64cPlCCXRijnkymgNJp4A"
		},
		{ 
			title: 'CS 143',
			desc: 'Compilers',
			bldg: 'NVIDIA Auditorium ',
			loc: "https://www.google.com/maps/embed/v1/place?q=37%C2%B025'41.2%22N%20122%C2%B010'26.7%22W&key=AIzaSyAOpii1ESYwlE64cPlCCXRijnkymgNJp4A"
		},
		{ 
			title: 'CS 145',
			desc: ' Introduction to Databases',
			bldg: 'NVIDIA Auditorium',
			loc:  "https://www.google.com/maps/embed/v1/place?q=37%C2%B025'41.2%22N%20122%C2%B010'26.7%22W&key=AIzaSyAOpii1ESYwlE64cPlCCXRijnkymgNJp4A"
		},
		{ 
			title: 'CS 148',
			desc: 'Introduction to Computer Graphics and Imaging',
			bldg: 'Gates B3 ',
			loc: "https://www.google.com/maps/embed/v1/place?q=37%C2%B025'48.0%22N%20122%C2%B010'23.6%22W&key=AIzaSyAOpii1ESYwlE64cPlCCXRijnkymgNJp4A"
		},
		{ 
			title: 'CS 193P',
			desc: 'iPhone and iPad Application Programming',
			bldg: 'Hewlett Teaching Center 200 ',
			loc: "https://www.google.com/maps/embed/v1/place?q=37%C2%B025'44.9%22N%20122%C2%B010'22.3%22W&key=AIzaSyAOpii1ESYwlE64cPlCCXRijnkymgNJp4A"
		},
		{ 
			title: 'CS 211',
			desc: 'Content Creation in Virtual Reality',
			bldg: 'Gates ',
			loc: "https://www.google.com/maps/embed/v1/place?q=37%C2%B025'48.0%22N%20122%C2%B010'23.6%22W&key=AIzaSyAOpii1ESYwlE64cPlCCXRijnkymgNJp4A"
		}
	];
}])

	// $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	// $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
  // $scope.map = {center: {latitude: 37.4280888, longitude: -122.1723306 }, zoom: 16 };
  // $scope.options = {scrollwheel: false};
  // // $scope.coordsUpdates = 0;
  // // $scope.dynamicMoveCtr = 0;
  // $scope.marker = {
  //   options: { draggable: false }
  // };
// }]);

// function ClassfinderController($scope){

// 	// The data model. These items would normally be requested via AJAX,
// 	// but are hardcoded here for simplicity. See the next example for
// 	// tips on using AJAX.

// 	// $scope.items = [
// 	// 	{
// 	// 		url: 'http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
// 	// 		title: '50 Must-have plugins for extending Twitter Bootstrap',
// 	// 		image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg'
// 	// 	},
// 	// 	{
// 	// 		url: 'http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
// 	// 		title: 'Making a Super Simple Registration System With PHP and MySQL',
// 	// 		image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg'
// 	// 	},
// 	// 	{
// 	// 		url: 'http://tutorialzine.com/2013/08/slideout-footer-css/',
// 	// 		title: 'Create a slide-out footer with this neat z-index trick',
// 	// 		image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg'
// 	// 	},
// 	// 	{
// 	// 		url: 'http://tutorialzine.com/2013/06/digital-clock/',
// 	// 		title: 'How to Make a Digital Clock with jQuery and CSS3',
// 	// 		image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg'
// 	// 	},
// 	// 	{
// 	// 		url: 'http://tutorialzine.com/2013/05/diagonal-fade-gallery/',
// 	// 		title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
// 	// 		image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg'
// 	// 	},
// 	// 	{
// 	// 		url: 'http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/',
// 	// 		title: 'Mini AJAX File Upload Form',
// 	// 		image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg'
// 	// 	},
// 	// 	{
// 	// 		url: 'http://tutorialzine.com/2013/04/services-chooser-backbone-js/',
// 	// 		title: 'Your First Backbone.js App – Service Chooser',
// 	// 		image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg'
// 	// 	}
// 	// ];

// 	$scope.items = [
// 		{
// 			title: 'CS 107',
// 			bldg: 'NVIDIA',
// 			loc: '(1,2)'
// 		},
// 		{ 
// 			title: 'CS 110',
// 			bldg: 'CEMEX',
// 			loc: '(3,4)'
// 		},
// 	];

	// $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };


// }
