$(document).ready(function(){
    $('#tableform').validate({
        rules: {
            colmin: {
                required: true
            },
            colmax: {
                required: true
            },
            rowmin: {
                required: true
            },
            rowmax: {
                required: true
            }
        }
    });
    
    $('#button').on('click', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Check if the form is valid
            if ($('#tableform').valid()) {
                console.log('Form is valid!');
                generateTable();
            } else {
                console.log('Form is not valid');
            }
        });
});


function generateTable() {
    
    // Get input values
    let cMin = parseInt(document.getElementById('colmin').value);
    let cMax = parseInt(document.getElementById('colmax').value);
    let rMin = parseInt(document.getElementById('rowmin').value);
    let rMax = parseInt(document.getElementById('rowmax').value);

    // Create table
    let table = '<table class="table table-bordered striped-table">';
    table += '<tr><th></th>'; // Start the first row with an empty cell for the top-left corner

    for (let i = cMin; i <= cMax; i++) {
        table += `<th>${i}</th>`; // Add the column headers
    }
    table += '</tr>'; // Close the header row

    for (let j = rMin; j <= rMax; j++) {
        table += `<tr><th>${j}</th>`; // Start the row with a header cell

        for (let i = cMin; i <= cMax; i++) {
            table += `<td>${i * j}</td>`; // Add the multiplication result cells
        }

        table += '</tr>'; // Close the row
    }

    table += '</table>';//finalize table
    document.getElementById('table-container').innerHTML = table; //set table value
}



