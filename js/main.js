/* heroText function => to make animated typing animation */
const heroText = async (element, span, messages) => {

    // Config
    var endDelAt = 3

    // Wait 100ms before start typing, (wait for page fade in animation)
    await new Promise(resolve => setTimeout(resolve, 100));

    var firstStart = 1

    /* Loop thru all messages in array */
    for(var i = 0; i < messages.length; i++){

        var currentCharPtr = 0

        /* If first start loop, begin writing from "I'm"
           otherwise, begin writing after "I'm"
        */ 
        if(firstStart == 1){
            currentCharPtr = 0
            firstStart = 0
        } else {
            currentCharPtr = endDelAt
        }

        /* Writing the message */
        while(currentCharPtr < messages[i].length){
            element.innerHTML += messages[i].charAt(currentCharPtr)
            currentCharPtr++
            await new Promise(resolve => setTimeout(resolve, 80));
        }

        // Add blink animation once written whole word
        span.classList.add("blinker")

        // After write message, wait
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Remove blink animation when deleting word
        span.classList.remove("blinker")

        /* Deleting the message */
        while(currentCharPtr > endDelAt){
            var currentText = element.innerHTML
            currentText = currentText.substring(0, currentCharPtr - 1)
            element.innerHTML = currentText
            currentCharPtr--
            await new Promise(resolve => setTimeout(resolve, 80));
        }
        /* Reset 'for loop' counter, once reached the end */
        if(i == messages.length - 1){
            i = -1
        }
    }
}
// heroText(document.getElementById("who-am-i"), 
//     document.getElementById("blinker-span"),
// [
//     "I'm Asa Kahn", 
//     "I'm a Web Developer.", 
//     "I'm a Mobile App Developer."
// ])
heroText(document.getElementById("who-am-i"), 
document.getElementById("who-am-i"),
[
    "I'm Asa Kahn", 
    "I'm a Web Developer.", 
    "I'm a Mobile App Developer."
])

/*
    IMAGE POP UP SECTION
*/

let imageModal = document.getElementById("image-modal")
let imageModalHolder = document.getElementById("image-modal-holder")
let imageHoldImg = document.getElementById("image-hold-img")
let imageHoldTitle = document.getElementById("image-hold-title")
let imageHoldDesc = document.getElementById("image-hold-desc")

var imageModalToggled = false

