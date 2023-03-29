import { sendBooking } from "./dataAccess.js"

export const BookingForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="bookingParentName"><b>Parent's Name</b></label>
            <input type="text" name="bookingParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="bookingChildName"><b>Child's Name</b></label>
            <input type="text" name="bookingChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="bookingAmountAttending"><b># of Children Attending</b></label>
            <input type="text" name="bookingAmountAttending" class="input" />
        </div>
        <div class="field">
            <label class="label" for="bookingAddress"><b>Address</b></label>
            <input type="text" name="bookingAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="bookingHoursNeeded"><b>Hours Needed</b></label>
            <input type="number" name="bookingHoursNeeded" class="input" />
        </div>
        <div class="field">
            <label class="label" for="bookingDate"><b>Date Needed</b></label>
            <input type="date" name="bookingDate" class="input" />
        </div>
        <button class="button" id="submitBooking">Submit Booking</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitBooking") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='bookingParentName']").value
        const userChildName = document.querySelector("input[name='bookingChildName']").value
        const userAmountAttending = document.querySelector("input[name='bookingAmountAttending']").value
        const userAddress = document.querySelector("input[name='bookingAddress']").value
        const userHoursNeeded = document.querySelector("input[name='bookingHoursNeeded']").value
        const userDate = document.querySelector("input[name='bookingDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            amountAttending: userAmountAttending,
            address: userAddress,
            hoursNeeded: userHoursNeeded,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendBooking(dataToSendToAPI)
    }
})