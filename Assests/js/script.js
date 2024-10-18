
    document.getElementById('ui').addEventListener('click', function() {
        const checkbox = document.getElementById('checkbox-1');
        checkbox.checked = !checkbox.checked;
    });

 
    document.getElementById('ui-2').addEventListener('click', function() {
        const checkbox = document.getElementById('checkbox-2');
        checkbox.checked = !checkbox.checked;
    });


      document.getElementById('checkbox-1').addEventListener('change', function() {
        var form = document.getElementById('yes-form');
        if (this.checked) {
            form.style.display = 'block';  // Show form if "Yes" is checked
        } else {
            form.style.display = 'none';  // Hide form if "Yes" is unchecked
        }
    });

    // Optionally, uncheck "No" when "Yes" is checked and vice versa
    document.getElementById('checkbox-2').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('checkbox-1').checked = false;
            document.getElementById('yes-form').style.display = 'none';
        }
    });


document.getElementById('ui').addEventListener('click', function() {
    const formYes = document.getElementById('on-yes');
    const formNo = document.getElementById('on-no');

    formYes.style.display = 'block';
    formNo.style.display = 'none';
    
    document.getElementById('checkbox-2').checked = false;
});

document.getElementById('ui-2').addEventListener('click', function() {
    const formYes = document.getElementById('on-yes');
    const formNo = document.getElementById('on-no');

    formYes.style.display = 'none';
    formNo.style.display = 'block';
    
    document.getElementById('checkbox-1').checked = false;
});



document.getElementById('checkbox-1').addEventListener('click', function() {
    const formYes = document.getElementById('on-yes');
    const formNo = document.getElementById('on-no');

    if (this.checked) {
        formYes.style.display = 'block';
        formNo.style.display = 'none';
        
        document.getElementById('checkbox-2').checked = false;
    }
});

document.getElementById('checkbox-2').addEventListener('click', function() {
    const formYes = document.getElementById('on-yes');
    const formNo = document.getElementById('on-no');

    if (this.checked) {
        formYes.style.display = 'none';
        formNo.style.display = 'block';
        document.getElementById('checkbox-1').checked = false;
    }
});


document.getElementById('ui').addEventListener('change', function() {
    var formFields = document.getElementById('form-fields');
    if (this.checked) {
        formFields.style.display = 'block';  // Show the fields
    } else {
        formFields.style.display = 'none';  // Hide the fields
    }
});

document.getElementById('ui-2').addEventListener('change', function() {
    var formFields = document.getElementById('form-fields');
    if (this.checked) {
        formFields.style.display = 'none';  // Show the fields
    } else {
        formFields.style.display = 'block';  // Hide the fields
    }
});









document.getElementById('ui-5').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('ui-6').checked = false;  // Deselect "No" checkbox
        document.getElementById('yes-form').style.display = 'block';  // Show the form
    } else {
        document.getElementById('yes-form').style.display = 'none';  // Hide the form if "Yes" is unchecked
    }
});

document.getElementById('ui-6').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('ui-5').checked = false;  // Deselect "Yes" checkbox
        document.getElementById('yes-form').style.display = 'none';  // Hide the form when "No" is checked
    }
});





