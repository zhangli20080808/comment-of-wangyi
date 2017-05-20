/**
 * Created by Administrator on 2016/12/18 0018.
 */
$(function(){

    var aa=true;
    $("#ft").on("click",function(){
        if (aa){
            $(".show_login").show();
            return aa=false;
        }else {
            $(".show_login").hide();
            return aa=true;
        }

    });

    $("#txt").on("click",function(ev){
        ev.stopPropagation();
        $("#txt").val('');
        $(document).on("click",function(){
            $("#txt").val('抵制低俗，文明上网，登录发帖');
        })
    })

});