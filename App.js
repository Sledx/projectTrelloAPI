//komunikacja

var baseUrl = 'https://kodilla.com/pl/bootcamp-api',
    myHeaders = {
        'X-Client-Id': 1499,
        'X-Auth-Token': '35caf4782852e669b159857de998f9df'
    };

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
        setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function (column) {
        var col = new Column(column.id, column.name);  // Ok czyli wczesniej w htmlu mamy podpiety script z klasa column i dlatego to dziala, tak samo jak metoda createColumn.
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	});
}