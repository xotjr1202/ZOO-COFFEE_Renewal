/* gallery.js */
$(function(){
  // 초기화(첫번째 이미지만 출력)
  $('.gallery img').hide().eq(0).show();

  var imgNum = 0; // 이미지 번호
  var pauseTime = 5000; // 정지 시간

  // 이미지 변경 함수 changeGallery(이미지 번호)
  function changeGallery(imgNum) {
    // 해당 번호의 이미지 출력
    $('.gallery img')
      .stop()
      .fadeOut(300)
      .eq(imgNum)
      .fadeIn(300);

    /* 인디케이터 버튼 스타일 */
    $('.indicator li').removeClass('active');
    $('.indicator li').eq(imgNum).addClass('active');
  }

  // 추가 기능: 자동재생 기능
  setInterval(function(){
    imgNum = imgNum + 1; // 다음 이미지 번호
    // 마지막 이미지면 처음 이미지로
    if(imgNum > 2) { imgNum = 0;}
    changeGallery(imgNum); 
  }, pauseTime);

  // 인디케이터 버튼1 -> 첫번째 배너
  $('.indicator li').eq(0).click(function(){
    // 이미지 변경
    changeGallery(0);
    // 인디케이터 변경
    $('.indicator li').removeClass('active');
    $(this).addClass('active');
    return false; // a요소의 기본 이벤트 제거
  })
  // 인디케이터 버튼2 -> 두번째 배너
  $('.indicator li').eq(1).click(function(){
    changeGallery(1);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');
    return false;
  })
  // 인디케이터 버튼3 -> 두번째 배너
  $('.indicator li').eq(2).click(function(){
    changeGallery(2);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');   
    return false; 
  })
     

});