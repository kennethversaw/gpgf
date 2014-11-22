myApp.controller('registrationCtrl', function ($scope, Registration, $modal, $log) {
    $scope.imageOpacity = .3;
    
    $scope.newRegistration = new Registration();
    // $scope.items = ['item1', 'item2', 'item3'];
    $scope.showProgress = false;
    $scope.register = function () {
        $scope.newRegistration.$save();
    }
    $scope.$watch('form.$valid', function (newVal) {
        if (newVal) {
            $scope.imageOpacity = 1;
        } else {
            $scope.imageOpacity = .3;
        }
    });
        //$scope.newRegistration.$save(function() {
           
        //});
            //var modalInstance = $modal.open({
            //    templateUrl: 'myModalContent.html',
            //    controller: ModalInstanceCtrl,
            //    size: 'lg',
            //    resolve: {
            //        newRegistration: function () {
            //            return $scope.newRegistration;
            //        }
                //}
          

        //$scope.showProgress = true;
        //// call the service         
        //$scope.newRegistration.$save(function () {
        //    // when saved, reload the list and recreate a new task 

        //    var modalInstance = $modal.open({
        //        templateUrl: 'myModalContent.html',
        //        controller: ModalInstanceCtrl,
        //        size: 'lg',
        //        resolve: {
        //            newRegistration: function () {
        //                return $scope.newRegistration;
        //            }
        //        }
        //    });

        //    modalInstance.result.then(function (selectedItem) {
        //        // $scope.selected = selectedItem;
        //    }, function () {
        //        $log.info('Modal dismissed at: ' + new Date());
        //    });
        //    $scope.newRegistration = new Registration();
        //    $scope.showProgress = false;
        //});

   // }
    //var ModalInstanceCtrl = function ($scope, $modalInstance, newRegistration) {
    //    $scope.JeresyFee = (newRegistration.needJeresy == true) ? 18 : 0;
    //    $scope.ButtonCost = (isNaN(newRegistration.numberofButtons)) ? 0 : newRegistration.numberofButtons * 5;
    //    $scope.Donation = (newRegistration.yesDonate == true) ? 5 : 0;
    //    $scope.Total = 25 + $scope.JeresyFee + $scope.ButtonCost + $scope.Donation;

    //    $scope.ok = function () {
    //        $modalInstance.dismiss('ok');
    //    };

    //    $scope.cancel = function () {
    //        $modalInstance.dismiss('cancel');
    //    };
    //};
});