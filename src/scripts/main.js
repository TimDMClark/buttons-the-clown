import { fetchBookings, fetchClowns, fetchCompletions } from "./dataAccess.js"
import { ButtonsClown } from "./ButtonsClown.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchBookings()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = ButtonsClown()
            }
        )
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()