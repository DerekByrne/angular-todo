
angular.module('NavBarDirective', []).directive('navBar', function(){
 return {
	restrict: 'E' , // A -> attribute
	templateUrl: 'templates/directives/nav-bar.html'
 };
});
angular.module('TodoDirective', []).directive('todoTable', function(){
 return {
	restrict: 'E' , // A -> attribute
	templateUrl: 'templates/directives/todo-table.html'
 };
});





