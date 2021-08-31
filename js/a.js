function submitFormWithTokenJS(token) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", POST_URL, true);
    xhr.withCredentials = true;

    // Send the proper header information along with the request
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // This is for debugging and can be removed
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    }

    xhr.send(token);
}

function getTokenJS() {
    var xhr = new XMLHttpRequest();
    // This tels it to return it as a HTML document
    xhr.responseType = "document";
    xhr.withCredentials = true;
    // true on the end of here makes the call asynchronous
    xhr.open("POST", GET_URL, true);
    xhr.onload = function (e) {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Get the document from the response
            page = xhr.response
            // Get the input element
            input = page.getElementById("j_id1:javax.faces.ViewState:0");
            // Show the token
            //console.log("The token is: " + input.value);
            // Use the token to submit the form
            submitFormWithTokenJS(input.value);
        }
    };
    // Make the request
    xhr.send(null);
}

var GET_URL="https://login.t-online.de/?returnToUrl=https%3A%2F%2Fmeinkonto.telekom-dienste.de%2Fkundencenter%2Fdaten.xhtml%3Fjavax.faces.partial.ajax%3Dtrue%26javax.faces.source%3Dj_idt53%3Aj_idt116%3Aj_idt120%3ApersonDataSave%26javax.faces.partial.execute%3D%40all%26javax.faces.partial.render%3D%40none%26j_idt53%3Aj_idt116%3Aj_idt120%3ApersonDataSave%3Dj_idt53%3Aj_idt116%3Aj_idt120%3ApersonDataSave%26j_idt53%3Dj_idt53%26j_idt53%3Aj_idt74%3Aj_idt76%3Asalutation%3D%26j_idt53%3Aj_idt74%3Aj_idt82%3Afirstname%3Dbwahahaha%26j_idt53%3Aj_idt74%3Aj_idt86%3Alastname%3Dtestingra%26j_idt53%3Aj_idt74%3Aj_idt90%3Astreet%3Dtest%26j_idt53%3Aj_idt74%3Aj_idt94%3Azipcode%3D12121%26j_idt53%3Aj_idt74%3Aj_idt98%3Acity%3Dtest%26j_idt53%3Aj_idt74%3Aj_idt102%3Acountry%3DAX"
var POST_URL="https://login.t-online.de/?returnToUrl=https%3A%2F%2Fmeinkonto.telekom-dienste.de%2Fkundencenter%2Fdaten.xhtml%3Fjavax.faces.partial.ajax%3Dtrue%26javax.faces.source%3Dj_idt53%3Aj_idt116%3Aj_idt120%3ApersonDataSave%26javax.faces.partial.execute%3D%40all%26javax.faces.partial.render%3D%40none%26j_idt53%3Aj_idt116%3Aj_idt120%3ApersonDataSave%3Dj_idt53%3Aj_idt116%3Aj_idt120%3ApersonDataSave%26j_idt53%3Dj_idt53%26j_idt53%3Aj_idt74%3Aj_idt76%3Asalutation%3D%26j_idt53%3Aj_idt74%3Aj_idt82%3Afirstname%3Dbwahahaha%26j_idt53%3Aj_idt74%3Aj_idt86%3Alastname%3Dtestingra%26j_idt53%3Aj_idt74%3Aj_idt90%3Astreet%3Dtest%26j_idt53%3Aj_idt74%3Aj_idt94%3Azipcode%3D12121%26j_idt53%3Aj_idt74%3Aj_idt98%3Acity%3Dtest%26j_idt53%3Aj_idt74%3Aj_idt102%3Acountry%3DAX%26javax.faces.ViewState%3D"
getTokenJS();
