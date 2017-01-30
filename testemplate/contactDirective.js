WOLApp.directive('wolSelectAccount', function() {
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
WOLApp.directive('wolSelectContactType', function() {
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
WOLApp.directive('wolSelectOldContactType', function() {
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
WOLApp.directive('wolContactSaveForm', function() {
    return {
        restrict: 'EA',
        replace: true,
       // templateUrl: 'templates/contact/contact-save-form-ap.html',//'templates/contact/contact-form-new.html',
        template:localStorage.contactFormScreen,
        scope: {
            contactData:'=formData'
        },
        controller: ['$scope', '$state','utils', function($scope, $state,utils) {
            $scope.search=function () {
                console.log("Hi I am here",$scope.account);
                utils.showAlert('Alert', 'added button');
            }
        }]
    }
});



//contact search table display containt
WOLApp.directive('wolContactListItem', function() {
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
