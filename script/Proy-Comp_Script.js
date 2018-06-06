var div = document.getElementById("proyectos");
var dbref= firebase.database();
var proyref = dbref.ref('Project');

//captura parametros

	var paramstr = window.location.search.substr(1);
	var paramarr = paramstr.split ("&");
	var params = {};


	for ( var i = 0; i < paramarr.length; i++) {
 	   var tmparr = paramarr[i].split("=");
   	 params[tmparr[0]] = tmparr[1];
	}

var id=params['id'];



var proy;
proyref.orderByValue() .on("value", function(data) {
   	data.forEach(function(data) {
   		proy=data.key;
   		data.forEach(function(data) {
   				if(data.key=="uid_creador"){
   					if(data.val()==id)
   					{
   					div.innerHTML += proyectos(proy);  	
   					}
   				}
   		
   		});
   	});
 });

function proyectos(val){
var html = '';
html +=' <div class="col-sm-6 col-lg-5">';
	html +='<div class="card text-white bg-flat-color-1">';
		html += '<div class="card-body pb-0">';
			html += '<div class="dropdown float-right">';
				html += '<button class="btn bg-transparent dropdown-toggle theme-toggle text-light"';
				html += 'type="button" id="dropdownMenuButton" data-toggle="dropdown">';
					html += '<i class="fa fa-cog"></i>';
					html += '</button>';
					html += '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">';
						html += '<div class="dropdown-menu-content">';
							html += '<a class="dropdown-item" href="proyecto-concreto.html">Detalles</a>';
							html += '<a class="dropdown-item" href="#">Another action</a>';
							html += '<a class="dropdown-item" href="#">Something else here</a>';
						html += '</div>';
					html += '</div>';
			html += '</div>';
			html += '<h4 class="mb-0">';
				html += '<span>'+val+'</span>';
			html += '</h4>';
		html += '</div>';
	html += '</div>';
html += '</div>';
return html;
}
function logout(){
    firebase.auth().signOut().then(function() {
       location = 'index.html'
    }).catch(function(error) {
      // An error happened.
    });
}


function newproyhref(){
location='new-project.html?id='+id;
}