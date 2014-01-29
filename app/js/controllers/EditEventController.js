

eventsApp.controller("EditEventController",
function EditEventController($scope){



    $scope.saveEvent= function(event,newEventForm){
        if(newEventForm.$valid){
            window.alert('Done saving ' + event.name);
        }

    };

    $scope.cancelEdit = function(){
        window.location="index.html";
    };


}
);
