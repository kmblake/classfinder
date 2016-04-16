// Define a new module for our app
var app = angular.module("classfinder", ['uiGmapgoogle-maps']);

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
			bldg: 'NVIDIA',
			location: {latitude: 37.4281111, longitude: -122.176272},
			id: 1
		},
		{ 
			title: 'CS 110',
			bldg: 'CEMEX',
			location: {latitude: 37.4247218, longitude: -122.1649816},
			id: 2
		}

	];

	// $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	// $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
  $scope.map = {center: {latitude: 37.4280888, longitude: -122.1723306 }, zoom: 16 };
  $scope.options = {scrollwheel: false};
  $scope.coordsUpdates = 0;
  $scope.dynamicMoveCtr = 0;
  $scope.marker = {
    options: { draggable: false }
  };
}]);

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
