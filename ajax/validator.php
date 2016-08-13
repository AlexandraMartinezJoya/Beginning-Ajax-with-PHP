<?php
    //validator.php

    // A list of valid names

    //Again, this usually comes outputted from a db fetch
    $names = array ("Lee Babin", "Jane Doe", "James Smith");

    if(!in_array(strtolower($_GET['sstring']), strtolower($names))) {
        // Then return with an error
        ?><span style="color: #FF0000;">Name not found...</span><?php
    } else {
        // At this point we would go to the processing script
    ?> <span style="color: #FF0000;" > Form would now submit... </span> <?php
    }
?>
