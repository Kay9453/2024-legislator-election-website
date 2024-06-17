$(document).ready(function(){
    
    let open = false;

    // 預設 nav 隱藏
    $(".nav").addClass("nav-hide");

    // 預設 X 按鈕隱藏
    $(".close-icon").addClass("icon-hide");

    $(".nav-btn").click(function(event){

        //避免觸發 a 標籤：跳轉網頁
        event.preventDefault();

        $(".nav").addClass("nav-show");

        open = !open;

        if (open) {
            $(".menu-icon").addClass("icon-hide");
            $(".close-icon").removeClass("icon-hide");

            $(".nav").slideDown(600);
            $(".gray-layer").addClass("layer-show");
        } else {
            $(".close-icon").addClass("icon-hide");
            $(".menu-icon").removeClass("icon-hide");

            $(".nav").slideUp(600);
            $(".gray-layer").removeClass("layer-show");
        }
        return open;
    });

    // 偵測寬度 > 992px，nav 移除
    $(window).on('resize', () => {
        if ($( window ).width() >= 992) {
            $(".nav").css('display', '');
        }
    });

    // iPad & Mobile 版，點擊 nav 會自動收起來
    $(window).on('resize', () => {
        if ($( window ).width() < 992) {
            $(".nav").click(function(event){
                $(".close-icon").addClass("icon-hide");
                $(".menu-icon").removeClass("icon-hide");
        
                $(".nav").slideUp(600);
                $(".gray-layer").removeClass("layer-show");
            });
        }
    });


    
});