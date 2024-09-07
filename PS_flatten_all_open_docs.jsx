/*
Use this script at your own risk!

This script assumes that all open images have been previously saved from Photoshop.

Flatten image for all open documents
https://community.adobe.com/t5/photoshop-ecosystem-discussions/flatten-image-for-all-open-documents/m-p/12617518#M610710

Flatten Save & Close All Open Files.jsx
Stephen Marsh, v1.0 - 26 December 2021
*/

#target photoshop

// CHECK FOR OPEN DOCS
if (app.documents.length) {
    
    // OPTIONAL CONFIRMATION
    if (!confirm("Are you really sure that you wish to flatten, save and close all open docs?", false)) {
        //throw alert("Script cancelled!");
        throw null;
    }

    // LOOP OVER OPEN FILES
    while (app.documents.length > 0) {
        app.activeDocument.flatten();
        app.activeDocument.close(SaveOptions.SAVECHANGES);
    }

    // END OF SCRIPT NOTIFICATION
    app.beep();

// ALERT IF NO DOCS OPEN
} else {
    alert('You must have a document open!');
}