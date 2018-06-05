function Regist_click() {
var email=document.getElementById("email_inpt").value;
var pass=document.getElementById("pass_inpt").value;
var nombre=document.getElementById("name1_inpt").value;
var name2=document.getElementById("name2_inpt").value;
var ape=document.getElementById("ape1_inpt").value;
var ape2 = document.getElementById("ape2_inpt").value;
var addres = document.getElementById("address_inpt").value;
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
			uid:id
			}).then(user => {
        		location = 'proyectos-compania.html' //Url aqui
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