// Define a new module for our app
var app = angular.module("classfinder", []).config(function($sceDelegateProvider) {
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
			bldg: 'NVIDIA',
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
