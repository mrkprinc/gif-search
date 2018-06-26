$(document).ready(function() {

    var searchTerms = ['1', '2', '3'];

    function loadButtons() {
        
        searchTerms.forEach(function(term) {
            var newBtn = $('<button>');
            newBtn.addClass('btn btn-success m-2');
            newBtn.text(term);
            newBtn.appendTo($('#div-buttons'));
        })

        }

    // ON LOAD
    
    loadButtons();

})