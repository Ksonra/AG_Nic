$(document).ready(function () {
    const $gif = $(".one");
    const animationDuration = 5000; // 5 секунд на каждую анимацию

    function getRandomCoordinate(min, max) {
        return Math.random() * (max - min) + min;
    }

    function animateGif() {
        const maxX = window.innerWidth - $gif.width();
        const maxY = window.innerHeight - $gif.height();
        const randomX = getRandomCoordinate(0, maxX);
        const randomY = getRandomCoordinate(0, maxY);

        $gif.animate(
            {
                left: randomX + "px",
                top: randomY + "px",
            },
            {
                duration: animationDuration, // Длительность анимации
                complete: function () {
                    // Callback после завершения анимации
                    animateGif(); // Повторить анимацию
                },
            }
        );
    }

    // Начать анимацию при загрузке страницы
    animateGif();

    // Запустить анимацию каждые 5 секунд
    setInterval(function () {
        animateGif();
    }, 5000);

    // Анимация изменения цвета фона
    $("#colorButton").click(function () {
        $("#animatedElement2").animate({ backgroundColor: "red" }, 1000);
    });

    // Анимация изменения прозрачности
    $("#opacityButton").click(function () {
        $("#animatedElement3").animate({ opacity: 0.5 }, 1000);
    });

    // Анимация изменения размера
    $("#sizeButton").click(function () {
        $("#animatedElement4").animate(
            { width: "100px", height: "100px" },
            1000
        );
    });

    // Анимация вращения
    $("#rotateButton").click(function () {
        $("#animatedElement5").animate({ rotate: "+=45deg" }, 1000);
    });

    // Анимация сдвига влево
    $("#moveButton").click(function () {
        $("#animatedElement1").animate({ left: "200px" }, 1000);
    });

    // Запустить первые две анимации
    $("#startButton1").click(function () {
        $("#colorButton").trigger("click");
        $("#opacityButton").trigger("click");
    });

    // Запуск 3-х последних анимации по очереди
    $("#startButton2").click(function () {
        $("#sizeButton").trigger("click");
        $("#rotateButton").trigger("click");
        $("#moveButton").trigger("click");
    });

    $(".shape").click(function () {
        $(this).animate({ left: "+=100px" }, "slow");
    });

    //шторы
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
});