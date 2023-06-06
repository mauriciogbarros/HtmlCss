/**
 * artists.js
 *
 * The app's list of Artists
 */

class Artist 
{
  constructor(name, website, wiki, youtube, image) 
  {
    this.name = name;
    this.website = website;
    this.wiki = wiki;
    this.youtube = youtube;
    this.image = image;
  }
}

var artists = new Array();
artists.push(new Artist("Alice in Chains", "https://aliceinchains.com/","https://en.wikipedia.org/wiki/Alice_in_Chains","https://www.youtube.com/channel/UCK9X9JACEsonjbqaewUtICA","./img/Alice_in_Chains.jpg"));
artists.push(new Artist("Nirvana","https://shop.nirvana.com/","https://en.wikipedia.org/wiki/Nirvana_(band)","https://www.youtube.com/channel/UCFMZHIQMgBXTSxsr86Caazw","./img/Nirvana.jpg"));
artists.push(new Artist("Pearl Jam", "https://pearljam.com/","https://en.wikipedia.org/wiki/Pearl_Jam","https://www.youtube.com/channel/UClQT6Vnsm6BUm0I5kR26EkQ","./img/Pearl_Jam.jpg"));
artists.push(new Artist("Soundgarden","https://www.soundgardenworld.com/","https://en.wikipedia.org/wiki/Soundgarden","https://www.youtube.com/channel/UCHKSayVT2Ks-gQBXmMLGTag","./img/Soundgarden.jpg"));
