"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('n6UT5KWUqfDFkqj7WBLw44s5PndoOlP0Hf18v6L7', 'UHgMIQjzbtWeSBSNq1oYrOTC9HgINpco33S2lIfy');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
