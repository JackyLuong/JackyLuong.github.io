$(function()
{
    var scrollLink = $(".scroll");
    
    //smooth scrolling
    scrollLink.on("click", function(e)
    {
        e.preventDefault();
        $("body, html").animate({scrollTop: $(this.hash).offset().top - 80}, 1000);
    });

    //Active link switching
    $(window).on("scroll", function(e2)
    {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function()
        {
            var sectionOffset = $(this.hash).offset().top - 400;
            if(sectionOffset <= scrollbarLocation)
            {
                $(".scroll").removeClass("text-primary");
                $(this).addClass("text-primary");
                $(".navbar-brand").removeClass("text-primary");
            }
        });
    });
});