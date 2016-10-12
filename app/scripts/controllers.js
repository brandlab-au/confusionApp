'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = 'lunes';
            $scope.showDetails = false;

            $scope.sports= menuFactory.getSports();

                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 1) {
                    $scope.filtText = "lunes";
                }
                else if (setTab === 2) {
                    $scope.filtText = "martes";
                }
                else if (setTab === 3) {
                    $scope.filtText = "miercoles";
                }
                else if (setTab === 4) {
                    $scope.filtText = "jueves";
                }
                 else if (setTab === 5) {
                    $scope.filtText = "viernes";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope','$http', function($scope,$http) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
             
     
        }])

        .controller('FeedbackController', ['$scope','$http', function($scope,$http) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
                
                       // new form send email
            
            $http({
                method: 'POST',
                url: 'index.php',
                data: $.param($scope.feedback),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
           .success(function(data) {
            if (data.errors) {
              // Showing errors.
              
            } else {
              $scope.message = data.message;
            }
                });
                
        };
           
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

            var dish= menuFactory.getDish(parseInt($stateParams.id,10));
            
            $scope.dish = dish;
            
        }])

        .controller('DishCommentController', ['$scope', function($scope) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                
                $scope.dish.comments.push($scope.mycomment);
                
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            }
        }])

        // implement the IndexController and About Controller here

        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', 
            function($scope, menuFactory, corporateFactory) {

            $scope.featured_dish = menuFactory.getDish(2);
            
            $scope.dish = menuFactory.getDish(0);
                
            $scope.promotion_dish = menuFactory.getPromotion(0);
                
            $scope.chief = corporateFactory.getLeader(3);
                
            $scope.dish_new = menuFactory.getDish(1);
            // top photo
            $scope.spin = menuFactory.getDish(3); 
            
            $scope.pilates =  menuFactory.getPromotion(1); 
        }])

        .controller('AboutController', ['$scope', 'corporateFactory', 
            function($scope, corporateFactory) {

            $scope.leaders = corporateFactory.getLeaders();

        }]);
