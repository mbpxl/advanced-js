const musicCollection = {
  albums: [
    { title: "Abbey Road", artist: "The Beatles", year: 1969 },
    { title: "Thriller", artist: "Michael Jackson", year: 1982 },
    { title: "Back in Black", artist: "AC/DC", year: 1980 },
    { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 }
  ],
  
  [Symbol.iterator]() {
    let index = 0;
    const albums = this.albums;

    return {
      next() {
        if (index < albums.length) {
          return { value: albums[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
