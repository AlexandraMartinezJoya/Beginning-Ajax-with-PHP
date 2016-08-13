
    function createform(e) {
        theObject = document.getElementById("createtask");

        theObject.style.visibility = "visible";
        theObject.style.height = "200px";
        theObject.style.width = "200px";

        var posx = 0;
        var posy = 0;

        posx = e.clientX + document.body.scrollLeft;
        posy = e.clientY + document.body.scrollTop;

        theObject.style.left = posx + "px";
        theObject.style.top = posy + "px";
    }

        // The location we are loading the page into.

        var onjID = "createtask";
        var serverPage = "theform.php";

        var obj = document.getElementById(objID);
        xmlhhtp.open("GET", serverPage);
        xmlhhtp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                obj.innerHTML = xmlhttp.responseText;
            }
        }

        xmlhttp.send(null);

        function closetask() {
            theObject = document.getElementById("createtask");

            theObject.style.visibility = "hidden";
            theObject.style.height = "0px";
            theObject.style.width = "0px";

            acObject = document.getElementById("autocompletediv");

            acObject.style.visibility = "hidden";
            acObject.style.width = "0px";
            acObject.style.height = "0px";
        }

        function findPosX(obj) {
            var curLeft = 0;
            if (obj.offsetParent) {
                while(obj.offsetParent) {
                    curLeft += obj.offsetLeft;
                    obj = obj.offsetParent;
                }
            } else if (obj.x) {
                curleft += obj.x;
            }
            return curleft;
        }

        function findPosY(obj) {
            var curtop = 0;
            if (obj.offsetParent) {
                while (obj.offsetParent) {
                    curtop += obj.offsetTop;
                    obj = obj.offsetParent;
                }
            } else if (obj.y) {
                curtop += obj.y;
            }
            return curtop;
        }

        function autocomplete (thevalue, e) {
            theObject = document.getElementById("autocompletediv");

            theObject.style.visibility = "visible";
            theObject.style.width = "152px";

            var posx = 0;
            var posy = 0;

            posx = (findPosX (document.getElementById("yourname")) + 1);
            posy = (findPosY(document.getElementById("yourname")) + 23);

            theObject.style.left = posx + "px";
            theObject.style.top = posy + "px";

            var threextrachar = e.which;

            if (threextrachar == undefined) {
                threextrachar = e.keyCode;
            }

            // The location we are loding the page into
            var objID ="autocompletediv";

            //Take into account the backspace
            if (threextrachar == 8) {
                if(thevalue.length == 1) {
                    var serverPage = "autocomp.php";
                } else {
                    var serverPage = "autocomp.php" + "?sstring=" + thevalue.substr (0, (thevalue.length -1));
                }
            } else {
                var serverPage = "autocomp.php" + "?sstring=" + thevalue + String.fromCharCode(threextrachar);
            }

            var obj = document.getElementById(objID);
            xmlhttp.open("GET", serverPage);
            xmlhttp.onreadystatechange = function() {
                if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    obj.innerHTML = xmlhttp.responseText;
                }
            }
            xmlhttp.send(null);
        }

        function setvalue(thevalue) {
            acObject = document.getElementById("autocompletediv");

            acObject.style.visibility = "hidden";
            acObject.style.height = "0px";
            acObject.style.width = "0px";

            document.getElementById("yourname").value = thevalue;
        }

        // This function loads a PHP script into a certain section of your page.
        function validateform(thevalue) {
            serverPage ="validator.php?sstring=" + thevalue;
            objID = "messageBox";

            var obj = document.getElementById(ObjID);
            xmlhttp.open("GET", serverPage);
            xmlhttp.onreadystatechange = function() {
                if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    obj.innerHTML = xmlhttp.responseText;
                }
            }
            xmlhttp.send(null);
        }
