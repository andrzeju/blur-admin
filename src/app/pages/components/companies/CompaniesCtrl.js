/**
 * @author andrzej
 * created on 18.03.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.companies')
      .controller('CompaniesCtrl', CompaniesCtrl);

  /** @ngInject */
  function CompaniesCtrl($scope, $filter, editableOptions, editableThemes, companyService) {

    $scope.smartTablePageSize = 10;
    $scope.smartTableData = companyService.companies;
    
    // $scope.showGroup = function(user) {
    //   if(user.group && $scope.groups.length) {
    //     var selected = $filter('filter')($scope.groups, {id: user.group});
    //     return selected.length ? selected[0].text : 'Not set';
    //   } else return 'Not set'
    // };

    // $scope.showStatus = function(user) {
    //   var selected = [];
    //   if(user.status) {
    //     selected = $filter('filter')($scope.statuses, {value: user.status});
    //   }
    //   return selected.length ? selected[0].text : 'Not set';
    // };


    // $scope.removeUser = function(index) {
    //   $scope.users.splice(index, 1);
    // };

    // $scope.addUser = function() {
    //   $scope.inserted = {
    //     id: $scope.users.length+1,
    //     name: '',
    //     status: null,
    //     group: null
    //   };
    //   $scope.users.push($scope.inserted);
    // };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
