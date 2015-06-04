var app=angular.module('clickableTabapp',[]);

app.controller('appController',function($scope){
    $scope.message= "Welcome to";
    /*      
    Here you can handle controller for specific route as well.
    */
});
app.controller('tabController',function(){
    this.tab = 1;
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(selected){
		return this.tab === selected;
	};
});