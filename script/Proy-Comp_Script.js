var div = document.getElementById("proyectos");
var dbref= firebase.database();
var proyref = dbref.ref('Project');
var id=firebase.auth().currentUser.uid;s;
var i;

proyref.orderByValue() .on("value", function(data) {
   	data.forEach(function(data) {
   		data.forEach(function(data) {
   				console.log(data.key);
   				if(data.key=="uid_creador"){
   					console.log(data.val());
   					if(data.val()==id)
   					{
   						i=1;
   					}
   				}
   		
   		});
   		if(i==1)
   		{
 	  	div.innerHTML += proyectos(data.key);  	
		}
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
							html += '<a class="dropdown-item" href="#">Action</a>';
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