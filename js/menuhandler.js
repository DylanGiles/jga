$(document).ready(function() {
    $('#portfolioLink').click(function() {
        $(".content-pane").load("https://dylangiles.github.io/jga-api/page/about/index.html", function() {
            alert( "Load was performed." );
        });
    });
});