const imageMap = new Map();
imageMap.set(0, ["./img/react_movie_project/frontPage_noLogin.png", "Front Page", "The front page displays the current popular movies."])
imageMap.set(1, ["./img/react_movie_project/movieInfoPage.png", "Video Page", "The video page will display the movie and show a description."])
imageMap.set(2, ["./img/react_movie_project/loginRegister.png", "Login/Register Form", "A user can login or register for the website."])
imageMap.set(3, ["./img/react_movie_project/editAccount.png", "Edit Account", "Once a user is logged, they can also edit their accounts credential."])
imageMap.set(4, ["./img/react_movie_project/frontPage_Login.png", "Logged In, Recently Watched Section", "A logged in user, will have a 'Recently Watched' section to quickly see the movie they watched."])
imageMap.set(5, ["./img/productPageProject/products1.png", "Hoodies Page", "This page shows a list of hoodies to add to cart."])
imageMap.set(6, ["./img/productPageProject/products2.png", "Sweatshirts Page", "This page shows a list of sweatshirts to add to cart."])
imageMap.set(7, ["./img/productPageProject/itemInCart.png", "Items in Cart", "This page shows the shopping cart with items in it."])
imageMap.set(8, ["./img/productPageProject/processed.png", "Checkout page", "This is the checkout page after an order has been submitted."])
imageMap.set(9, ["./img/productPageProject/emptyCart.png", "Empty Cart", "This is the page shown if the shopping cart is empty."])
imageMap.set(10, ["./img/Clock4Fold/1.jpg", "Outer Display Horizontal", ""])
imageMap.set(11, ["./img/Clock4Fold/2.jpg", "Inner Display Half-Folded", ""])
imageMap.set(12, ["./img/Clock4Fold/3.jpg", "Inner Display Laptop Mode", ""])
imageMap.set(13, ["./img/Clock4Fold/4.jpg", "Inner Display Full Display", ""])
imageMap.set(14, ["./img/Clock4Fold/5.jpg", "Settings Page", ""])
imageMap.set(15, ["./img/android/addressBook1.png", "Address Book Contacts List", "Practicing how to use RecyclerView's. It reads the information from the local database on the Android device."])
imageMap.set(16, ["./img/android/addressBook2.png", "Address Book Edit Contact", "Practicing how to store/edit information to the local database on the Android device."])
imageMap.set(17, ["./img/android/cannonGame.png", "Cannon Game", "A basic cannon game to shoot the colored targets based on Android's SurfaceView library"])
imageMap.set(18, ["./img/android/doodleApp.png", "Doodle Drawing App", "A basic doodle app that's based on Android's Bitmap, Canvas, and Paint libraries."])
imageMap.set(19, ["./img/android/weatherApp.png", "Weather App", "An Android app which queries OpenWeatherMap.org's API for the weather of the city entered."])
imageMap.set(20, ["./img/ios/RestaurantApp_iOS/menu.png","Menu Page","A menu page that shows categories of food items."])
imageMap.set(21, ["./img/ios/RestaurantApp_iOS/menuEntree.png","Menu Entrees","Shows a list of food items to choose from."])
imageMap.set(22, ["./img/ios/RestaurantApp_iOS/itemDescription.png","Food Item Description","Add item to cart and shows a description of the item."])
imageMap.set(23, ["./img/ios/RestaurantApp_iOS/orders.png","Orders Cart Page","Shows a list of items in the cart."])
imageMap.set(24, ["./img/ios/RestaurantApp_iOS/submit.png","Submit Order Page",""])
imageMap.set(25, ["./img/ios/todoApp1.png", "To-Do App List", "A simple ToDo app to practice edit, store, and retrieve information from the local storage on the iOS device."])
imageMap.set(26, ["./img/ios/todoApp2.png", "To-Do App More Info", "A simple ToDo app to practice edit, store, and retrieve information from the local storage on the iOS device."])
imageMap.set(27, ["./img/ios/loginExample.png", "Login Example", "A basic user authentication form on iOS."])
imageMap.set(28, ["./img/reactShareMeProject/loginPage.png", "Login Page", "Implemented a “Login with Google” button to login to the website."])
imageMap.set(29, ["./img/reactShareMeProject/frontPage.png", "Front Page", "Front page of the ShareMe website once user is logged in. The homepage displays the masonry grid layout of 'pins' sorted by recently posted pins. "])
imageMap.set(30, ["./img/reactShareMeProject/frontPageMobile.png", "Front Page Mobile", "Front page of the ShareMe website once user is logged in, displayed for mobile"])
imageMap.set(31, ["./img/reactShareMeProject/searchResults.png", "Search Results", "Typing into the search bar will only display the pins with the keyword in the title"])
imageMap.set(32, ["./img/reactShareMeProject/postPage.png", "Pin Details Page", "When a user clicks on a pin from the feed(homepage), a pin detail page will display. The pin detail page shows the pin's image in full, along with the title, description, external website url, and a comments section. Also, at the bottom, pins from the same category will load"])
imageMap.set(33, ["./img/reactShareMeProject/profilePage.png", "User Profile Page", "A users profile page will show pins they have created and saved."])
imageMap.set(34, ["./img/reactShareMeProject/upload.png", "Upload Pin Page", "The upload pin page lets the user select an image to upload, set the title, description, external website url, and a pin category."])
imageMap.set(35, ["./lifx/img/app.png", "Main App", ""])
imageMap.set(36, ["./lifx/img/example.png", "App as Extension", ""])
imageMap.set(37, ["./lifx/img/fullApp1.png", "Multiple Lights 1", ""])
imageMap.set(38, ["./lifx/img/fullApp2.png", "Multiple Lights 2", ""])

const toggleModal = (id) => {

    let currArray = [null, null, null]
    if(id != -1){
        currArray = imageMap.get(id)
    }

    if (imageModalToggled == false){
        // If modalToggled false, then toggle it on
        imageModal.style.display = "flex";
        imageHoldImg.src = currArray[0]
        imageHoldTitle.innerHTML = currArray[1]
        imageHoldDesc.innerHTML = currArray[2]

    } else {
        imageModal.style.display = "none";
    }
    imageModalToggled = !imageModalToggled
}

/*
    Scroll to section
*/

document.getElementById("nav-logo-link").addEventListener("click", () => {
    document.getElementById("home-section").scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"})
})

document.getElementById("home-link").addEventListener("click", () => {
    document.getElementById("home-section").scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"})
})

document.getElementById("arrow-btn").addEventListener("click", () => {
    document.getElementById("about-me-section").scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"})
})

document.getElementById("about-me-link").addEventListener("click", () => {
    document.getElementById("about-me-section").scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"})
})

document.getElementById("projects-link").addEventListener("click", () => {
    document.getElementById("projects-section").scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"})
})

document.getElementById("contact-link").addEventListener("click", () => {
    document.getElementById("contact-section").scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"})
})
