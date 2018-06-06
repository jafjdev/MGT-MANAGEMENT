function Regist_click() {
var email=document.getElementById("email_inpt").value;
var pass=document.getElementById("pass_inpt").value;
var nombre=document.getElementById("name1_inpt").value;
var name2=document.getElementById("name2_inpt").value;
var ape=document.getElementById("ape1_inpt").value;
var ape2 = document.getElementById("ape2_inpt").value;
var addres = document.getElementById("address_inpt").value;
var rolname;
if(document.getElementById("address_check").checked==true)
{
	rolname="admin";
}
else
{
	rolname="developer";
}
firebase.auth().createUserWithEmailAndPassword(email,pass)
	.then(function(){
		firebase.auth().signInWithEmailAndPassword(email,pass)
		.then(user => {
			var database = firebase.database();
			var id=firebase.auth().currentUser.uid;
			database.ref('User/'+ id).set({
			name:nombre,
			name2:name2,
			lastName:ape,
			lastName2:ape2,
			addres:addres,
			rol:rolname,
			uid:id
			}).then(user => {
				if(rolname=="developer"){
					window.alert("entro");
        			location = 'proyectos-compania.html?id='+firebase.auth().currentUser.uid; //Url aqui
        		}
        		else if(rolname=="admin"){
        			location = 'dashboard.html?id='+firebase.auth().currentUser.uid; //Url aqui
        		}
        		
    		}).catch(error => {
        		window.alert(error);
    		});
		})
		.catch(function(error) {
  			var errorCode = error.code;
  			var errorMessage = error.message;
			window.alert(errorMessage);
		});
    })
	.catch(error => {
		var errorCode = error.code;
  		var errorMessage = error.message;
		window.alert(errorMessage);
	})
}