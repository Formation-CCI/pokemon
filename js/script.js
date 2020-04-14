$( "#berries" ).click(function() {
    $(() => {
        $.get("https://pokeapi.co/api/v2/berry/", function (data) {
            $("#req").html(" ");
            
            for (let index in data) {
                console.log(data);
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
$( "#pokemon" ).click(function() {
    $(() => {
        $.get("https://pokeapi.co/api/v2/pokemon-form/", function (data) {
            $("#req").html(" ");
            
            for (let index in data) {
                console.log(data);
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
$( "#items" ).click(function() {
    $(() => {
        $.get("https://pokeapi.co/api/v2/item/", function (data) {
            $("#req").html(" ");
            
            for (let index in data) {
                console.log(data);
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
$( "#moves" ).click(function() {
    $(() => {
        $.get("https://pokeapi.co/api/v2/ability/", function (data) {
            $("#req").html(" ");
            
            for (let index in data) {
                console.log(data);
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

$( "#evolution" ).click(function() {
    $(() => {
        $.get("https://pokeapi.co/api/v2/pokemon-species/", function (data) {
            $("#req").html(" ");
            
            for (let index in data) {
                console.log(data);
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

$( "#encounters" ).click(function() {
    $(() => {
        $.get("https://pokeapi.co/api/v2/type/", function (data) {
            $("#req").html(" ");
            
            for (let index in data) {
                console.log(data);
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

$( "#contest" ).click(function() {
    $(() => {
        $.get("https://pokeapi.co/api/v2/stat/", function (data) {
            $("#req").html(" ");
            
            for (let index in data) {
                console.log(data);
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

$( "#games" ).click(function() {
    $(() => {
        $.get("https://pokeapi.co/api/v2/generation/", function (data) {
            $("#req").html(" ");
            
            for (let index in data) {
                console.log(data);
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

$( "#machines" ).click(function() {
    $(() => {
        $.get("https://pokeapi.co/api/v2/move-damage-class", function (data) {
            $("#req").html(" ");
            
            for (let index in data) {
                console.log(data);
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

$( "#location" ).click(function() {
    $(() => {
        $.get("https://pokeapi.co/api/v2/language/", function (data) {
            $("#req").html(" ");
            
            for (let index in data) {
                console.log(data);
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