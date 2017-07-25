
    // when user presses Return
    if (event.keyCode === 13) {
        // check selection is valid 
        if (typeof selectedProvinceID !== 'undefined') {
            var nav = "county-selector.html#"+selectedProvinceID;
            console.log(nav);
            window.location.href = nav;
        }
    }


