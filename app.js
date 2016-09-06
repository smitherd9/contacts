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


        //DOM manipulation     // This var elem is created after the page loads b/c it is within the .click function for #add.  
        var elem = $('<div>');       // Since it doesn't exist yet, you can't use $('.contact').click(function(){...});
        elem.text(submission.firstName);
        elem.addClass('contact');
        elem.data('index', submissionArray.length - 1);  // array location starts at 0 but the length of an array starts at 1
                                                         // if there is one item in an array, to find the index location you must subtract 1
        $('.show-contact').append(elem);


    });

// $('.contact').click()     // This will not work.  The $('.show-contact').on('click') is created when the page loads.
							// so the class and listener already exist.  Later, when the '.contact' is created, it will find that class upon the click listening event.

    $('.show-contact').on('click', '.contact', function() {
        // alert('wassup yo');
        var i = $(this).data('index');
        console.log(i);

        var c = submissionArray[i];
        console.log(c);
        // var contactInfo = c.firstName + c.lastName + c.phoneNumber + c.street + c.city + c.state;
        $('#contactInfo h2').text(c.firstName + ' ' + c.lastName);
        $('#contactInfo p#firstName').text('First Name:' + ' ' + c.firstName);
        $('#contactInfo p#lastName').text('Last Name:' + ' ' + c.lastName);
        $('#contactInfo p#phoneNumber').text('Phone Number:' + ' ' + c.phoneNumber);
        $('#contactInfo p#addresses').text('Addresses:');
        $('#contactInfo ul#addresses').append('<li>' + c.street + '</li>' + '<li>' + c.city + ' ' + c.state + ' ' + '</li>');  //.text('<li>' + c.street + '</li>');
        // $(this).append('<span class="contactInfo">' + contactInfo + '</span>');
    });

    // $('.form-group').submit(function(e){
    // 	e.preventDefault();
    // 	var input = $('.form-control').val();
    // 	$('.form-control').val("");

    // });

    // var submission = new Contact;





});
