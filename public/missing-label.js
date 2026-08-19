(function(){
function cleanMissingLabel(){var labels=document.querySelectorAll('.zodiacMissing .featureKicker'),i;for(i=0;i<labels.length;i++)labels[i].textContent='協尋'}
var previous=window.generateCase;if(previous)window.generateCase=function(){var result;try{return result=previous.apply(this,arguments)}finally{cleanMissingLabel()}};cleanMissingLabel();
})();
