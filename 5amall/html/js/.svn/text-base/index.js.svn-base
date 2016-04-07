$('body').delegate('.fa-heart','click',function(){
    if($(this).hasClass('not-change-heart') || $(this).hasClass('color'))return false;
    var _this = $(this);
    function setSuccess(){
        _this.addClass('color');
    }
    $.ajax({
        type:'post',
        dataType:'json',
        url:'',
        data:{},
        success:function(res){
            if(res.code == 1){//成功的情况下
                setSuccess();
            }
        },
        error:function(){
            setSuccess();
        }
    });
});