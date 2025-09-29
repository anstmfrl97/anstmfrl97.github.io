document.addEventListener('DOMContentLoaded', function () {

    // 네비 클릭 → 부드럽게 이동
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                gsap.to(window, {
                    duration: 0.6,
                    scrollTo: {
                        y: target,
                        autoKill: true
                    },
                    ease: "power2.out"
                });
            }
        });
    });

    // function redirectToMain() {
    //     if (window.innerWidth <= 767) {
    //         // 이미 index.html이 아니라면 강제 이동
    //         if (!window.location.pathname.endsWith("opening.html")) {
    //             window.location.href = "opening.html";
    //         }
    //     }
    // }

    // // 페이지가 처음 로드될 때 체크
    // window.addEventListener("load", redirectToMain);

    // // 창 크기 변경될 때도 체크
    // window.addEventListener("resize", redirectToMain);


    //top
    const hide = (item) => {
        gsap.set(item, {
            autoAlpha: 0
        });
    }

    const animate = (item) => {
        let x = 0;
        let y = 0;
        let delay = item.dataset.delay;

        if (item.classList.contains("reveal_LTR")) {
            x = -100,
                y = 0
        } else if (item.classList.contains("reveal_BTT")) {
            x = 0,
                y = 100
        } else if (item.classList.contains("reveal_TTB")) {
            x = 0,
                y = -100
        } else {
            x = 100,
                y = 0;
        }

        gsap.fromTo(item, {
            autoAlpha: 0,
            x: x,
            y: y
        }, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            delay: delay,
            duration: 1.25,
            overwrite: "auto",
            ease: "expo"
        });
    };

    gsap.utils.toArray(".reveal").forEach(item => {
        hide(item);

        ScrollTrigger.create({
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            markers: false,
            onEnter: () => {
                animate(item)
            }
        });
    });


    //world
    const horizontal = document.querySelector("#world"); // 전체 래퍼
    const sections = gsap.utils.toArray("#world > section"); // 섹션 배열

    // 가로 스크롤 애니메이션
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1), // 섹션 수에 맞춰 이동
        ease: "none",
        scrollTrigger: {
            trigger: horizontal, // 래퍼를 기준으로
            start: "top top", // 시작 지점
            end: () => "+=" + (horizontal.offsetWidth - innerWidth), // 총 스크롤 길이
            pin: true, // 화면 고정
            scrub: 1, // 스크롤 연동
            snap: { // 섹션 단위로 스냅
                snapTo: 1 / (sections.length - 1),
                inertia: false,
                duration: {
                    min: 0.1,
                    max: 0.1
                }
            },
            invalidateOnRefresh: true,
            anticipatePin: 1
        }

    });
    // 첫 번째 섹션: 섹션이 화면에 들어오면 실행
    gsap.fromTo(".textBox1", {
        x: -500,
        autoAlpha: 0
    }, {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".img1", // 첫 번째 섹션
            containerAnimation: scrollTween, // 가로 스크롤과 연결
            start: "top center", // 스크롤이 시작될 때 실행
            toggleActions: "play none none none",
            markers: false,
            id: "img1"
        }
    });
    // 두 번째 섹션: 섹션이 화면에 들어오면 실행
    gsap.fromTo(".textBox2", {
        x: 500,
        autoAlpha: 0
    }, {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".img2", // 두 번째 섹션
            containerAnimation: scrollTween,
            start: "top 60%", // 섹션이 왼쪽에 맞춰질 때 실행
            toggleActions: "play none none none",
            markers: false,
            id: "img2"
        }
    });
    // 세 번째 섹션: 섹션이 화면에 들어오면 실행
    gsap.fromTo(".textBox3", {
        x: -500,
        autoAlpha: 0
    }, {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".img3", // 두 번째 섹션
            containerAnimation: scrollTween,
            start: "left center", // 섹션이 왼쪽에 맞춰질 때 실행
            toggleActions: "play none none none",
            markers: false,
            id: "img3"
        }
    });
    // 네 번째 섹션: 섹션이 화면에 들어오면 실행
    gsap.fromTo(".textBox4", {
        x: -500,
        autoAlpha: 0
    }, {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".img4", // 두 번째 섹션
            containerAnimation: scrollTween,
            start: "left center", // 섹션이 왼쪽에 맞춰질 때 실행
            toggleActions: "play none none none",
            markers: false,
            id: "img4"
        }
    });
    // 다섯 번째 섹션: 섹션이 화면에 들어오면 실행
    gsap.fromTo(".textBox5", {
        x: 500,
        autoAlpha: 0
    }, {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".img5", // 두 번째 섹션
            containerAnimation: scrollTween,
            start: "left center", // 섹션이 왼쪽에 맞춰질 때 실행
            toggleActions: "play none none none",
            markers: false,
            id: "img5"
        }
    });
    // 여섯 번째 섹션: 섹션이 화면에 들어오면 실행
    gsap.fromTo(".textBox6", {
        x: -500,
        autoAlpha: 0
    }, {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".img6", // 두 번째 섹션
            containerAnimation: scrollTween,
            start: "left center", // 섹션이 왼쪽에 맞춰질 때 실행
            toggleActions: "play none none none",
            markers: false,
            id: "img6"
        }
    });
    // 일곱 번째 섹션: 섹션이 화면에 들어오면 실행
    gsap.fromTo(".textBox7", {
        x: -500,
        autoAlpha: 0
    }, {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".img7", // 두 번째 섹션
            containerAnimation: scrollTween,
            start: "left center", // 섹션이 왼쪽에 맞춰질 때 실행
            toggleActions: "play none none none",
            markers: false,
            id: "img7"
        }
    });
    // 여덟 번째 섹션: 섹션이 화면에 들어오면 실행
    gsap.fromTo(".textBox8", {
        x: -500,
        autoAlpha: 0
    }, {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".img8", // 두 번째 섹션
            containerAnimation: scrollTween,
            start: "left center", // 섹션이 왼쪽에 맞춰질 때 실행
            toggleActions: "play none none none",
            markers: false,
            id: "img8"
        }
    });
    //rune
    const runeswiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        loop: true,
        loopAdditionalSlides: 5,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true
        }
    });

    const sectionButtons = document.querySelectorAll('.section-buttons button');

    // 버튼 상태를 업데이트하는 함수
    function updateButtonState() {
        const activeIndex = runeswiper.realIndex; // 현재 활성화된 슬라이드의 실제 인덱스 가져오기
        sectionButtons.forEach((btn, index) => {
            if (index === activeIndex) {
                btn.classList.add('active'); // 해당 버튼에 'active' 클래스 추가
            } else {
                btn.classList.remove('active'); // 다른 버튼에서는 'active' 클래스 제거
            }
        });
    }

    // 슬라이드가 변경될 때마다 함수 실행
    runeswiper.on('slideChange', updateButtonState);

    // 페이지 로드 시에도 초기 상태 설정
    document.addEventListener('DOMContentLoaded', updateButtonState);


    // 버튼 클릭 시 해당 슬라이드로 이동
    sectionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.slide);
            runeswiper.slideToLoop(index); // loop 모드에서도 올바른 슬라이드로 이동
        });
    });

    // contents
    const conhorizontal = document.querySelector("#contents"); // 전체 래퍼
    const consections = gsap.utils.toArray("#contents > section"); // 섹션 배열
    // 가로 스크롤 애니메이션
    let conscrollTween = gsap.to(consections, {
        xPercent: -100 * (consections.length - 1), // 섹션 수에 맞춰 이동
        ease: "none",
        scrollTrigger: {
            trigger: conhorizontal, // 래퍼를 기준으로
            start: "top top", // 시작 지점
            end: () => "+=" + (conhorizontal.offsetWidth - innerWidth), // 총 스크롤 길이
            pin: true, // 화면 고정
            scrub: 1, // 스크롤 연동
            snap: { // 섹션 단위로 스냅
                snapTo: 1 / (consections.length - 1),
                inertia: false,
                duration: {
                    min: 0.1,
                    max: 0.1
                }
            },
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    });
    //텍스트 효과
    let targets = gsap.utils.toArray(".split");

    targets.forEach(target => {
        let SplitClient = new SplitType(target, {
            type: "lines, words, chars"
        });
        let lines = SplitClient.lines;
        let words = SplitClient.words;
        let chars = SplitClient.chars;

        gsap.from(chars, {
            yPercent: 100,
            autoAlpha: 0,
            duration: 1,
            ease: "circ.out",
            stagger: {
                amount: 1,
                from: "random"
            },
            scrollTrigger: {
                trigger: target,
                start: "left center", // 시작 지점을 'left center'로 변경
                end: "right left", // 종료 지점을 'right left'로 변경
                containerAnimation: conscrollTween,
                markers: false
            }
        });
    });



    // const Gaideswiper = new Swiper('.gaideHo', {

    //     // 한 화면에 보여줄 슬라이드 수 (반응형으로 조절 가능)
    //     slidesPerView: 3,
    //     // 슬라이드 사이의 간격 (px)
    //     spaceBetween: 30,
    //     // 무한 루프 활성화
    //     loop: true,

    //     // 자동 재생 설정
    //     autoplay: {
    //         delay: 1500, // 2.5초마다 슬라이드 이동
    //         disableOnInteraction: false, // 사용자가 드래그해도 자동 재생 유지
    //     }

    // });

    const swiper = new Swiper('.gaideslider', {
        // 한 화면에 보여줄 슬라이드 수 (반응형으로 조절 가능)
        slidesPerView: 1,
        // 슬라이드 사이의 간격 (px)
        spaceBetween: 30,
        // 무한 루프 활성화
        loop: true,

        //자동 재생 설정
        autoplay: {
            delay: 2000, // 2.5초마다 슬라이드 이동
            disableOnInteraction: false, // 사용자가 드래그해도 자동 재생 유지
        },

        // 페이지네이션(점들)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

    //userplay
    const contents = document.querySelectorAll('.videoBox');
    const section = document.querySelector('.userPlay_con');

    const options = {
        root: null, // 뷰포트
        rootMargin: '0px',
        threshold: 0.8 // 화면에 80% 이상 보일 때
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 섹션이 80% 이상 보일 때
                contents.forEach((content, index) => {
                    setTimeout(() => {
                        content.classList.add('bounce-in');
                    }, index * 800); // 1000ms 간격으로 순차적 실행
                });
                // 애니메이션이 한 번만 실행되도록 관찰 중단
                observer.unobserve(section);
            }
        });
    }, options);

    observer.observe(section);
});

// });