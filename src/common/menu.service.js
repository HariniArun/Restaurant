(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var myInfo = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.storeInfo = function(info) {
      myInfo = info;
  };

  service.getInfo = function(){
    console.log(myInfo);
    
    return myInfo;
  }

  service.getMenuItem = function (short_name) {
    return $http.get(ApiPath + '/menu_items/'+ short_name +'.json').then(function (response) {
      console.log(response.data);
      
      return response;
    });
  };

}



})();
