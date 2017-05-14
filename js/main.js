/* Custom JS goes here. */

// Create a document ready handler.
$(document).ready( function() {  
  $("#order-form").validate( {  
// Define a validation object for use on your page.
    submitHandler: function(form) {
// Connect the validation object to an event handler tied to the submit button.
      form.submit();
      showErrors();
    },
// Refer to the `index.html` file for the validation rules that must be enforced.
    rules: {
      "your-name": {
        required: true,
        maxlength: 128, 
        alpha: true
    },
      "your-address": {
        required: true
    },
      "your-city": {
        required: true,
        alpha: true
    },
      "your-state": {
        required: true,
        maxlength: 2, 
        lettersonly: true
    },
      "your-zip": {
        required: true,
        minlength: 5,
        maxlength: 10,
        numbers: true
    },
      "card-holder-name": {
        required: true, 
        maxlength: 128, 
        alpha: true
    }, 
      "card-number": {
        required: true,
        creditcard: true, 
        numbers: true, 
        minlength: 16,
        maxlength: 19
    },
      "expiry-month": {
        dropDownVal: true
    },
      "expiry-year": {
        required: true 
    },
      "cvv": {
        required: true, 
        digits: true, 
        minlength: 3,
        maxlength: 3
    },
      "shipping-method": {
        dropDownVal: true
    },
      "comments": {
        maxlength: 500
    }
    }, //  rules
    messages: {
      "your-name": {
        alpha: "Please enter only letters, periods or spaces."
      },
      "card-holder-name": {
        alpha: "Please enter only letters, periods or spaces."
      },
      "your-zip": {
        numbers: "Please enter only digits, hyphens or spaces."
      },
      "card-number": {
        numbers: "Please enter only digits, hyphens or spaces."
      }
  }   //  messages
  }); //  submitHandler
});   //  ready

