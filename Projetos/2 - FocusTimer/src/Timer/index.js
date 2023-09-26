import state from './state.js'  
import * as events from './events.js'
import * as timer from './timer.js'

export function start (minutes, seconds){
    state.minutes = minutes ?? Number(localStorage['minutes'])
    state.seconds = seconds ?? Number(localStorage['seconds'])
 
    timer.runningTimer()
    events.registerControls()
}