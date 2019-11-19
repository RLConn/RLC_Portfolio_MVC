$(function () {

    $("#MathShow").hide();

    $("#FactShow").hide();

    $("#FzBzShow").hide();

    $("#PalShow").hide();


    //Math Modal Script
    $("#Calcbtn").click(function () {
        var num1 = +$("#first").val();
        var num2 = +$("#second").val();
        var num3 = +$("#third").val();
        var num4 = +$("#fourth").val();
        var num5 = +$("#fifth").val();

        var min = Math.min(num1, num2, num2, num4, num5);
        $("#min").text(min);
        var max = Math.max(num1, num2, num3, num4, num5);
        $("#max").text(max);
        var mean = (num1 + num2 + num3 + num4 + num5) / 5;
        $("#mean").text(mean);
        var sum = num1 + num2 + num3 + num4 + num5;
        $("#sum").text(sum);
        var prod = (num1 * num2 * num3 * num4 * num5);
        $("#prod").text(prod);


    });

    $('#Clrbtn').click(function () {
        document.getElementById("myForm").reset();  
    });

    $("#MathbtnShow").click(function () {
        $("#MathShow").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    });

    //Factorial Modal Script



    $("#btnFact").click(function () {
        //Step 1: Get the data
        var number1 = Number($("#FactN").val());
        //Step 2: Do my calculation
        var result = Factorial(number1);
        //Step 3: Output the result
        $("#factResult").text(result);
    });
    function Factorial(number) {
        //The for loop
        for (var loop = number - 1; loop > 1; loop--) {
            number *= loop;
        }
        return number;
    }

    $("#FactbtnShow").click(function () {
        $("#FactShow").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    });


    //Fizz-Buzz Modal Script
    

    $("#btnFzBz").click(function () {
        //Step 1: Get the data
        var fiza = +$("#alpha").val();
        var fizb = +$("#beta").val();
        //Step 2: Do my calculation
        var result = FizzBuzz(fiza, fizb);
        //Step 3: Output the result
        $("#FBResults").text(result)
    });
    function FizzBuzz(fiza, fizb) {
        var buza = "";
        var fizz = false;
        var buzz = false;
        for (var i = 1; i <= 100; i++) {
            fizz = (i % fiza == 0);
            buzz = (i % fizb == 0);
            if (fizz && buzz) {
                buza += "FizzBuzz, ";
            } else if (fizz) {
                buza += "Fizz, ";
            } else if (buzz) {
                buza += "Buzz, ";
            } else buza += i + ", ";

        }
        return buza.substr(0, buza.length - 2);
    }

    $("#FzBzShowbtn").click(function () {
        $("#FzBzShow").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    });


    //Palindrome Modal Script


    $("#btnPalinD").click(function () {
        //Step 1: Get the data
        var word = $("#PalWord").val().toLowerCase();
        var word = word.split(' ').join('');

        //Step 2: Run the ReversAstring method
        var drow = ReverseAString1(word);

        //Step 3: Compare it to the original and write the appropriate output.
        if (word == drow) {
            $("#PalDrow").text("Your word or phrase " + word + ", reversed is " + drow + ", which is the same, so it IS a Palindrome.");
        }
        else {
            $("#PalDrow").text("Your word or phrase " + word + ", reversed is " + drow + ", which is NOT the same, so it is NOT a Palindrome.");
        }
    });

    function ReverseAString1(word) {
        var drow = "";
        for (var index = word.length - 1; index >= 0; index--) {
            var character = word[index];
            drow += character;
        }
        return drow;
    }

    $("#PalbtnShow").click(function () {
        $("#PalShow").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    });

});

        

    


 