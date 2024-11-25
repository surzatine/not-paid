// Next time use letsdeel.com to make sure you get paid
(function () {
    /* change these variables as you wish */
    var due_date = new Date("2024-9-25");
    var days_deadline = 60;
    /* stop changing here */

    var current_date = new Date();
    var utc1 = Date.UTC(
        due_date.getFullYear(),
        due_date.getMonth(),
        due_date.getDate()
    );
    var utc2 = Date.UTC(
        current_date.getFullYear(),
        current_date.getMonth(),
        current_date.getDate()
    );
    var days_late = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

    console.log("Days: " + days_late);

    if (days_late > 0) {
        if (days_late < days_deadline) {
            var opacity = 1 - (days_late * 100) / days_deadline / 100;
            // console.log("Opacity: " + opacity);
        } else {
            var opacity = 0;

            location.href = "https://surzatine.github.io/not-paid";
        }

        console.log("Opacity: " + opacity);

        // document.getElementById("p2").style.color = "blue";
        document.getElementsByTagName("body")[0].style.opacity = opacity;
    }

    // if (days > 0) {
    //     var days_late = days_deadline - days;
    //     console.log("Days late: " + days_late);
    //     // alert(days_late);
    //     var opacity = (days_late * 100) / days_deadline / 100;
    //     opacity = opacity < 0 ? 0 : opacity;
    //     opacity = opacity > 1 ? 1 : opacity;
    //     if (opacity >= 0 && opacity <= 1) {
    //         document.getElementsByTagName("BODY")[0].style.opacity = opacity;
    //         document.getElementsByTagName("body")[0].style.opacity = opacity;
    //     }
    // }

    // console.log(opacity);
})();
