$(".btns>li").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  /* 필터링- 레이아웃 변함 (짝수/홀수/전체) */
  let a=$(this).attr('data-filter')
  $(".contents").isotope({filter:a})
})

const grid=new Isotope(".contents",{
  itemSelector:'.conbox',
  columnWidth:'.conbox',
  transition:'0.5s'
})

setTimeout(function(){$(".contents").isotope('layout')},100)

$(".fancybox").fancybox();