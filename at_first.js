$(function(){
    const side_panel=$('li.at_lione')
    const side_bar=$('li.at_lione:gt(0)>span')
    //侧边栏点击
    side_bar.click(function(){
        let panelindex=$(this).parent().index()
 
        for(let i=0;i<side_panel.length;i++)
        {
            if(i!==0&&i!==panelindex)
            {
                side_panel.eq(i).children('div').hide()
            }
            
        }
        $(this).next().is(":hidden")?$(this).next().show():$(this).next().hide()
    })

//  关闭按钮
    $('#at_add_close').click(function(){
        $('.at_lione:eq(1) .at_listcontent').hide()
        $('.at_lione:eq(1)').removeClass('active')
    })
//    tab切换
    $('.at_tab_action').click(function(){
        $(this).addClass('active').siblings('div').removeClass('active')
        $('.tabcontent').eq($(this).index()).addClass('active').siblings('div').removeClass('active')
    })
//    禁止图片拖拽

    $('img').mousedown(function(e){
        e.preventDefault()
    });

    //模块显示和隐藏
    $('.at_layout').click(function(){
        $(this).toggleClass('at-menu-open')
        $(this).hasClass('at-menu-open')?$(this).next('div').show():$(this).next('div').hide()
    })

})