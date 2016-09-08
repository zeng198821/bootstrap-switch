/**
 * Created by zeng on 2016-9-5.
 */
/**
 * Created by zeng on 2016-9-5.
 */
angular.module('myApp.directives', [])
    .directive('datepicker', function() {
        return {
            // Enforce the angularJS default of restricting the directive to
            // attributes only
            restrict: 'A',
            // Always use along with an ng-model
            require: '?ngModel',
            // This method needs to be defined and passed in from the
            // passed in to the directive from the view controller
            scope: {
                select: '&'        // Bind the select function we refer to the right scope
            },
            link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                var optionsObj = {};
                console.log("scope"+JSON.stringify(scope));
                console.log(scope);
                console.log("element"+JSON.stringify(element));
                console.log(element);
                console.log("attrs"+JSON.stringify(attrs));
                console.log(attrs);
                console.log("ngModel"+JSON.stringify(ngModel));
                console.log(ngModel);
                optionsObj.dateFormat = 'yy-mm-dd';
                var updateModel = function(dateTxt) {
                    scope.$apply(function () {
                        // Call the internal AngularJS helper to
                        // update the two way binding
                        ngModel.$setViewValue(dateTxt);
                    });
                };

                optionsObj.onSelect = function(dateTxt, picker) {
                    updateModel(dateTxt);
                    if (scope.select) {
                        scope.$apply(function() {
                            scope.select({date: dateTxt});
                        });
                    }
                };

                ngModel.$render = function() {
                    // Use the AngularJS internal 'binding-specific' variable
                    element.datepicker('setDate', ngModel.$viewValue || '');
                };
                element.datepicker(optionsObj);
            }
        };
    });