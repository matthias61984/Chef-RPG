$(document).ready(function() {

// Define chef characters as objects
    var ramsay = {
        name: "Chef Ramsay",
        hp: 150,
        baseAttack: 8,
        counterAttack: 12,
        weapon: "Chef's Knife",
        pic: "./assets/images/Gordon_Ramsay.png"
    };
    
    var swedish = {
        name: "Swedish Chef",
        hp: 80,
        baseAttack: 12,
        counterAttack: 3,
        weapon: "Wooden Spoon",
        pic: "./assets/images/Swedish_Chef.webp"
    };

    var julia = {
        name: "Chef Julia",
        hp: 120,
        baseAttack: 9,
        counterAttack: 15,
        weapon: "Rolling Pin",
        pic: "./assets/images/Julia_Childs.jpg"
    };

    var fieri = {
        name: "Guy Fieri",
        hp: 175,
        baseAttack: 12,
        counterAttack: 2,
        weapon: "Hot Sauce",
        pic: "./assets/images/Guy_Fieri.jpg"
    };

// Set character pictures using objects
    $("#char1").attr("src", ramsay.pic);
    $("#char2").attr("src", swedish.pic);
    $("#char3").attr("src", julia.pic);
    $("#char4").attr("src", fieri.pic);

// Set character stats using objects
    $("#ramsayHP").html("HP: " + ramsay.hp);
    $("#ramsayWep").html("Favored Weapon: " + ramsay.weapon);
    $("#swedishHP").html("HP: " + swedish.hp);
    $("#swedishWep").html("Favored Weapon: " + swedish.weapon);
    $("#juliaHP").html("HP: " + julia.hp);
    $("#juliaWep").html("Favored Weapon: " + julia.weapon);
    $("#fieriHP").html("HP: " + fieri.hp);
    $("#fieriWep").html("Favored Weapon: " + fieri.weapon);

// When one of the four chefs are clicked, that chef is moved to the player div
    $(".sideline").click(function() {
        if ($("#yourChar").hasClass("empty") == true) {
            $("#yourChar").html(this);
            $(this).addClass("playerChar");
            $(this).removeClass("sideline");
            $("#yourChar").removeClass("empty");
        // Targeting classes for remaining chefs are changed
            $(".sideline").addClass("enemies");
            $(".enemies").removeClass("sideline");
        // Battle Log is updated with new instructions
            $("#battleLog").html("<p>Choose your first challenger from the remaining chefs!</p>");
        };

    // When one of the remaining chefs is clicked, that chef is moved to the enemy div
        $(".enemies").click(function() {
            if ($("#yourEnemy").hasClass("empty") == true) {
                $("#yourEnemy").html(this);
                $(this).addClass("enemyChar");
                $(this).removeClass("enemies");
                $("#yourEnemy").removeClass("empty");
            // Battle Log is updated with new instructions
                $("#battleLog").html("<p>Click the fight button when you are ready!</p>");
            };
        });        
    });

// When the fight button is clicked, playerChar and enemyChar deal damage to each other
    $("#fightBtn").click(function() {
        

        //DEFENDER.hp = (DEFENDER.hp - ATTACKER.baseAttack);
        //$("#DEFENDERHP").html("HP: " + DEFENDER.hp);
    });
});