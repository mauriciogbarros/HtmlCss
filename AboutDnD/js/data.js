/*
Attach reviewData to the global window object so other scripts can access it at runtim.
window.reviewData = [Review data];
Each object in reviewData includes
1) The name of the person
2) The date
3) The rating 1-5
4) The text of their review

/*
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
*/
class Review
{
    constructor(name,date,rating,comment)
    {
        this.name = name;
        this.date = date;
        this.rating = rating;
        this.comment = comment;
    }
}

var reviews = new Array();
reviews.push(new Review("Matthew Ray",new Date(2023, 11, 30), 5, "This website is great!"));
reviews.push(new Review("Marisha Mercer", new Date(2022, 10, 28), 4, "Good job!"));
reviews.push(new Review("Laura Willingham", new Date(2021, 12, 25), 3, "Oh darling, you tried"));
reviews.push(new Review("Travis Bailey", new Date(2022, 9, 15), 2, "Broh, c'mon... seriously."));
reviews.push(new Review("Liam Riegel", new Date(2023, 8, 9), 1, "I cried when I saw this, now it's just a bad memmory."));
reviews.push(new Review("Sam O'Brien", new Date(2021, 5, 15), 5, "Amazing, I'm speecheless."));