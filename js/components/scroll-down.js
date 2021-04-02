document.getElementById("btn-sdown").addEventListener("click", scrollDown);

function scrollDown() {
    var abt = document.getElementById('About');
    abt.scrollIntoView();

    // document.getElementById('About').scrollIntoView(true);
    alert('works');
}

export {scrollDown}