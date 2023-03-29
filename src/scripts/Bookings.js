import { getBookings, denyBooking, getClowns, sendBooking, saveCompletion } from "./dataAccess.js"

export const Bookings = () => {
    const bookings = getBookings()
    const clowns = getClowns()

    bookings.sort((a, b) => new Date(a.neededBy) - new Date(b.neededBy))

    let html = `
        <ul>
            ${
                bookings.map((booking) => {
                    return `
                    <select class="clowns" id="clowns">
                        <option value="">Choose</option>
                        ${
                            clowns.map(
                                clown => {
                                    return `<option value="${booking.id}--${clown.id}">${clown.name}</option>`
                                }
                            ).join("")
                        }
                    </select>
                    <li>
                        ${booking.address} on ${booking.neededBy}
                        <button class="booking__delete"
                                id="booking--${booking.id}">
                            Deny
                        </button>
                    </li>
                `
                }).join("")
            }
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("booking--")) {
        const [,bookingId] = click.target.id.split("--")
        denyBooking(parseInt(bookingId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [bookingId, clownId] = event.target.value.split("--")

            const completion = {
                bookingId: bookingId,
                clownId: clownId,
                date_created: new Date()
            };

            saveCompletion(completion)
            
        }
    }
)