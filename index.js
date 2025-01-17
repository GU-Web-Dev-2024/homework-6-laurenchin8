// changing to use ready() function
$(document).ready(function() {
    var seconds = "00";
    var tens = "00";
    var opacityInterval;

    // editing here to make jQuery vars - $() jQuery syntax
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds")
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset");

    var interval;

    // Add ID to the timer paragraph and add class using jQuery
    $("p").attr("id", "timer").addClass("timer-background");
    
    // Style stopwatch using jQuery
    $("#timer").css({
        "background-color": "#f0f0f0", // Inner background color
        padding: "10px",
        "border-radius": "10px", // Rounded corners
        "border": "5px solid #333", // Outer border
        "font-size": "48px", // Font size
        "text-align": "center",
        "opacity": "1.0", // Default opacity
        "font-family": "'Courier New', Courier, monospace", // Font family
        "color": "#333" // Font color
    });

    // Add classes to buttons
    $buttonStart.addClass("control-button");
    $buttonStop.addClass("control-button");
    $buttonReset.addClass("control-button");

    // Style buttons using jQuery
    $(".control-button").css({
        "background-color": "#4CAF50", // Green background
        "color": "white",               // White text
        "border": "none",               // No border
        "padding": "10px 20px",        // Padding
        "textAlign": "center",         // Center text
        "text-decoration": "none",      // No underline
        "display": "flex",              // Use flexbox for buttons 
        "justify-content": "center",    // Center buttons horizontally
        "font-size": "16px",            // Font size
        "margin": "4px 2px",           // Margin
        "border-radius": "5px",        // Rounded corners
        "cursor": "pointer"             // Pointer cursor on hover
    });

    // changing to use jQuery method
    $buttonStart.on("click", start);

    function start() {
        clearInterval(interval);
        clearInterval(opacityInterval); // Clear previous opacity interval
        $("#timer").css("background-color", "rgb(51, 165, 50)"); // Running color
        interval = setInterval(startTimer, 10);
        animateOpacity(); // Start opacity animation
    }
    // buttonStart.onclick = function () {
    //     clearInterval(interval);
    //     interval = setInterval(startTimer, 10);
    // }

    // changing to use jQuery method
    $buttonStop.on("click", stop);

    function stop() {
        clearInterval(interval);
        clearInterval(opacityInterval); // Clear opacity animation
        if (tens !== "00" || seconds !== "00") {
            $("#timer").css("background-color", "rgb(251, 18, 47)"); // Paused color
        }
        $("#timer").css("opacity", "1.0"); // Reset opacity
    }
    // buttonStop.onclick = function () {
    //     clearInterval(interval);
    // }

    // changing to use jQuery method
    $buttonReset.on("click", reset);

    function reset() {
        clearInterval(interval);
        clearInterval(opacityInterval); // Clear opacity animation
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        // appendTens.innerHTML = tens;
        // appendSeconds.innerHTML = seconds;
        $("#timer").css("background-color", "grey"); // Reset color
        $("#timer").css("opacity", "1.0"); // Reset opacity
    }
    // buttonReset.onclick = function () {
    //     clearInterval(interval);
    //     tens = "00";
    //     seconds = "00";
    //     appendTens.innerHTML = tens;
    //     appendSeconds.innerHTML = seconds;
    // }

    function startTimer() {
        tens++;

        if (tens < 9) {
            // appendTens.innerHTML = "0" + tens;
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            // appendTens.innerHTML = tens;
            $appendTens.html(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            // appendSeconds.innerHTML = "0" + seconds;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            // appendTens.innerHTML = "0" + 0;
            $appendTens.html("0" + 0);
        }

        if (seconds > 9) {
            // appendSeconds.innerHTML = seconds;
            $appendSeconds.html(seconds);
        }
    }

    // Function for animating opacity using interval timer
    function animateOpacity() {
        let increasing = true;
        opacityInterval = setInterval(function() {
            let currentOpacity = parseFloat($("#timer").css("opacity"));
            if (increasing) {
                currentOpacity += 0.01;
                if (currentOpacity >= 1.0) {
                    currentOpacity = 1.0;
                    increasing = false; // Change direction
                }
            } else {
                currentOpacity -= 0.01;
                if (currentOpacity <= 0.8) {
                    currentOpacity = 0.8;
                    increasing = true; // Change direction
                }
            }
            $("#timer").css("opacity", currentOpacity);
        }, 50); // Adjust the interval for smoother animation
    }
});