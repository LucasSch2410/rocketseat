import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'
import * as element from './elements.js'

export function play(){
    if (state.minutes == 0 && state.seconds == 0){
        alert('Adicione tempo no contador para poder iniciar')
        state.isRunning = false
        return
    }

    state.isRunning = !state.isRunning
    document.documentElement.classList.toggle('running')

    sounds.buttonPress.play()
    timer.countdown()
}

export function stop(){
    state.isRunning = false
    state.minutes = 0
    state.seconds = 0
    timer.runningTimer(state.minutes, state.seconds);
    document.documentElement.classList.remove('running')
    sounds.buttonPress.play()
}

export function plusMinutes(){
    if (state.minutes <= 55){    
        state.minutes += 5
        timer.runningTimer(state.minutes, state.seconds)
        sounds.buttonPress.play()
    }
}

export function minusMinutes(){
    if (state.minutes > 4){
        state.minutes -= 5
        timer.runningTimer(state.minutes, state.seconds)
        sounds.buttonPress.play()
    } 
}

/* Cards */

export function tree(){
    element.tree.classList.toggle('secondary-button')
    sounds.forestAudio.play()

    if (!element.tree.classList.contains('secondary-button')){
        sounds.forestAudio.pause()
    }

}

export function cloud(){
    element.cloud.classList.toggle('secondary-button')
    sounds.rainAudio.play()

    if (!element.cloud.classList.contains('secondary-button')){
        sounds.rainAudio.pause()
    }

}

export function market(){
    element.market.classList.toggle('secondary-button')
    sounds.cafeAudio.play()

    if (!element.market.classList.contains('secondary-button')){
        sounds.cafeAudio.pause()
    }

}

export function fire(){
    element.fire.classList.toggle('secondary-button')
    sounds.fireplaceAudio.play()

    if (!element.fire.classList.contains('secondary-button')){
        sounds.fireplaceAudio.pause()
    }

}

