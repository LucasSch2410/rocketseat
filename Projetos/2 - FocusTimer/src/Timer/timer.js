import state from './state.js'
import * as element from './elements.js'
import * as sounds from './sounds.js'

export function countdown(){
    clearTimeout(state.countdownId)

    if (!state.isRunning){
        return
    }

    let minutes = Number(element.minutes.textContent)
    let seconds = Number(element.seconds.textContent)

    seconds--
    state.seconds = seconds
 
    if (state.minutes == 0 && state.seconds == -1){
        state.seconds = 0
        state.isRunning = false
        sounds.kichenTimer.play()
        return
    }    
    
    if (seconds == -1){
        seconds = 59
        minutes--
        state.minutes = minutes
    }
   
    runningTimer(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000);
}

export function runningTimer(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    localStorage['minutes'] = String(minutes);
    localStorage['seconds'] = String(seconds);
    
    element.minutes.textContent = String(minutes).padStart(2, '0') 
    element.seconds.textContent = String(seconds).padStart(2, '0') 

}