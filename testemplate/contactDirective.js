//test
var contactDirective = angular.module('contactManagement', []);
contactDirective.controller('contactSearchController', ['$scope', '$state', 'myAccountService', 'contactService', 'utils', 'loginService', '$ionicScrollDelegate', 'appConstants', '$ionicModal', function($scope, $state, myAccountService, contactService, utils, loginService, $ionicScrollDelegate, appConstants, $ionicModal) {
    $scope.contacts = [];
    $scope.contactSearchData = {};
    init();

    function getContacts() {
        contactService.getContacts().then(function(contacts) {
            $scope.contacts = contacts;
        }, function() {

        });
    };

    $scope.deleteContact = function(item, e) {
        $scope.contacts = _.filter($scope.contacts, function(mitem) {
            return item != mitem;
        });
    };

    $scope.gotoAdd = function(e) {
        e.preventDefault();
        e.stopPropagation();
        $state.go("menu.contact");
    }

    function init() {
        utils.checkNinty().then(function(proceed) {
            if (proceed) {
                if (utils.isNetworkAvailable()) {
                    getContacts();
                }
            } else {
                utils.showAlert('Alert', appConstants.networkMessage);
            }
        });
    }
}]);
contactDirective.controller('contactController', ['$scope', '$state', 'myAccountService', 'contactService', 'utils', 'loginService', '$ionicScrollDelegate', 'appConstants', function($scope, $state, myAccountService, contactService, utils, loginService, $ionicScrollDelegate, appConstants) {
    $scope.accountSections = [];
    $scope.isTablet = window.innerWidth >= 600 ? true : false;
    $scope.dataLoaded = false;
    $scope.showError = false;
    $scope.showAccountList = false;
    $scope.showContactTypeList = false;
    $scope.accountSelected = [];
    $scope.contactTypeSelected = [];
    $scope.appConstants = appConstants;
    $scope.contactData = {};
    init();

    $scope.gotoSearch = function() {
        //$state.go("menu.contactsearch");
        utils.showAlert('Alert', 'Enter Firstname');
    };

    $scope.onSave = function() {
        utils.showAlert('Alert', 'Enter Firstname');
    }

    function getAccounts() {
        contactService.getAccounts().then(function(accounts) {
            $scope.accountTotal = accounts;
        }, function() {});
    }

    function getContactTypes() {
        contactService.getContactTypes().then(function(contacts) {
            $scope.contactTypeTotal = contacts;
        }, function() {});
    }

    function init() {
        utils.checkNinty().then(function(proceed) {
            if (proceed) {
                if (utils.isNetworkAvailable()) {
                    getContactTypes();
                    getAccounts();
                }
            } else {
                utils.showAlert('Alert', appConstants.networkMessage);
            }
        });
    }
}]);
contactDirective.directive('wolSelectAccount', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'templates/contact/add-account.html',
        scope: {
            add: '&',
            del: '=',
            list: '=',
            selectedlist: '='
        },
        controller: ['$scope', '$state', '$ionicModal', 'utils', function($scope, $state, $ionicModal, utils) {
            $scope.modalType = "Account";
            $ionicModal.fromTemplateUrl('templates/contact/select-account-modal.html', {
                scope: $scope,
                animation: 'slide-in-up',
                backdropClickToClose: false
            }).then(function(modal) {
                $scope.accModal = modal;
            });
            $scope.toggle = function() {
                $scope.shown = !$scope.shown;
            };
            $scope.selectItem = function(item) {
                item.isSelected = !item.isSelected;
            };
            $scope.getArrayType = function(type) {
                _.each($scope.list, function(item) {
                    item.isSelected = false;
                });
                var diff = _.difference(_.pluck($scope.list, "id"), _.pluck($scope.selectedlist, "id"));
                var result = _.filter($scope.list, function(obj) {
                    return diff.indexOf(obj.id) >= 0;
                });
                return _.clone(result);
            };
            $scope.removeSelected = function(item, type) {
                $scope.selectedlist = _.filter($scope.selectedlist, function(mitem) {
                    return item !== mitem;
                });
            };
            $scope.openModal = function(e) {
                e && e.preventDefault();
                e && e.stopPropagation();
                $scope.modalList = $scope.getArrayType($scope.modalType);
                $scope.accModal.show();
            };
            $scope.addSelected = function() {
                var selected = _.filter($scope.modalList, function(item) {
                    return item.isSelected;
                });
                $scope.selectedlist.push.apply($scope.selectedlist, selected);
                $scope.accModal.hide();
            };
        }]
    }
});
contactDirective.directive('wolSelectContactType', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'templates/contact/add-contact.html',
        scope: {
            add: '&',
            del: '=',
            list: '=',
            selectedlist: '='
        },
        controller: ['$scope', '$state', '$ionicModal', 'utils', function($scope, $state, $ionicModal, utils) {
            $scope.modalType = "Contact type";
            $ionicModal.fromTemplateUrl('templates/contact/select-account-modal.html', {
                scope: $scope,
                animation: 'slide-in-up',
                backdropClickToClose: false
            }).then(function(modal) {
                $scope.accModal = modal;
            });
            $scope.toggle = function() {
                $scope.shown = !$scope.shown;
            };
            $scope.selectItem = function(item) {
                item.isSelected = !item.isSelected;
            };
            $scope.getArrayType = function(type) {
                _.each($scope.list, function(item) {
                    item.isSelected = false;
                });
                var diff = _.difference(_.pluck($scope.list, "id"), _.pluck($scope.selectedlist, "id"));
                var result = _.filter($scope.list, function(obj) {
                    return diff.indexOf(obj.id) >= 0;
                });
                return _.clone(result);
            };
            $scope.removeSelected = function(item, type) {
                $scope.selectedlist = _.filter($scope.selectedlist, function(mitem) {
                    return item !== mitem;
                });
            };
            $scope.openModal = function(e) {
                e && e.preventDefault();
                e && e.stopPropagation();
                $scope.modalList = $scope.getArrayType($scope.modalType);
                $scope.accModal.show();
            };
            $scope.addSelected = function() {
                var selected = _.filter($scope.modalList, function(item) {
                    return item.isSelected;
                });
                $scope.selectedlist.push.apply($scope.selectedlist, selected);
                $scope.accModal.hide();
            };
        }]
    }
});
contactDirective.directive('wolSelectOldContactType', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'templates/contact/add-contact-alternate.html',
        scope: {
            add: '&',
            del: '=',
            list: '=',
            selectedlist: '='
        },
        controller: ['$scope', '$state', '$ionicModal', 'utils', function($scope, $state, $ionicModal, utils) {
            $scope.modalType = "Contact type";
            $scope.toggle = function() {
                $scope.shown = !$scope.shown;
                if (!$scope.shown) {
                    $scope.list = $scope.list.sort(function(a, b) {
                        return Boolean(b.isSelected) - Boolean(a.isSelected);
                    });
                }
            };
            $scope.addSelected = function() {
                $scope.selectedlist = _.filter($scope.list, function(item) {
                    return item.isSelected;
                });
            };
        }]
    }
});

