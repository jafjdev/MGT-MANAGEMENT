var paramstr = window.location.search.substr(1);
	var paramarr = paramstr.split ("&");
	var params = {};


	for ( var i = 0; i < paramarr.length; i++) {
 	   var tmparr = paramarr[i].split("=");
   	 params[tmparr[0]] = tmparr[1];
	}

var id=params['id'];

function new_proy(){
	var name=document.getElementById("name_proy").value;
	var descrip=document.getElementById("descrip_proy").value;
	var database = firebase.database();
	database.ref('Project/'+ name).set({
				nombre: name,
				descripción: descrip,
				estatus:"Activo",
				uid_creador:id
	}).catch(function(error){
	var errorCode = error.code;
	var errorMessage = error.message;
	window.alert(errorMessage);

	});
			location="proyectos-compania.html?=id"+id;
}