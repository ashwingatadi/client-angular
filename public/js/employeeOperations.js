var app = angular.module("employee-app", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/Employees", {
                templateUrl: "public/templates/EmployeeList.html",
                controller: "list-employees"
            })
            .when("/AddUpdateEmployee", {
                templateUrl: "public/templates/AddUpdateEmployee.html",
                controller: "add-edit-employee"
            })
            .otherwise({
                redirectTo: "/Employees"
            })
        $locationProvider.html5Mode(true);
    }).controller("list-employees", function ($scope, $http) {
        $http.get("https://agile-plains-52918.herokuapp.com/employees").then(function (response) {
            var employees = response.data.employees;
            $scope.employees = employees;
        });
    }).controller("add-edit-employee", function ($scope) {
        $scope.message = "From Route";
    })