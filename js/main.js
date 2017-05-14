/* Custom JS goes here. */

// Create a document ready handler.
$(document).ready( function() {  
  
  // Custom functions
  // Alphabet with spaces and periods allowed
    $.validator.addMethod("alpha", function(value, element) {
      return this.optional(element) || value == value.match(/^[a-zA-Z .]+$/);
    });
  // Digits with hyphens and spaces allowed
    $.validator.addMethod("numbers", function(value, element) {
      return this.optional(element) || value == value.match(/^[0-9 -]+$/);
    });
  // Drop down selection with value = "none" throws error
    $.validator.addMethod("dropDownVal",
      function(value, select) {
        if (value == "none")
          return false;
        else
          return true;
    }, "Please select a value");
  
// If the form is valid, then submit  
  
  $("#order-form").validate( { 
    submitHandler: function(form) {
      showErrors();
      form.submit();
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
      "your-city": {
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

