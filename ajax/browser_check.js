<script>

        //create a boolean variable to check for a valid Internet Explorer instance
        var xmlhttp = false;

        //check if we are using IE
        try {
            //if the Javascript version is greater than 5
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            alert("You are using Microsoft Internet Explorer");
        }
        catch(e) {
            //if not, then use the old active x object
            try {
                //if we are using Internet Explorer
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                alert("You are using Microsoft Internet Exporer");
            }
            catch (E) {
                // else we must be using a non-IE browser
                xmlhttp = false;
            }
        }

        //SAME code as above, however shorter.

        //If we are using a non IE browser, create a JavaScript instance of the object
        if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
            xmlhttp = new XMLHttpRequest();
            alert("You are not using Microsoft Internet Explorer");
        }

        var xmlhttps;

        //if, the ActiveXObject is available, we must be using IE
        if (window.ActiveXObject) {
            xmlhttps = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else {
            // else, we can use the native JavaScript handler
            xmlhttps = new XMLHttpRequest();
        }


</script>
