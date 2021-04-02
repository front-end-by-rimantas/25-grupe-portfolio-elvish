function scrollDown() {
    // var position = document.getElementById('about');
    // window.scrollTo(0,document.body.position);

    document.getElementById('about').scrollIntoView();
    alert('works')
}

export {scrollDown}