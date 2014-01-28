'use strict'

eventsApp.factory('eventData',function($http,$log){
   return{
       getEvent:function(successcb){
           $http({method:'GET',url:'data/event/1.json'})
               .success(function(data,status,headers,config){
                    successcb(data);
                   $log.info(data,status,headers,config);
               })
               .error(function(data,status,headers,config){
                   $log.warn(data,status,headers,config);
               })

       }

   }
});