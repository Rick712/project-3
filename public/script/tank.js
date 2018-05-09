(function(){

    const swim = function() {
        const fishes = document.querySelectorAll('.tank img')
        fishes.forEach(function(fish){
            const xPos = window.innerWidth - 130,
                xRand = Math.random(),
                yPos = window.innerHeight - 50,
                yRand = Math.random()

            const firstPos = window.getComputedStyle(fish).getPropertyValue('left').split('p')[0],
                nextPos = xPos * xRand

            if (firstPos > nextPos) {
                fish.style.transform = "rotateY(180deg)"
            }
            if (firstPos < nextPos) {
                fish.style.transform = "rotateY(0deg)"
            }

            fish.style.left = xPos * xRand + 'px'
            fish.style.top = yPos * yRand + 'px'
        })
    }

    swim()
    setTimeout(swim, 1)
    setInterval(swim, 4000)

})()