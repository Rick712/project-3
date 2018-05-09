(function(){

    const drops = document.querySelector('.drops')
    if(drops) {
        window.addEventListener('hashchange', function() {
            if (window.location.hash == "#bacteria" || window.location.hash == "#collector" ) {
                drops.classList.remove('gone')
            } else {
                drops.classList.add('gone')
            }
        })
    }

})()