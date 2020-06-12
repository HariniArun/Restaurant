(function () {

  "use strict";

    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    var info = [];

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
      var reg = this;
    
      reg.submit = function () {
          info.firstname = reg.firstname;
          info.lastname = reg.lastname;
          info.email = reg.email;
          info.phone = reg.phone;
          info.menuNumber = angular.uppercase(reg.menuNumber);
          reg.completed = true;

          if(reg.menuNumber != undefined){
              MenuService.getMenuItem(angular.uppercase(reg.menuNumber)).then(function(result){
                  reg.menuItem = result.data;
                  if(reg.menuItem!=undefined){
                    info.registrated = true;
                      MenuService.storeInfo(info);
                      reg.saved=true;
                      reg.favoriteDish=false;
                      console.log(reg.favoriteDish+"1");
                  }
              }).catch(function(error){
                 console.log(reg.menuItem);
                reg.favoriteDish=true;
                reg.saved=false;
                console.log(reg.favoriteDish+"2");
            });
          }else {
            info.registrated = true;
            MenuService.storeInfo(info);
            reg.saved=true;
            reg.favoriteDish=false;
            console.log(reg.favoriteDish+"3");
          }
      };
    }
    
    })();