// info from name and address
const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `

})
// end of personal data

// start wishlist
const wishContainer = document.querySelector("#wishList")
document.querySelector("#saveInfo").addEventListener("click", (event) => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const item = document.querySelector("#favorite-item").value
    const store = document.querySelector("#Store").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    wishContainer.innerHTML +=
        `I can purchase ${item} at ${store}<br>`;

    // the if statement sends an alert if nothing is typed into the input fields probably a better way but not sure at this time
    if (item === '' || store === '') {
        alert('You must type an Input in the Input field')
    }
    // the statements below clear the input fields after submission
    document.querySelector("#favorite-item").value = null
    document.querySelector("#Store").value = null
})



