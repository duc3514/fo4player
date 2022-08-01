function setCookie(cname,cvalue,exdays){if(!exdays)exdays=365;var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";}
function setItem(cname,cvalue){if(typeof(Storage)!=="undefined"){localStorage.setItem(cname,cvalue);}else{console.warn("No Web Storage support..");}}
function getItem(cname){if(typeof(Storage)!=="undefined"){var result=localStorage.getItem(cname);if(!isRealValue(result)){return "";}else{return result;}}else{console.warn("No Web Storage support..");}}
function removeItem(cname){if(typeof(Storage)!=="undefined"){return localStorage.removeItem(cname);}else{console.warn("No Web Storage support..");}}
function setOtem(cname,cvalue){if(typeof(Storage)!=="undefined"){sessionStorage.setItem(cname,cvalue);}else{console.warn("No Web Storage support..");}}
function getOtem(cname){if(typeof(Storage)!=="undefined"){var result=sessionStorage.getItem(cname);if(!isRealValue(result)){return "";}else{return result;}}else{console.warn("No Web Storage support..");}}
function removeOtem(cname){if(typeof(Storage)!=="undefined"){return sessionStorage.removeItem(cname);}else{console.warn("No Web Storage support..");}}
function isRealValue(obj){return obj&&obj!=='null'&&obj!=='undefined';}
function S(text){return text;}
(function(d){$(d).ready(function(){$.each($("lang"),function(key,value){var v=$(value);v.html(S(v.html()))})});})(document);
