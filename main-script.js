// MOVE TEXT LINE (GSAP)
  document.addEventListener("DOMContentLoaded", (event) => {
    $("[tr-marquee-element='component'][tr-marquee-scrolldirection='true']").each(function () {
      const componentEl = $(this),
            panelEl = componentEl.find("[tr-marquee-element='panel']");
      
      const moveDistanceSetting = -80,
            speedSetting = panelEl.first().width() / 50, 
            reverseAttribute = componentEl.attr("tr-marquee-reverse"),
            initialProgress = reverseAttribute && reverseAttribute.toLowerCase() === "true" ? 1 : 0;

      const marqueeTimeline = gsap.timeline({ repeat: -1, onReverseComplete: () => marqueeTimeline.progress(1) });

      marqueeTimeline.fromTo(panelEl, { xPercent: moveDistanceSetting * (1 - initialProgress) }, { xPercent: moveDistanceSetting * initialProgress, ease: "none", duration: speedSetting });

      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const direction = self.direction;
          marqueeTimeline.timeScale(direction);
        }
      });
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 991) {
        gsap.config({
            nullTargetWarn: false,
        });

        const links = document.querySelectorAll('.head-type');

        let activeLink = null;

        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                if (activeLink === this) return;
                activeLink = this;

                gsap.to(this.closest('.collection-item').querySelector('.video-embed'), {opacity: 1, visibility: 'visible', duration: 0.3});

                links.forEach(otherLink => {
                    if (otherLink !== this) {
                        gsap.to(otherLink, {opacity: 0, duration: 0.3});
                    } else {
                        gsap.to(this, {opacity: 1, duration: 0.3});
                    }
                });
            });

            link.addEventListener('mouseleave', function() {
                gsap.to(this.closest('.collection-item').querySelector('.video-embed'), {opacity: 0, visibility: 'hidden', duration: 0.3, delay: 0.2});

                setTimeout(() => {
                    if (activeLink !== this) return;
                    activeLink = null;
                    links.forEach(otherLink => {
                        gsap.to(otherLink, {opacity: 1, duration: 0.3});
                    });
                }, 200);
            });
        });
    }
});





        $(".video-hover").hover(
            function() {
                $('video', this).get(0).play();
            }, 
            function() {
                $('video', this).get(0).pause();
            }
        ).each(function() {
            $('video', this).get(0).pause();
        });
    }
});

 
 document.addEventListener("DOMContentLoaded", (event) => {
  const words = ["creative, writing, editorial", "animation, sound design", "generative graphics", "real-time systems and pre-visualization"];

  gsap.to("#cursor", {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power2.inOut"
  });

  let tlMaster = gsap.timeline({ repeat: -1 });

  words.forEach((word) => {
    let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tlText.to("#animated-text", { duration: 1, text: word });
    tlMaster.add(tlText);
  });
});
