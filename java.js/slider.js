let sliderWrapper =  document.getElementsByClassName('container'),
    sliderContainer = document.getElementsByClassName('slider-container'),
    slides = document.getElementsByClassName('slide'),
    slideCount = slides.length;
    currentIndex = 0,
    topHeight = 0,
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next');

    // console.log(slideCount);
   
//슬라이드 높이 지정해서 정렬하기
    function calulateTallestSlide() {
        for (let i = 0; i < slideCount; i++) {
            if (slides[i].offsetHeight > topHeight) {
                topHeight = slides[i].offsetHeight; 
            }
        }    
        sliderWrapper[0].style.heiht = topHeight + 'px';
        sliderContainer[0].style.heiht = topHeight +'px';
    }
    calulateTallestSlide();

    //슬라이드 가로 배열하기
    for (let i = 0; i < slideCount; i++) {
        slides[i].style.left = i * 100 +'%';
    }

    
    //슬라이드 이동
    function goToSlide(idx) {
        sliderContainer[0].style.left = idx * -100 + '%';
        sliderContainer[0].classList.add('animated')
        currentIndex = idx
        // console.log(sliderContainer)
        updateNav()
    } 


    
    //버튼 기능 사라지게하기
    goToSlide(0) //첫페이지사라지게하기
    function updateNav() {
        if (currentIndex == 0) {
            navPrev.classList.add('disabled');
        }else if (currentIndex == slideCount-1 ) {
            navNext.classList.add('disabled');
        }
        else{
            navNext.classList.remove('disabled');
            navPrev.classList.remove('disabled');
        }
    }


    //버튼이동 함수
    navPrev.addEventListener('click',function (e) {
        e.preventDefault();
        if (currentIndex > 0) {
            goToSlide(currentIndex -1);
        }
        //마지막으로가
        // else{ 
        //     goToSlide(slideCount-1);
        // }  ;
    })
    navNext.addEventListener('click',function (e) {
        e.preventDefault();
        if (currentIndex < slideCount-1) {
            goToSlide(currentIndex + 1);
       }
    //    else{
    //         goToSlide(0)
    //    }

    })
    