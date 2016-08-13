

    function showHideCalendar() {
        //The location we are loading the page into.
        var objID = "calendar";
        //Change the current image of the minus or plus.
        if (showCalendar == true){
            //Show the calendar.
            document.getElementById("opencloseimg").src = "images/mins.gif";
            //The page we are loading.
            var serverPage = "calendar.php";
            //Set the open close tracker variable.
            showCalendar = false;
            var obj = document.getElementById(objID);
            xmlhttp.open("GET", serverPage);
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    obj.innerHTML = xmlhttp.responseText;
                }
            }
            xmlhttp.send(null);
        } else {
            //Hide the calendar.
            document.getElementById("opencloseimg").src = "images/plus.gif";
            showCalendar = true;
            document.getElementById(objID).innerHTML = "";
        }
}
