function Log_Click(){
var email=document.getElementById("email_inpt").value;
var pass=document.getElementById("pass_inpt").value	
var boole =0;
const promise = firebase.auth().signInWithEmailAndPassword(email, pass)
	.then(user => {
        location = 'proyectos-compania.html?id='+firebase.auth().currentUser.uid; //Url aqui
    }).catch(error => {
        window.alert(error);
    });
    promise.catch(e => window.alert(e.message));
}
