$(document).ready(function(){
	$('#checkboxscrum').change(function(){
		if(this.checked)
			$('#divScrum').fadeIn('slow');
		else
			$('#divScrum').fadeOut('slow');

	});
});