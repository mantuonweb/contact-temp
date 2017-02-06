var contactModule = angular.module('contactManagement', []);
/**
 * @class Services.ContactService
 * This is a api-service, intended to call API used by Contact modules of application.
 */
contactModule.factory("contactService", ['Restangular', '$q', function(Restangular, $q) {
    var service = {};

    /**
     * @method getContactData
     * Get the Contact data
     * @return object
     */
    service.getContactData = function(id) {
        var deferred = $q.defer();
        var contact = {};
        this.getContacts(id).then(function(contacts) {
            contact = _.find(contacts, function(item) {
                return item.id === id;
            });
            deferred.resolve(contact);
        }, function() {
            console.log("Error in getting record");
        });

        return deferred.promise;

        // var requestData = pageId ? {
        //   "pageId": pageId
        // } : {};
        // var requestBody = {
        //   "mrequest": requestData
        // };

        // var result = Restangular.all('MAccountHierarchyAccList.action').post(requestBody);
        // return result;
    };
    /**
     * @method getContacts
     * Get the list of the contact for the accounts
     * @return object
     */
    service.getContacts = function(accountId) {
        //http://www.json-generator.com/api/json/get/bQnBwciFwy?indent=2
        //http://www.json-generator.com/
        var deferred = $q.defer();
        var contacts =
            [{
                "id": "5885d033ca9d877486ff9319",
                "shown": false,
                "name": "Crystal Marshall",
                "role": "Admin",
                "defaultcontact": "mobile",
                "email": "crystalmarshall@netagy.com",
                "phone": "+1 (956) 570-3521",
                "home": "+1 (819) 536-2397",
                "work": "+1 (922) 516-3978",
                "fax": "+1 (919) 482-2738",
                "address": "Etna Street, Norwood, Virgin Islands"
            }, {
                "id": "5885d033a9e5d6dd029b6f3a",
                "shown": false,
                "name": "Medina Medina",
                "role": "Admin",
                "defaultcontact": "mobile",
                "email": "medinamedina@netagy.com",
                "phone": "+1 (893) 483-3891",
                "home": "+1 (915) 553-3346",
                "work": "+1 (934) 431-3285",
                "fax": "+1 (972) 579-2673",
                "address": "Engert Avenue, Homestead, Massachusetts"
            }, {
                "id": "5885d03343abab677595b685",
                "shown": false,
                "name": "Leila Ray",
                "role": "Admin",
                "defaultcontact": "mobile",
                "email": "leilaray@netagy.com",
                "phone": "+1 (979) 481-2418",
                "home": "+1 (868) 532-3144",
                "work": "+1 (909) 486-3489",
                "fax": "+1 (923) 542-2051",
                "address": "Chester Street, Mulino, Delaware"
            }, {
                "id": "5885d03319610165eb46e3b8",
                "shown": false,
                "name": "Luann Richard",
                "role": "SSE",
                "defaultcontact": "mobile",
                "email": "luannrichard@netagy.com",
                "phone": "+1 (967) 586-2094",
                "home": "+1 (835) 564-2736",
                "work": "+1 (823) 510-3584",
                "fax": "+1 (936) 541-3070",
                "address": "Lawrence Street, Snowville, Michigan"
            }, {
                "id": "5885d033034ffd89a9fd9ab8",
                "shown": false,
                "name": "Gibbs Kramer",
                "role": "Lead",
                "defaultcontact": "home",
                "email": "gibbskramer@netagy.com",
                "phone": "+1 (922) 559-3103",
                "home": "+1 (912) 469-3587",
                "work": "+1 (904) 546-3982",
                "fax": "+1 (819) 506-3261",
                "address": "Cumberland Walk, Cataract, West Virginia"
            }, {
                "id": "5885d033e289d32c94950e6a",
                "shown": false,
                "name": "Cohen Holcomb",
                "role": "SSE",
                "defaultcontact": "mobile",
                "email": "cohenholcomb@netagy.com",
                "phone": "+1 (974) 419-2238",
                "home": "+1 (895) 512-3171",
                "work": "+1 (951) 555-2326",
                "fax": "+1 (897) 431-3317",
                "address": "Jaffray Street, Stockdale, South Dakota"
            }, {
                "id": "5885d033bd9015f892d0f296",
                "shown": false,
                "name": "Burks Collins",
                "role": "SSE",
                "defaultcontact": "mobile",
                "email": "burkscollins@netagy.com",
                "phone": "+1 (821) 405-2821",
                "home": "+1 (886) 519-2112",
                "work": "+1 (920) 580-2984",
                "fax": "+1 (832) 562-2431",
                "address": "Harwood Place, Cazadero, Tennessee"
            }, {
                "id": "5885d0339c792b1de4bd8508",
                "shown": false,
                "name": "Fields Levine",
                "role": "Lead",
                "defaultcontact": "mobile",
                "email": "fieldslevine@netagy.com",
                "phone": "+1 (899) 591-2584",
                "home": "+1 (842) 408-2247",
                "work": "+1 (930) 528-3305",
                "fax": "+1 (841) 576-2473",
                "address": "Lott Street, Conestoga, Colorado"
            }, {
                "id": "5885d0332680fcfcbcf4fa2c",
                "shown": false,
                "name": "Deena Nash",
                "role": "Lead",
                "defaultcontact": "home",
                "email": "deenanash@netagy.com",
                "phone": "+1 (888) 541-2605",
                "home": "+1 (990) 458-2210",
                "work": "+1 (941) 469-3318",
                "fax": "+1 (885) 595-2932",
                "address": "Jerome Avenue, Chical, Alabama"
            }, {
                "id": "5885d033e96d14388fc523e0",
                "shown": false,
                "name": "Perez Ruiz",
                "role": "Admin",
                "defaultcontact": "work",
                "email": "perezruiz@netagy.com",
                "phone": "+1 (903) 544-2383",
                "home": "+1 (804) 474-3305",
                "work": "+1 (974) 496-3750",
                "fax": "+1 (967) 475-3106",
                "address": "Stockton Street, Lemoyne, Louisiana"
            }, {
                "id": "5885d033746634f40079a225",
                "shown": false,
                "name": "Jacquelyn Osborne",
                "role": "Lead",
                "defaultcontact": "home",
                "email": "jacquelynosborne@netagy.com",
                "phone": "+1 (827) 543-2067",
                "home": "+1 (909) 558-3087",
                "work": "+1 (842) 471-2248",
                "fax": "+1 (978) 409-3427",
                "address": "Lacon Court, Fedora, Connecticut"
            }, {
                "id": "5885d033035fca4718674f67",
                "shown": false,
                "name": "Melva Mcbride",
                "role": "Lead",
                "defaultcontact": "work",
                "email": "melvamcbride@netagy.com",
                "phone": "+1 (976) 482-3181",
                "home": "+1 (803) 449-2826",
                "work": "+1 (913) 588-3804",
                "fax": "+1 (803) 502-3865",
                "address": "River Street, Gibbsville, Ohio"
            }, {
                "id": "5885d03362f3d092afe33bcc",
                "shown": false,
                "name": "Janie Henderson",
                "role": "SSE",
                "defaultcontact": "home",
                "email": "janiehenderson@netagy.com",
                "phone": "+1 (986) 445-3459",
                "home": "+1 (943) 581-2144",
                "work": "+1 (953) 576-2571",
                "fax": "+1 (899) 440-2170",
                "address": "Louisiana Avenue, Fairview, South Carolina"
            }, {
                "id": "5885d033d59a18a2f3b9c04e",
                "shown": false,
                "name": "Walker Tyson",
                "role": "Admin",
                "defaultcontact": "mobile",
                "email": "walkertyson@netagy.com",
                "phone": "+1 (881) 537-3100",
                "home": "+1 (825) 527-3304",
                "work": "+1 (923) 592-3687",
                "fax": "+1 (846) 596-2841",
                "address": "Winthrop Street, Knowlton, Washington"
            }];
        deferred.resolve(contacts);
        return deferred.promise;
    };
    /**
     * @method getContactTypes
     * Get the list of the contact types
     * @return object
     */
    service.getContactTypes = function() {
        var deferred = $q.defer();

        var contacttypes = [{
            "id": 0,
            "value": "Additional Ticketing"
        }, {
            "id": 1,
            "value": "After Hours"
        }, {
            "id": 2,
            "value": "Assistant"
        }, {
            "id": 3,
            "value": "Authorizing - Primary"
        }, {
            "id": 4,
            "value": "Authorizing - Secondary"
        }, {
            "id": 5,
            "value": "CPE - Vendor"
        }, {
            "id": 6,
            "value": "Data - Technical"
        }, {
            "id": 7,
            "value": "Data - Vendor"
        }, {
            "id": 8,
            "value": "Dispatched"
        }, {
            "id": 9,
            "value": "Local Ticketing"
        }, {
            "id": 10,
            "value": "Master Partner"
        }, {
            "id": 11,
            "value": "On-Site Coordinator"
        }, {
            "id": 12,
            "value": "Other"
        }, {
            "id": 13,
            "value": "Other - Technical"
        }, {
            "id": 14,
            "value": "Partner"
        }, {
            "id": 15,
            "value": "Primary Billing"
        }, {
            "id": 16,
            "value": "Primary Managed Router"
        }, {
            "id": 17,
            "value": "Primary Ticketing"
        }, {
            "id": 18,
            "value": "Secondary Billing"
        }, {
            "id": 19,
            "value": "Sub Agent Partner Contact"
        }, {
            "id": 20,
            "value": "Transport Primary"
        }, {
            "id": 21,
            "value": "Transport Secondary"
        }, {
            "id": 22,
            "value": "Voice - Technical"
        }, {
            "id": 23,
            "value": "Voice - Vendor"
        }];
        deferred.resolve(contacttypes);
        return deferred.promise;

    };
    /**
     * @method addContact
     * add Contact into the hierarchy
     * @return object
     */
    service.addContact = function(contact) {
        var deferred = $q.defer();
        deferred.resolve();
        return deferred.promise;

    };
    /**
     * @method editContact
     * edit Contact into the hierarchy
     * @return object
     */
    service.editContact = function() {
        var deferred = $q.defer();
        deferred.resolve();
        return deferred.promise;

    };
    //this method will be removed from here
    service.getAccounts = function() {
        var deferred = $q.defer();
        var accounts = [{
            "id": 0,
            "value": "4361922 - SERVICE KING PAINT AND BODY LLC"
        }, {
            "id": 1,
            "value": "4575608 - SERVICE KING PAINT AND BODY - #002 NATICK"
        }, {
            "id": 2,
            "value": "4575632 - SERVICE KING PAINT AND BODY - #004 ALLENTOWN, PA"
        }, {
            "id": 3,
            "value": "4575634 - SERVICE KING PAINT AND BODY - #007 HUNTINGDON VAL"
        }, {
            "id": 4,
            "value": "4575637 - SERVICE KING PAINT AND BODY - #009 WILLOWBROOK, TX"
        }, {
            "id": 5,
            "value": "4575639 - SERVICE KING PAINT AND BODY - #012 BELLAIRE, TX"
        }, {
            "id": 6,
            "value": "4575647 - SERVICE KING PAINT AND BODY - #023 MANDARIN, FL"
        }, {
            "id": 7,
            "value": "4575649 - SERVICE KING PAINT AND BODY -#024 JACKSONVILLE WST"
        }, {
            "id": 8,
            "value": "4575651 - SERVICE KING PAINT AND BODY - #029 OLDE OAK, TX"
        }, {
            "id": 9,
            "value": "4575658 - SERVICE KING PAINT AND BODY - #033 PURITAS, OH"
        }, {
            "id": 10,
            "value": "4575660 - SERVICE KING PAINT AND BODY - #034 CUYAHOGA FALLS"
        }, {
            "id": 11,
            "value": "4575666 - SERVICE KING PAINT AND BODY - #038 CLEAR LAKE, TX"
        }, {
            "id": 12,
            "value": "4575668 - SERVICE KING PAINT AND BODY - #039 DECATUR, GA"
        }, {
            "id": 13,
            "value": "4575690 - SERVICE KING PAINT AND BODY - #041 DULUTH, GA"
        }, {
            "id": 14,
            "value": "4575696 - SERVICE KING PAINT AND BODY - #042 LOMBARD, IL"
        }, {
            "id": 15,
            "value": "4575698 - SERVICE KING PAINT AND BODY - #045 GLEN BURNIE, MD"
        }, {
            "id": 16,
            "value": "4575700 - SERVICE KING PAINT AND BODY - #046 IRVING, TX"
        }, {
            "id": 17,
            "value": "4575702 - SERVICE KING PAINT AND BODY - #048 HERNDON-RESTON"
        }, {
            "id": 18,
            "value": "4575704 - SERVICE KING PAINT AND BODY - #049 TAMPA, FL"
        }, {
            "id": 19,
            "value": "4575705 - SERVICE KING PAINT AND BODY - #050 ORLANDO EAST FL"
        }, {
            "id": 20,
            "value": "4575712 - SERVICE KING PAINT AND BODY - #055 BLUE ISLAND, IL"
        }, {
            "id": 21,
            "value": "4575715 - SERVICE KING PAINT AND BODY - #056 MIDVALE, UT"
        }, {
            "id": 22,
            "value": "4575717 - SERVICE KING PAINT AND BODY - #057 PENN HILLS, PA"
        }, {
            "id": 23,
            "value": "4575720 - SERVICE KING PAINT AND BODY -#059 ST PETERSBURG,FL"
        }, {
            "id": 24,
            "value": "4575727 - SERVICE KING PAINT AND BODY- #061 ORLANDO WEST, FL"
        }, {
            "id": 25,
            "value": "4575730 - SERVICE KING PAINT AND BODY - #063 GAITHERSBURG,MD"
        }, {
            "id": 26,
            "value": "4575732 - SERVICE KING PAINT AND BODY - #064 SARASOTA, FL"
        }, {
            "id": 27,
            "value": "4575733 - SERVICE KING PAINT AND BODY - #065 CHARLOTTE, NC"
        }, {
            "id": 28,
            "value": "4575734 - SERVICE KING PAINT AND BODY- #068 W PALM BEACH, FL"
        }, {
            "id": 29,
            "value": "4575736 - SERVICE KING PAINT AND BODY - #070 MADISON HTS"
        }, {
            "id": 30,
            "value": "4575738 - SERVICE KING PAINT AND BODY - #071 AUSTIN, TX"
        }, {
            "id": 31,
            "value": "4575739 - SERVICE KING PAINT AND BODY - #072 ROCHESTER, NY"
        }, {
            "id": 32,
            "value": "4575741 - SERVICE KING PAINT AND BODY - #073 MARIETTA, GA"
        }, {
            "id": 33,
            "value": "4575743 - SERVICE KING PAINT AND BODY -#074 SAN ANTONIO THOU"
        }, {
            "id": 34,
            "value": "4575744 - SERVICE KING PAINT AND BODY - #075 FORT BEND, TX"
        }, {
            "id": 35,
            "value": "4575745 - SERVICE KING PAINT AND BODY - #076 COLUMBUS, OH"
        }, {
            "id": 36,
            "value": "4575753 - SERVICE KING PAINT AND BODY - #080 POMPANO BCH, FL"
        }, {
            "id": 37,
            "value": "4575754 - SERVICE KING PAINT AND BODY - #081 PHILADELPHIA S"
        }, {
            "id": 38,
            "value": "4575757 - SERVICE KING PAINT AND BODY - #082 SAN JOSE, CA"
        }, {
            "id": 39,
            "value": "4575758 - SERVICE KING PAINT AND BODY - #095 LAS VEGAS, NV"
        }, {
            "id": 40,
            "value": "4575759 - SERVICE KING PAINT AND BODY - #085 PLACENTIA, CA"
        }, {
            "id": 41,
            "value": "4575762 - SERVICE KING PAINT AND BODY - #086 FOUNTAIN VLY CA"
        }, {
            "id": 42,
            "value": "4575763 - SERVICE KING PAINT AND BODY - #087 EAST DUNDEE, IL"
        }, {
            "id": 43,
            "value": "4575765 - SERVICE KING PAINT AND BODY - #088 LIVONIA, MI"
        }, {
            "id": 44,
            "value": "4575766 - SERVICE KING PAINT AND BODY - #089 OAKLAND, CA"
        }, {
            "id": 45,
            "value": "4575767 - SERVICE KING PAINT AND BODY - #090 ONTARIO, CA"
        }, {
            "id": 46,
            "value": "4575789 - SERVICE KING PAINT AND BODY - #092 NAPERVILLE, IL"
        }, {
            "id": 47,
            "value": "4592816 - SERVICE KING PAINT AND BODY - COLO"
        }, {
            "id": 48,
            "value": "4605192 - SERVICE KING PAINT AND BODY- #003 WEST CHESTER, PA"
        }, {
            "id": 49,
            "value": "4703621 - SERVICE KING PAINT AND BODY - #091 CENTENNIAL"
        }, {
            "id": 50,
            "value": "4705430 - SERVICE KING PAINT AND BODY - #094 LAWRENCEVILLE"
        }, {
            "id": 51,
            "value": "4738820 - SERVICE KING PAINT AND BODY - #083 LAS VEGAS"
        }, {
            "id": 52,
            "value": "4738821 - SERVICE KING PAINT AND BODY - #001 CALL CENTER"
        }, {
            "id": 53,
            "value": "4798067 - SERVICE KING PAINT AND BODY - CHARLESTOWN, MA"
        }, {
            "id": 54,
            "value": "4800897 - SERVICE KING PAINT AND BODY - DENVER VTNS"
        }, {
            "id": 55,
            "value": "4801075 - SERVICE KING PAINT AND BODY - COLUMBUS VTNS"
        }, {
            "id": 56,
            "value": "5209356 - SERVICE KING PAINT AND BODY - ROLLING MEADOWS CPE"
        }, {
            "id": 57,
            "value": "5212393 - SERVICE KING PAINT AND BODY - #016 LIBERTYVILLE"
        }, {
            "id": 58,
            "value": "5213812 - SERVICE KING PAINT AND BODY - #069 SA BANDERA TX"
        }, {
            "id": 59,
            "value": "5213815 - SERVICE KING PAINT AND BODY - #035 ROLLING MEADOWS"
        }, {
            "id": 60,
            "value": "5213821 - SERVICE KING PAINT AND BODY - #058 THORNTON"
        }, {
            "id": 61,
            "value": "5214205 - SERVICE KING PAINT AND BODY - SAN ANTONIO VTNS"
        }, {
            "id": 62,
            "value": "5214208 - SERVICE KING PAINT AND BODY - LIBERTYVILLE VTNS"
        }, {
            "id": 63,
            "value": "5214209 - SERVICE KING PAINT AND BODY - CLEVELAND VTNS"
        }, {
            "id": 64,
            "value": "5214211 - SERVICE KING PAINT AND BODY - ROLLING MEADOW VTNS"
        }, {
            "id": 65,
            "value": "5267015 - SERVICE KING PAINT AND BODY - #093 LINCOLNWOOD, IL"
        }];
        deferred.resolve(accounts);
        return deferred.promise;
    };

    return service;
}]);

//change by mantu.
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
contactModule.controller('contactController', ['$scope', '$state', 'myAccountService', 'contactService', 'utils', 'loginService', '$ionicScrollDelegate', 'appConstants', function($scope, $state, myAccountService, contactService, utils, loginService, $ionicScrollDelegate, appConstants) {
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
contactModule.directive('wolSelectAccount', function() {
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
contactModule.directive('wolSelectContactType', function() {
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
contactModule.directive('wolSelectOldContactType', function() {
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
contactModule.directive('wolContactSaveForm', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'templates/contact/contact-form-new.html',
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
contactModule.directive('wolContactSearchForm', function() {
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
contactModule.directive('wolContactListItem', function() {
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
