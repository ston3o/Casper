// NOTE: Scroll performance is poor in Safari
// - this appears to be due to the events firing much more slowly in Safari.
//   Dropping the scroll event and using only a raf loop results in smoother
//   scrolling but continuous processing even when not scrolling
$(document).ready(function () {
    
    var nav = document.querySelector('.site-nav-main .site-nav');
    var header = document.querySelector('header');

    var lastScrollY = window.scrollY;
    var lastWindowHeight = window.innerHeight;
    var lastDocumentHeight = $(document).height();
    var ticking = false;

    function onScroll() {
        lastScrollY = window.scrollY;
        requestTick();
    }

    function onResize() {
        lastWindowHeight = window.innerHeight;
        lastDocumentHeight = $(document).height();
        requestTick();
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update);
        }
        ticking = true;
    }

    function update() {
        var trigger = header.getBoundingClientRect().bottom + window.scrollY;
        var progressMax = lastDocumentHeight - lastWindowHeight;

        // show/hide nav
        if (lastScrollY >= trigger - 20) {
            nav.classList.add('fixed-nav-active');
        } else {
            nav.classList.remove('fixed-nav-active');
        }

        ticking = false;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, false);

    update();

});
