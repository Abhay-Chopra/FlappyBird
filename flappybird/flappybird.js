/* need HTML to fully load before running Javascript code so I used an Event Listener*/
document.addEventListener('DOMContentLoaded', () => {
    const faby = document.querySelector('.faby')
    const gameBlock = document.querySelector('.gameBlock')
    const ground = document.querySelector('.ground')

    /* global variables
    birdLeft controls the spacing between bird and game block from the left side of bird
    birdBottom controls the spacing between bird and game block from the bottom of the bird
    gravity controls the speed of the bird falling 
    */
    let birdLeft = 220
    let birdBottom = 400
    let gravity = 2
    let gameDone = false
    function start(){
        /* function changes the bottom of the bird position to negative
         y-direction using gravity */
        birdBottom -= gravity
        faby.style.bottom = birdBottom + 'px'
        faby.style.left = birdLeft + 'px'
    }
    let birdTimer = setInterval(start, 15) 

    function jump(){
        if(birdBottom < 480){
        birdBottom += 40
        faby.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
        }
    }
    function movement(e){
        if (e.keyCode === 38) {
            jump()
        }
        // number 32 is the key code for arrow key up
    }
    document.addEventListener('keyup', movement)
    // used an event listener to make the key method from codeHs
    function pipeGenerator(){
        let spacingLeft = 520
        let random = Math.random() * 98
        let spacingBot = random
        const pipe = document.createElement('div')
        const topPipe = document.createElement('div')
        // this method creates a div into our html file
        if(!gameDone) pipe.classList.add('pipe')
        if(!gameDone) topPipe.classList.add('topPipe')
        /* assosiates class pipe to const pipe 
        so it can be styled in css file */
        gameBlock.appendChild(pipe)
        gameBlock.appendChild(topPipe)
        /* append child is a js method which adds the newly
        created pipe div into the original html file*/
        pipe.style.left = spacingLeft + 'px'
        pipe.style.bottom = spacingBot + 'px'
        topPipe.style.left = spacingLeft + 'px'
        let gap = Math.random() * (80 - 50) + 20
        topPipe.style.bottom = gap + 380 + spacingBot + 'px'
        function pipeLeft(){
            spacingLeft -= 5
            if (!gameDone) pipe.style.left = spacingLeft + 'px'
            if (!gameDone) topPipe.style.left = spacingLeft + 'px'

            if (spacingLeft === -60){
                clearInterval(pipeTimer)
                gameBlock.removeChild(pipe)
                gameBlock.removeChild(topPipe)
            }
            if (
                spacingLeft > 200 && spacingLeft < 280 && birdLeft === 220 &&
                (birdBottom  < spacingBot + 202 || birdBottom > spacingBot + gap + 240)
                || birdBottom === 0
                ) {
                gameOver()
                clearInterval(pipeTimer)
            }
        }
        if (!gameDone)setTimeout(pipeGenerator, 3000)
        let pipeTimer = setInterval(pipeLeft, 60)
    }
    pipeGenerator()

    function gameOver(){
        clearInterval(birdTimer)
        gameDone = true
        document.removeEventListener('keyup', movement)
        console.log('Game Over')
    }
})
