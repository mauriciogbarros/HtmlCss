/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Mauricio Gomes de Barros
 *      Student ID: 122509227
 *      Date:       04/09/2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
//const { artists, songs } = window;

function populateMenu()
{
    let navMenu = document.getElementById('menu');
    let navMenuList = document.createElement('ul');
    for(let i = 0; i < artists.length; i++)
    {
        let navMenuButton = document.createElement('button');
        navMenuButton.setAttribute('id','button' + i);
        navMenuButton.setAttribute('name', 'navButton');
        navMenuButton.innerHTML = artists[i].name;
        navMenuList.appendChild(navMenuButton);
        navMenuButton.addEventListener('click',function(){displaySelectedArtist(i)})
    }
    navMenu.appendChild(navMenuList);
}

function displaySelectedArtist(artistId)
{
    let artistHeader = document.getElementById('selected-artist');
    artistHeader.innerHTML = artists[artistId].name + ' (';
    artistHeader.innerHTML += '<a href="' + artists[artistId].website + '">Website</a>,';
    artistHeader.innerHTML += '<a href="' + artists[artistId].wiki + '">Wikipedia</a>,';
    artistHeader.innerHTML += '<a href="' + artists[artistId].youtube + '">Youtube</a>)';
    console.log(artistHeader.innerHTML);
    displaySongs(artistId);
}

function displaySongs(artistId)
{
    let cards = document.getElementById("cards");
    cards.remove();
    let songCards = document.getElementById("songCards");
    cards = document.createElement("div");
    cards.setAttribute("id","cards");
    cards.classList.add("cards");
    songCards.appendChild(cards);

    for(let i = 0; i < songs.length; i++)
    {
        if(songs[i].artistId == artistId)
        {
            let songCardDiv = document.createElement("div");
            let imgDiv = document.createElement("div");
            let nameDiv = document.createElement("div");
            let yearDurationDiv = document.createElement("div");
            let songImg = document.createElement("img");
            let songName = document.createElement("h3");
            let songYear = document.createElement("time");
            let songDuration = document.createElement("span");
            let minutes = 0;
            let seconds = 0;
            let mm = '';
            let ss = '';
            
            seconds = songs[i].duration;
            minutes = Math.floor(songs[i].duration / 60) 
            seconds -= minutes * 60;
            if(minutes < 10)
                mm = '0' + minutes.toString();
            else
                mm = minutes.toString();

            if(seconds < 10)
                ss = '0' + seconds.toString();
            else
                ss = seconds.toString();

            songImg.src= artists[artistId].image;
            songImg.alt = artists[artistId].name;

            songName.innerHTML = songs[i].name;
            songYear.innerHTML = songs[i].year;
            songDuration.innerHTML = mm + ':' + ss;

            imgDiv.appendChild(songImg);
            nameDiv.appendChild(songName);
            yearDurationDiv.appendChild(songYear);
            yearDurationDiv.appendChild(songDuration);

            songCardDiv.classList.add("card");
            songCardDiv.appendChild(imgDiv);
            songCardDiv.appendChild(nameDiv);
            songCardDiv.appendChild(yearDurationDiv);

            cards.appendChild(songCardDiv);
        }
    }
}

window.onload = function()
{
    populateMenu();
    var artistButtons = document.getElementsByName('navButton');
    displaySelectedArtist(0);
    displaySongs(0);
}  