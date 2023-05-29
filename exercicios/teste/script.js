$(document).ready(function () {
    let displayVal = '';

    $('button').on('click', function () {
        const btnVal = $(this).val();

        if (btnVal === '=') {
            try {
                displayVal = eval(displayVal);
            }catch (error) {
                displayVal = 'Error';
            }
        } else if (btnVal === 'C') {
            displayVal = '';
        } else {
            displayVal += btnVal;
        }

        $('#display').val(displayVal);
    });
});