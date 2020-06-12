(function(){

"use strict";
angular.module('public')
.controller("MyInfoController", MyInfoController);

MyInfoController.$inject = ['MenuService', "ApiPath"];
function MyInfoController(MenuService, ApiPath){
    var myInfoCtrl = this;

    myInfoCtrl.basePath = ApiPath;
    myInfoCtrl.registrated = false;
    myInfoCtrl.info = MenuService.getInfo();
    if(myInfoCtrl.info.registrated == true) {
        myInfoCtrl.registrated = true;
        if(myInfoCtrl.info.menuNumber!=undefined){
            MenuService.getMenuItem(myInfoCtrl.info.menuNumber).then(function(result){
                myInfoCtrl.menuItem = result.data;
            });
            myInfoCtrl.dich = true;
        }else {
            myInfoCtrl.dich = false;
        }
    }

}


})();