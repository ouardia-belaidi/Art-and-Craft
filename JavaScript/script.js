var slides = document.querySelectorAll('.headerImage');
        var btns = document.querySelectorAll('.btn');
        let currentSlide = 0;

        function preloadImage(url){
            var img = new Image();
            img.src = url;
        }
         
        //image slider manual navigation 
        var manualNav = function(manual){
            slides.forEach((headerImage) => {
                headerImage.classList.remove('active');
                btns.forEach((btn) => {
                    btn.classList.remove('active');
                });
            });
        
        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
        }

        btns.forEach((btn,i) =>{
            btn.addEventListener("click",() => {
                manualNav(i);
                currentSlide=i;
            });
        });


        //auto navigation
       
        var repeat = function(activeClass){
            let active = document.getElementsByClassName('active');
            let i=0;

            var repeater = () => {
                setTimeout(function(){
                    slides.forEach((headerImage) => {
                        headerImage.classList.remove('active');
                        btns.forEach((btn) => {
                        btn.classList.remove('active');
                    });
                    });
                
                    slides[i].classList.add('active');
                    btns[i].classList.add('active');
                    i++;


                    if(i>=slides.length){
                        i=0;
                    }
                    repeater();
                },6000);
                
            }
            repeater();
        }
        repeat();





