
var Contact = {
	firstName: "",
	lastName: "",
	phoneNumber: "",
	street: "",
	city: "",
	state: ""
};

var submissionArray = [];

$(document).ready(function() {


$('#add').click(function(e){
	e.preventDefault();
	var submission = Object.create(Contact);
	submission.firstName = $('#first-name').val();
	submission.lastName = $('#last-name').val();
	submission.phoneNumber = $('#phone-number').val();
	submission.street = $('#street').val();
	submission.city = $('#city').val();
	submission.state = $('#state').val();
	submissionArray.push(submission);
	$('#contact').append('<li>' + submission.firstName + '</li>');
});

$('#contact').click(function(){
	// alert('wassup yo');
	var index = $('#contact').index(this);

	$('.show-contact').data('test', Contact)
	$('.show-contact').append(Contact);
});

// $('.form-group').submit(function(e){
// 	e.preventDefault();
// 	var input = $('.form-control').val();
// 	$('.form-control').val("");

// });

// var submission = new Contact;





});