angular.module('aight').filter('age',function(){
  return function(input){
    if (!input){return null;}
    inputSplit = input.split("-");
    var inputDate = new Date(inputSplit[0],inputSplit[1]-1,inputSplit[2]);
    var ageDifMs = Date.now() - inputDate.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
});
