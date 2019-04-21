const list = document.getElementsByClassName('list')[0];

Array.from(list.children).forEach(element => {
    element.addEventListener('click', function(e) {
        //this function does stuff
        e.preventDefault();
        const toggleElement = new TimelineMax({ paused: true, reversed: true });
        toggleElement.to(element, 0.5, { x: 50, ease: Power2.easeInOut, opacity: 0 });
        toggleElement.reversed() ? toggleElement.play() : toggleElement.reverse();
    });
});
