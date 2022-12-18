(function () {
'use strict';

angular.module('CheckerApp',[])
.controller('CheckerController', CheckerController);

CheckerController.$inject = ['$scope'];
function CheckerController($scope){
$scope.message = "";

    $scope.checkTray = function() {
        if($scope.tray == null || $scope.tray.length == 0)
            $scope.message = "Please enter data first.";
        else{
            var traySize = $scope.tray.split(",").length;
            if(traySize > 0 && traySize < 4)
                $scope.message = "Enjoy!"
            else
                $scope.message = "Too much!"
        }
        
    };
}

})();