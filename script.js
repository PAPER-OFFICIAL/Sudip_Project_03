async function getAnimeInfo() {
  const URL = "https://api.jikan.moe/v4/random/anime";
  var response = await fetch(URL);
  response = await response.json();
  var animeNihonTitle = response.data.title_japanese;
  var animeEnglishTitle = response.data.title_english;
  var animeJapaneseTitle = response.data.title;
  var animeURL = response.data.url;
  var animeImage = response.data.images.jpg.large_image_url;
  var animeScore = response.data.score;
  var animeRating = response.data.rating;
  if(animeRating == "Rx - Hentai" || animeRating == null){
    getAnimeInfo();
  }
  var animeReleaseYear = new Date(response.data.aired.from).getFullYear();
  document.querySelector(
    "#anime_image"
  ).innerHTML = `<img src = "${animeImage}" alt = "Anime_Image_Here">`;
  if (animeEnglishTitle === null) {
    animeEnglishTitle = "N/A";
  }
  document.querySelector(
    "#anime_english_title"
  ).innerHTML = `<b>${animeEnglishTitle}</b>`;
  document.querySelector(
    "#anime_japanese_title"
  ).innerHTML = `<b>${animeJapaneseTitle}</b>`;
  document.querySelector(
    "#anime_nihon_title"
  ).innerHTML = `<b>${animeNihonTitle}</b>`;
  if (animeScore === null) {
    animeScore = "N/A";
  }
  document.querySelector("#anime_score").innerHTML = `<b>${animeScore}</b>`;
  document.querySelector(
    "#anime_release_year"
  ).innerHTML = `<b>${animeReleaseYear}</b>`;
  document.querySelector(
    "#anime_url"
  ).innerHTML = `<b><a href="${animeURL}" target="_blank">${animeURL}</a></b>`;
  let scoreStar = Math.round(animeScore/2);
let i;
let scoreStarHTML = "";
for(i = 0; i<5; i++){
  scoreStarHTML += i < scoreStar ? "★" : "☆";
}
document.querySelector("#score_stars").innerHTML = `${scoreStarHTML}`;
}
// Author : Sudip Shrestha
