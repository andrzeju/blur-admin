/**
 * @author andrzej
 * created on 19/03/17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.companies', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('components.companies', {
        url: '/companies',
        templateUrl: 'app/pages/components/companies/companies.html',
          title: 'Firmy',
          sidebarMeta: {
            icon: 'ion-person-stalker',
            order: 100,
          },
      });
  }
})();