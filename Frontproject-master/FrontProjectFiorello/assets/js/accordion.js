$(document).ready(function () {
    $("#first_accordion .elements").find(".title").mouseover(function () {
        if ($(this).next().css("display") === "none") {
            $(this).css({
                transition: "all 0.3s ease-out",
                background: "#f34f3f"
            });
            $(this).find("h6").css({ color: "#ffffff" });
            $(this).find("i").css({ color: "#ffffff" });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
        }
    });

    $("#first_accordion .elements").find(".title").mouseleave(function () {
        if ($(this).next().css("display") === "none") {
            $(this).css({
                transition: "all 0.3s ease-out",
                background: "#ffffff"
            });
            $(this).find("h6").css({ color: "#1b1b1b" });
            $(this).find("i").css({ color: "#1b1b1b" });
            $(this).find("i").removeClass("fas fa-minus");
            $(this).find("i").addClass("fas fa-plus");
        }
    });

    $("#first_accordion .elements").first().find(".title").click(function () {
        if ($(this).next().css("display") === "none") {
            $(this).css({
                transition: "all 0.3s ease-out",
                background: "#f34f3f"
            });
            $(this).find("h6").css({ color: "#ffffff" });
            $(this).find("i").css({ color: "#ffffff" });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
        }
        else {
            $(this).css({
                transition: "all 0.3s ease-out",
                background: "#ffffff"
            });
            $(this).find("h6").css({ color: "#1b1b1b" });
            $(this).find("i").css({ color: "#1b1b1b" });
            $(this).find("i").removeClass("fas fa-minus");
            $(this).find("i").addClass("fas fa-plus");
        }

        $("#first_accordion .elements").first().find(".title").not($(this)).find("i").removeClass("fas fa-minus");
        $("#first_accordion .elements").first().find(".title").not($(this)).find("i").addClass("fas fa-plus");

        $("#first_accordion .elements").first().find(".title").not($(this)).find("i").css({ color: "#1b1b1b" });
        $("#first_accordion .elements").first().find(".title").not($(this)).find("h6").css({ color: "#1b1b1b" });
        $("#first_accordion .elements").first().find(".title").not($(this)).css({ background: "#ffffff" });


        $(this).next().slideToggle(500);
        $("#first_accordion .elements").first().find(".content").not($(this).next()).slideUp(500);
    });

    $("#first_accordion .elements").last().find(".title").click(function () {
        if ($(this).next().css("display") === "none") {
            $(this).css({
                transition: "all 0.3s ease-out",
                background: "#f34f3f"
            });
            $(this).find("h6").css({ color: "#ffffff" });
            $(this).find("i").css({ color: "#ffffff" });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
        }
        else {
            $(this).css({
                transition: "all 0.3s ease-out",
                background: "#ffffff"
            });
            $(this).find("h6").css({ color: "#1b1b1b" });
            $(this).find("i").css({ color: "#1b1b1b" });
            $(this).find("i").removeClass("fas fa-minus");
            $(this).find("i").addClass("fas fa-plus");
        }

        $("#first_accordion .elements").last().find(".title").not($(this)).find("i").removeClass("fas fa-minus");
        $("#first_accordion .elements").last().find(".title").not($(this)).find("i").addClass("fas fa-plus");

        $("#first_accordion .elements").last().find(".title").not($(this)).find("i").css({ color: "#1b1b1b" });
        $("#first_accordion .elements").last().find(".title").not($(this)).find("h6").css({ color: "#1b1b1b" });
        $("#first_accordion .elements").last().find(".title").not($(this)).css({ background: "#ffffff" });

        $(this).next().slideToggle(500);
        $("#first_accordion .elements").last().find(".content").not($(this).next()).slideUp(500);
    })

});