//to implement the contact form view
contactDirective.directive('wolContactSaveForm', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl:'templates/contact/contact-form-new.html',
        //template:localStorage.contactFormScreen,
        scope: {
            contactData: '=formData'
        },
        controller: ['$scope', '$state', function($scope, $state) {
            $scope.search = function() {
                console.log("Hi I am here", $scope.account);
            }
        }]
    }
});
contactDirective.directive('wolContactSearchForm', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'templates/contact/contact-search-form.html',
        scope: {
            contactSearchData: '=formData'
        },
        controller: ['$scope', '$state', function($scope, $state) {
            $scope.search = function() {
                console.log("Hi I am here", $scope.account);
            }
        }]
    }
});


//contact search table display containt
contactDirective.directive('wolContactListItem', function() {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            item: '=',
            del: '&',
        },
        templateUrl: 'templates/contact/contact-search-list-item.html',
        controller: ['$scope', '$state', 'utils', function($scope, $state, utils) {

            $scope.toggleAccordian = function(item) {
                $scope.shown = !$scope.shown;
            };
            $scope.gotoAdd = function(e) {
                e.preventDefault();
                e.stopPropagation();
                $state.go("menu.contact");
            }
            $scope.deleteContact = function(item, e) {
                e.preventDefault();
                e.stopPropagation();
                utils.showAlert('Confirm', 'Are you sure you wanna to delete ' + item.name + ' as a contact?', function() {
                    $scope.del();
                }, function() {

                });
            };
        }]
    }
});
