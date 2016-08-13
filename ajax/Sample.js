<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional// EN http://wwww.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title> Sample 2_1 </title>
    <meta http-eqiv="Content-type" content="text/html; charset=iso-8859-1"  />
    <script type="text/Javascript">


    // Create a boolean variable to check for a valid Internet Exporer issue
    var xmlhttp = false;

    // Check if we are using IE

    try {
        // If the JavaScript version is greater than 5.0
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        alert ("You are using  Microsoft Internet Explorer");
    }
    catch (e) {
        // If not , then use the older Active X object
        try {
            // If we are using Internet Explorer
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            alert("You are using Microsoft Internet Explorer");
        }
        catch (E) {
            // else we must be using a non-IE browser
            xmlhttp = false;
        }
    }

    // If we are using a non-IE browser, create a JavaScript instance of the object
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
        alert("You are not using Microsoft Internet Explorer");
    }

    function makeRequest(serverPage, objId) {
        var obj = document.getElementById(objId);
        xmlhttp.open("GET", serverPage);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                obj.innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.send(null);
    }
</script>

 </head>

 <body onload="makerequest ('content1.html', 'hw')">
  <div align="center">
    <h1>My Webpage </h1>
    <a href="content1.html" onclick="makerequest('content1.html', 'hw'); return false;">Page 1</a>
    <a href="content2.html" onclick="makerequest('content2.html', 'hw'); return false;">Page 2</a>
    <a href="content3.html" onlclick="makerequest('content3.html', 'hw'); return false;">Page 3</a>
    <a href="content4.html" onclick="makerequest ('content4.html', 'hw'); return false;">Page 4</a>

    <div id="hw"></div>
  </div>

 </body>
</html>

<!-- Content 1 HTML -->

<div style="width:770px; text-align:left;">
    <h1>Page 1</h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod </p>
</div>


<!-- Content 2 HTML -->

<div style="width:770px; text-align:left;">
    <h1>Page 1</h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod </p>
</div>

<!-- Content 3 HTML -->

<div style="width:770px; text-align:left;">
    <h1>Page 1</h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod </p>
</div>

<!-- Content 4 HTML -->

<div style="width:770px; text-align:left;">
    <h1>Page 1</h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod </p>
</div>
