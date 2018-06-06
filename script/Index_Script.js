
function Log_Click(){
var email=document.getElementById("email_inpt").value;
var pass=document.getElementById("pass_inpt").value	
var boole =0;
const promise = firebase.auth().signInWithEmailAndPassword(email, pass)
	.then(user => {
		var id=firebase.auth().currentUser.uid;
		var dbref= firebase.database();
		var rolref = dbref.ref('User');
			rolref.orderByValue() .on("value", function(data) {
   				data.forEach(function(data) {
   					if(data.key==id)
   					{
   						data.forEach(function(data) {
   						if(data.key=="rol"){
   							if(data.val()=="admin"){
   								location='dashboard.html?id='+id;
   							}
   							else
   							{
   								location='proyectos-compania.html?id='+id;
   							}
   						}  		
   					});
   				}
   			});
 		});
      
    }).catch(error => {
        window.alert(error);
    });
    promise.catch(e => window.alert(e.message));
}

function getrol(id){
	var dbref= firebase.database();
	var rolref = dbref.ref('User');
	rolref.orderByValue() .on("value", function(data) {
   	data.forEach(function(data) {
   		if(data.key==id)
   		{
   			data.forEach(function(data) {
   				if(data.key=="rol"){
   					rol=data.val()
   				}  		
   			});
   		}
   		});
 	});
 	console.log(rol);
 	return(rol);

}