/**
 * songs.js
 *
 * The app's songs
 */

class Song
{
  constructor(artistId, name, year, duration, showToUsers)
  {
    this.artistId = artistId;
    this.name = name;
    this.year = year;
    this.duration = duration;
    this.showToUsers = showToUsers;
  }
}

var songs = new Array();
// artists[0] -> Alice in Chains
songs.push(new Song(0, 'Would?', 1992, 207, true));
songs.push(new Song(0, 'Them Bones', 1992, 150));
songs.push(new Song(0, 'Rooster', 1992, 375, true));
songs.push(new Song(0, 'Man in the Box', 1990, 286, true));
songs.push(new Song(0, 'Nutshell', 1994, 259, true));
songs.push(new Song(0, 'Down in a Hole', 1992, 338, true));
songs.push(new Song(0, 'Dirt', 1992, 316, true));

// artists[1] -> Nirvana
songs.push(new Song(1, 'Smells Like Teen Spirit', 1991, 302, true));
songs.push(new Song(1, 'Lithium', 1991, 257, true));
songs.push(new Song(1, 'Come as You Are', 1991, 219, true));
songs.push(new Song(1, 'Polly', 1991, 176, true));
songs.push(new Song(1, 'Heart Shaped Box', 1993, 279, true));

// artists[2] -> Pearl Jam
songs.push(new Song(2, 'Even Flow', 1991, 293, true));
songs.push(new Song(2, 'Corduroy', 1994, 277, true));
songs.push(new Song(2, 'Better Man', 1998, 277));
songs.push(new Song(2, 'Do the Evolution', 1998, 234, true));
songs.push(new Song(2, 'Elderly Woman Behind the Counter in a Small Town', 1993, 195, true));
songs.push(new Song(2, 'Black', 1991, 348, true));
songs.push(new Song(2, 'Alive', 1991, 340, true));
songs.push(new Song(2, 'Rearviewmirror', 1993, 284, true));

// artists[3] -> Soundgarden
songs.push(new Song(3, 'Black Hole Sun', 1994, 318, true));
songs.push(new Song(3, 'Spoonman', 1994, 246, true));
songs.push(new Song(3, 'Fell on Black Day', 1994, 282, true));
songs.push(new Song(3, 'Rusty Cage', 1991, 265, true));
songs.push(new Song(3, 'Outshined', 1991, 310, true));
songs.push(new Song(3, 'My Wave', 1994, 312, true));
songs.push(new Song(3, 'The Day I Tried to Live', 1994, 319, true));

