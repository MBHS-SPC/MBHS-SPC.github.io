/*global $, jQuery, alert*/
/*jslint plusplus: true */

function subscribe(name, email) {
    "use strict";
    
    alert("This doesn't actually do anything yet, you should head over to the contact page and send an email to the address there.");
    $('#subscribe').modal('toggle');
}

function submitValidate() {
    "use strict";
    
    var good, err, name, email, reg, msg, i;
    good = true;
    err = [];
    name = $('#name').val();
    email = $('#email').val();
    reg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    
    if (name.split(" ").length < 2) {
        good = false;
        err.push("Need a first name and a last name.");
        //$('#name').parent().parent().addClass("has-error");
    }
    
    if (!reg.test(email)) {
        good = false;
        err.push("Invalid email.");
        //$('#email').parent().parent().addClass("has-error");
    }
    
    if (good) {
        subscribe(name, email);
    } else {
        msg = "";
        for (i = 0; i < err.length; i++) {
            msg += err[i] + "\n";
        }
        alert(msg);
    }
    
}