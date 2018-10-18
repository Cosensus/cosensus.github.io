/*!
 * Cosensus
 * Copyright 2018 Cosensus.
 * All Rights Reserved.
 */

function isNullOrEmpty(str){
    try
    {
        if (str === null)
        {
            return false;
        }
        else
        {
            if (str.trim().length > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
    catch (ex)
    {
        console.log(ex.message);
        return false;
    }
}

function validateAndSendEmail() {

    var nullParams = [];

    subject = document.getElementById("contact-subject-box").value;
    message = document.getElementById("contact-message-box").value;

    if (!isNullOrEmpty(subject))
    {
        console.log("Subject is null or empty");

        console.log("Adding to array");
        nullParams.push("Subject");
        console.log(nullParams);
    }

    if (!isNullOrEmpty(message))
    {
        console.log("Message is null or empty");

        console.log("Adding to array");
        nullParams.push("Message");
        console.log(nullParams);
    }

    if (nullParams.length > 0)
    {
        console.log("validateAndSendEmail - Null params passed to function. Highlighting empty fields.");

        window.alert("Please make sure all required values have been entered before submitting.");
    }
    else
    {
        console.log("validateAndSendEmail - Input args are valid, attempting to send email!");
        sendEmail(subject, message, targetEmail);
    }    
}

var targetEmail = "sales@palladient.com";

function sendEmail(subject, message, targetEmail) {

    if (subject == null || message == null || targetEmail == null)
    {
        if (subject == null)
        {
            console.log("Subject is null");
        }

        if (message == null)
        {
            console.log("Message is null");
        }

        if (targetEmail == null)
        {
            console.log("Target Email is null");
        }

        console.log("sendEmail - Null params passed to function. Returning without performing any actions.");
        return;
    }

    console.log("Opening up email.");

    window.location.href = "mailto:" + targetEmail + "?subject=" + subject + "&body=" + message;
}

$(document).on('click', '#contact-submit-btn', function (e) {
	e.preventDefault();
});