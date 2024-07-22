// common.js
// 제주특별자치도 페이지의 인터렉션
// 작성자 신호정


document.addEventListener('DOMContentLoaded', function() {
    ///////////////////////////// language 선택 시
  var langShowBtn = document.querySelector('.langshow');
  var langMenu = document.querySelector('.langmenu');

  // 클릭 이벤트 핸들러 추가
  langShowBtn.addEventListener('click', function() {
    // 메뉴를 토글하여 보이거나 숨김
    if (langMenu.style.display === 'block') {
      langMenu.style.display = 'none';
      langShowBtn.setAttribute('aria-expanded', 'false');
    } else {
      langMenu.style.display = 'block';
      langShowBtn.setAttribute('aria-expanded', 'true');
    }
  });

  // .langmenu에서 포커스가 나갈 때 숨김 처리
  langMenu.addEventListener('focusout', function(event) {
    // 포커스가 .langmenu 내부의 요소에서 외부로 나가면 숨김 처리
    if (!langMenu.contains(event.relatedTarget)) {
      langMenu.style.display = 'none';
    }
  });






///////////////////////   주 메뉴 호버/키보드 선택했을 때
  var buttons = document.querySelectorAll(".menu-btn");
  var gnbmenus = document.querySelectorAll(".blackback");
  
  buttons.forEach(function(button) {
      button.addEventListener("click", function() {
          var targetId = button.getAttribute("data-target");
          // 모든 gnbmenu 숨기기
          gnbmenus.forEach(function(menu) {
              menu.style.display = "none";
          });
          // 해당하는 gnbmenu 보이기
          document.getElementById(targetId).style.display = "block";
      });
  });
  
  document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
          gnbmenus.forEach(function(menu) {
              menu.style.display = "none";
          });
      }
  });



///////////////////////////////배너
const slider = document.querySelector('.bannerimglist');
        const slides = document.querySelectorAll('.slides');
        const bannernum = document.querySelector('.bannernum');
        const stopButton = document.querySelector('li.banstop button');
        const bannerplay = document.getElementById('bannerplay');
        const prev = document.querySelector('li.banleft button');
        const next = document.querySelector('li.banright button');

        let currentIndex = 0; // 현재 보여지고 있는 슬라이드의 인덱스
        let intervalId; // setInterval의 ID를 저장하기 위한 변수
        let isPlaying = true;

        

        function changeSlide() {
            currentIndex++;
            if (currentIndex === slides.length) {
                currentIndex = 0; // 순환(loop) 처리
            }
            // 슬라이드 이동 애니메이션
            slider.style.transition = 'transform 0.5s ease';
            slider.style.transform = `translateX(-${currentIndex * 100 / slides.length}%)`; // 각 슬라이드 너비의 비율로 이동

            // currentIndex 값을 <span class="bannernum">에 삽입
            bannernum.textContent = currentIndex + 1;
        }


        function startSlideShow() {
            intervalId = setInterval(changeSlide, 3000); // 3초마다 슬라이드 변경
        }
        
        function stopSlideShow() {
            clearInterval(intervalId);
        }

        startSlideShow();

         // 슬라이드 재생 상태 초기화
         function resetSlideShow() {
            stopSlideShow();
            startSlideShow();
        }

        stopButton.addEventListener('click', function () {
            if (isPlaying) {
                stopSlideShow();
                stopButton.style.backgroundImage = "url('../image/banner/ban_play.svg')";
                bannerplay.textContent = '재생' ; 
            } else {
                startSlideShow();
                stopButton.style.backgroundImage = "url('../image/banner/ban_pause.svg')";
                bannerplay.textContent = '일시정지' ; 
            }
            isPlaying = !isPlaying; // 슬라이드 재생 상태 토글
        });
        
        prev.addEventListener('click', function () {
            changeSlide(currentIndex - 1);

            if (currentIndex - 1 === 0) {
                changeSlide(3);
            } else if (currentIndex - 1 === 1) {
                changeSlide(1);
            } else if (currentIndex - 1 === 2) {
                changeSlide(2);
            }

            resetSlideShow();
        });
        
        next.addEventListener('click', function () {
            
            changeSlide(currentIndex + 1);
            resetSlideShow();
        });

});


