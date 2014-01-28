'use stricts';

eventsApp.controller("eventsController",
    function eventsController($scope , eventData)
    {


         eventData.getEvent(function(event){
            $scope.event= event;

        });





        $scope.upVoteSession = function(session){
            session.upVoteCount++;

        };
        $scope.downVoteSession = function(session){
            session.upVoteCount--;

        };

        $scope.mystyle={color:"#c44"};

        $scope.snippet = '<span style="color:red">hi there</span>';

        $scope.bool=false;

        $scope.sortorder = '-upVoteCount';


    }

);