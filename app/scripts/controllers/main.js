'use strict';

angular.module('wheelchartApp')
    .controller('MainCtrl', function($scope, $http) {

        $scope.pedigreeObj = {
		    GivenNames: 'Paul',
		    Surnames: 'Sinkinson',
		    father: {
		        GivenNames: 'Michael',
		        Surnames: 'Sinkinson',
		        father: {
		        	GivenNames: 'Frank',
		        	Surnames: 'Sinkinson'
		    	},
		        mother: {
		        	GivenNames: 'Margaret',
		        	Surnames: "O'neil"
		    	}
		    },
		    mother: {
		        GivenNames: 'Carmen',
		        Surnames: 'Busuttil',
		        father: {
		        	GivenNames: 'Robert',
		        	Surnames: 'Busuttil'
		    	},
		        mother: {
		        	GivenNames: 'Georgina',
		        	Surnames: "Xerri"
		    	}
		    }
		};
    });