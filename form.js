$(document).ready(function () {
    $curtainopen = false;
    $(".rope").click(function () {
        $(this).blur();
        if ($curtainopen == false) {
            $(this).stop().animate({ top: '0px' }, { queue: false, duration: 650, easing: 'easeOutBounce' });
            $(".leftcurtain").stop().animate({ width: '0px' }, 2000);
            $(".rightcurtain").stop().animate({ width: '0px' }, 2000);

            $curtainopen = true;
        } else {
            $(this).stop().animate({ top: '-40 px' }, { queue: false, duration: 650, easing: 'easeOutBounce' });
            $(".leftcurtain").stop().animate({ width: '50%' }, 2000);
            $(".rightcurtain").stop().animate({ width: '51%' }, 2000);
            $curtainopen = false;
        }
        return false;
    });
})