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


    $('#add').click(function(e) {
        e.preventDefault();
        var submission = Object.create(Contact);
        submission.firstName = $('#first-name').val();
        submission.lastName = $('#last-name').val();
        submission.phoneNumber = $('#phone-number').val();
        submission.street = $('#street').val();
        submission.city = $('#city').val();
        submission.state = $('#state').val();
        submissionArray.push(submission);
        // $('#contact').append('<li>' + submission.firstName + '</li>');
        console.log(submissionArray);


        //DOM manipulation
        var elem = $('<div>');
        elem.text(submission.firstName);
        elem.addClass('contact');
        elem.data('index', submissionArray.length - 1);  // array location starts at 0 but the length of an array starts at 1
                                                         // if there is one item in an array, to find the index location you must subtract 1
        $('.show-contact').append(elem);


    });

    $('.show-contact').click(function() {
        // alert('wassup yo');
        var i = $(submissionArray[i]).data('index');
        console.log(i);

        var c = submissionArray[i];
        console.log(c);

        $(this).append(' <span class="contactInfo">' + c + '</span>');
    });

    // $('.form-group').submit(function(e){
    // 	e.preventDefault();
    // 	var input = $('.form-control').val();
    // 	$('.form-control').val("");

    // });

    // var submission = new Contact;





});
