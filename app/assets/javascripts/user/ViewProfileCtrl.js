angular.module("aight").controller("ViewProfileCtrl",[
"$scope",
"userService",
"reviewService",
"traitService",
"userResponse",
function($scope,userService,reviewService,traitService,userResponse){
  $scope.user = userResponse.data;
  $scope.newReview = {};
  //Fetch trait list if profile is reviewable
  if ($scope.user.reviewable){
    traitService.getAll().then(function(response){
      $scope.traits = response.data
    });
  }

  $scope.submitReview = function(newReview){
    //validate selectedTraits
    if (newReview.selectedTraits.length != 4){
      $scope.newReviewError = "You need to select 4 traits.";
      return;
    }
    var positiveTraits = newReview.selectedTraits.filter(function(el){
      return el.positive == true;
    });
    if (positiveTraits.length != 2){
      $scope.newReviewError = "You need to select 2 positive and 2 negative traits";
      return;
    }
    //Extract trait ids from trait items
    newReview.trait_ids = [];
    newReview.selectedTraits.forEach(function(trait){
      newReview.trait_ids.push(trait.id);
    })
    delete newReview.selectedTraits;
    //Create review
    $scope.newReviewError = false;
    reviewService.create($scope.user.id, newReview).then(function success(res){
        $scope.alerts = [{style: "alert-success", message: "You have successfully submitted your review." }];
        userService.get($scope.user.id).then(function(res){$scope.user= res.data});
        $scope.newReview = {};
      },function failed(res){
        $scope.alerts = [{style: "alert-danger", message: "You review submission failed" }];
      });
  }

}]);
