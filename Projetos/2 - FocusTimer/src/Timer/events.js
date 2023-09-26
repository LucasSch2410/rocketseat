import * as element from './elements.js'
import * as actions from './actions.js'

export function registerControls () {
    element.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if (typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })

    element.cards.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if (typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })
}

