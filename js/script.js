$( "#berries" ).click(function() {

$(() => {
    $.get("https://pokeapi.co/api/v2/berry/", function (data) {
        $("#req").html(" ");
        
        for (let index in data) {
            if (typeof data[index] === "object") {
                for (let numF in data[index]) {

                    if (typeof data[index][numF] === "object") {
                        for (let numF2 in data[index][numF]) {
                            if(numF2 == "name") {
                            $("#req").html($("#req").html() + "<p>" + data[index][numF][numF2] + "</p>");
                            }
                        }
                    }
                }
            }
        }
    });
});

});