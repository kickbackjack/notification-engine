'use strict';

angular.module('notificationEngineApp.auth', [
  'notificationEngineApp.constants',
  'notificationEngineApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
