var links =  new Array();
links[0]="https://supermario-game.com/";
links[1]="https://soap2day.rs/movie";
links[2]="https://pacman.live/play.html"
links[3]="https://soap2day.rs/tv-show"
links[4]="https://www.youtube.com/watch?v=dQw4w9WgXcQ"

function openLink() {
    // Chooses a random link
    var i = Math.floor(Math.random() * links.length);
    window.location=links[i]

    return false;
  }