jQuery(document).ready(function () {
    console.log("jQuery is working!");


    $(".leadershipli img").on("click", function () {
        let imgScr = $(this).attr("src");
        $("#lightbox-content").html('<img src="' + imgScr + '" style="max-width: 300px;" class="img-responsive" />');
        $("#lightbox-container").fadeIn(500);
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });
    });
});

