var siteApp = angular.module('siteApp', ['ngSanitize', 'ngCookies', 'pascalprecht.translate']);

siteApp.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en-US', {
        TITLE: 'Wellyngton Carvalho | WEB Developer',
        OCCUPATION: 'WEB Developer',
        LANG: 'Português',
        SKILLS: 'Skills',
        PORTFOLIO: 'Website Portfolio',
        ADRESS: '<i class="fa fa-map-marker fa-margin"></i>São Carlos - SP, Brasil',
        CONTACT: 'Contact',
        
    });
    $translateProvider.translations('pt-BR', {
        TITLE: 'Wellyngton Carvalho | Desenvolvedor WEB',
        OCCUPATION: 'Desenvolvedor WEB',
        LANG: 'English',
        SKILLS: 'Conhecimentos',
        PORTFOLIO: 'Portfólio de Sites',
        ADRESS: '<i class="fa fa-map-marker fa-margin"></i>São Carlos - SP, Brasil',
        CONTACT: 'Contato',
    });
    $translateProvider.preferredLanguage('pt-BR');
    $translateProvider.useSanitizeValueStrategy('sanitize');
}]);
siteApp.controller('indexCtrl', ['$scope', '$window', '$translate', function ($scope, $window, $translate) {
   
    $scope.lang = $window.navigator.language || $window.navigator.userLanguage;
    $scope.currentLang = $scope.lang;

    $scope.changeLanguage = function () {
        if ($scope.currentLang == 'pt-BR') {
            $translate.use('en-US');
            $scope.currentLang = 'en-US';
        } else {
            $translate.use('pt-BR');
            $scope.currentLang = 'pt-BR';
        }
    };

    function setLanguage() {

        if ($scope.lang != 'pt-BR') {
            $translate.use('en-US');
        } else {
            $translate.use($scope.lang);
        }
    }

    setLanguage();
}]);