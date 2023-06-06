/*
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
*/

function activateReviewButton()
{
    let reviewButton = document.getElementById("reviewButton");
    reviewButton.addEventListener("click", function(){displayReviews()});
}

function activateSubmitButton()
{
    let submitReviewButton = document.getElementById("submitReview");
    submitReviewButton.addEventListener("click", function(){addReview()});
}

function addReview()
{
    let name = document.getElementById("name").value;
    let date = document.getElementById("reviewDate").value;
    let rating = document.getElementById("rating").value;
    let comment = document.getElementById("comment").value;

    reviewData.push(new Review(name, date, rating, comment));

    name.value = null;
    date.value = null;
    rating.value = null;
    comment.value = null;
}

function displayReviews()
{
    let cards = document.getElementById("cards");
    cards.remove();
    let reviewCards = document.getElementById("reviewCards");
    cards = document.createElement("div");
    cards.setAttribute("id", "cards");
    cards.classList.add("cards");
    reviewCards.appendChild(cards);

    for(let i = 0; i < reviewData.length; i++)
    {
        let reviewCardDiv = document.createElement("div");
        let nameDiv = document.createElement("div");
        let dateDiv = document.createElement("div");
        let ratingDiv = document.createElement("div");
        let commentDiv = document.createElement("div");

        let name = document.createElement("h3");
        let date = document.createElement("time");
        let rating = document.createElement("span");
        let comment = document.createElement("p");

        name.innerHTML = reviewData[i].name;
        date.innerHTML = reviewData[i].date;
        rating.innerHTML = reviewData[i].rating;
        comment.innerHTML = reviewData[i].rating;

        nameDiv.appendChild(name);
        dateDiv.appendChild(date);
        ratingDiv.appendChild(rating);
        commentDiv.appendChild(comment);

        reviewCardDiv.appendChild(nameDiv);
        reviewCardDiv.appendChild(date);
        reviewCardDiv.appendChild(rating);
        reviewCardDiv.appendChild(comment);

        cards.appendChild(reviewCardDiv);
    }
}

window.onload = function()
{
    window.reviewData = reviews;
    activateReviewButton();
    activateSubmitButton();
    displayReviews();
}