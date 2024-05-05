function make_album(artist_name, album_title, track) {
    var album = {
        artist: artist_name,
        album_title: album_title,
    };
    if (track == undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album("Hamza", "Album title 1");
var album2 = make_album("Asim", "Album title 2");
var album3 = make_album("Sara", "Album title 3", 9);
console.log(album1);
console.log(album2);
console.log(album3);
