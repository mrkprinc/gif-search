$(document).ready(function() {

    var searchTerms = ['Aquaria', 'Bianca DelRio', 'Miss Vanjie'];

    // API key yO5ZHdtVykuL4MmuX9DDYFu58J0db9lP

    function loadButtons() {

        $('#div-buttons').empty();
        
        searchTerms.forEach(function(term) {
            var newBtn = $('<button>');
            newBtn.addClass('searchButton btn btn-secondary m-2');
            newBtn.text(term);
            newBtn.appendTo($('#div-buttons'));
        })

    }

    // CLICK LISTEN

    $('#div-buttons').on('click', '.searchButton', function() {

        $('#div-results').empty();

        var term = $(this).text();
        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=yO5ZHdtVykuL4MmuX9DDYFu58J0db9lP&limit=10&q=' + '@rupaulsdragrace ' + term;

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(result) {
            console.log(result.data);
            var arr = result.data;

            if(arr.length === 0) {
                $('#div-results').html('No results found.');
            }

            arr.forEach(function(thisgif) {
                var newDiv = $('<div>');
                newDiv.addClass('div-gif p-3');

                var gifImg = $('<img>');
                gifImg
                    .attr('src', thisgif.images.fixed_height_still.url)
                    .attr('data-stopURL', thisgif.images.fixed_height_still.url)
                    .attr('data-goURL', thisgif.images.fixed_height.url)
                    .attr('data-state', 'stop')
                    .addClass('gifImg')
                    .appendTo(newDiv);

                newDiv.appendTo($('#div-results'));
            })
        })
    })

    $('#btn-addButton').on('click', function() {

        var newTerm = $('#field-addButton').val().trim();
        searchTerms.push(newTerm);
        loadButtons();
        $('#field-addButton').val('');

    })

    $('#div-searchResults').on('click', 'img', function() {

        var thisImage = $(this);
        var state = thisImage.attr('data-state');
        if(state === 'stop') {
            thisImage.attr('src', thisImage.attr('data-goURL'));
            thisImage.attr('data-state', 'go');
        } else {
            thisImage.attr('src', thisImage.attr('data-stopURL'));
            thisImage.attr('data-state', 'stop');
        }

    })

    // ON LOAD

    loadButtons();

    

})