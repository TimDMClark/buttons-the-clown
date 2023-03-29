import { BookingForm } from "./BookingForm.js"
import { Bookings } from "./Bookings.js"

export const ButtonsClown = () => {
    return `
        <h1>Button's and Lollipop's Clown Service</h1>
        <section class="bookingForm">
            ${BookingForm()}
        </section>
        <section class="bookingRequests">
            <h2>Booking Requests</h2>
            ${Bookings()}
        </section>
    `
}