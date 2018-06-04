function new_proy(){
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
	var name=document.getElementById("name_proy").value;
	var descrip=document.getElementById("descrip_proy").value;
	var database = firebase.database();
	database.ref('Project/'+ name).set({
				nombre: name,
				descripción: descrip,
				estatus:"Activo",
				uid_creador:user.uid
	}).catch(function(error){
	var errorCode = error.code;
	var errorMessage = error.message;
	window.alert(errorMessage);

});
  } else {
    window.alert("error instancia de usuario");
    location = 'page-login.html';
  }
})	;
		
}