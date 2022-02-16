$(document).ready(function () {
    $(".question").click(function () {
        if ($(this).find(".plus").is(":hidden")) {
            $(this).find(".plus").show();
            $(this).find(".minus").hide();
            $(this).parent().find(".answer").hide();
        } else {
            $(this).find(".plus").hide();
            $(this).find(".minus").show();
            $(this).parent().find(".answer").show();
        }
    });

    $("#show-more").click(function () {
        $(this).hide();
        $(document).find("#show-less").show();
        $(document).find(".over").show();
    });

    $("#show-less").click(function () {
        $(this).hide();
        $(document).find("#show-more").show();
        $(document).find(".over").hide();
    });

    $("#show-all-references").click(function () {
        $(this).hide();
        $(document).find("#show-main-references").show();
        $(document).find(".ref-old").show();
    });

    $("#show-main-references").click(function () {
        $(this).hide();
        $(document).find("#show-all-references").show();
        $(document).find(".ref-old").hide();
    });

    $(document).find(".ref-old").hide();
});
