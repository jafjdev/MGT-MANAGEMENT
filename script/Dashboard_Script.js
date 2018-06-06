var paramstr = window.location.search.substr(1);
	var paramarr = paramstr.split ("&");
	var params = {};


	for ( var i = 0; i < paramarr.length; i++) {
 	   var tmparr = paramarr[i].split("=");
   	 params[tmparr[0]] = tmparr[1];
	}
var userid =params["id"];
