
var app = angular.module("app1" , []);

app.controller("ctrl1" , function(){

  var vm = this;
  vm.data = data;


  vm.new_list_item = {};

  vm.create = function(){
    vm.data.push(angular.copy(vm.new_list_item));
    vm.new_lists_item = {};
  };



});
