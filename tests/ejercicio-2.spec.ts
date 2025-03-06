import { describe, expect, test } from "vitest";
import { MusicLibrary } from "../src/ejercicio-2/musicLibrary";
import { Artist } from "../src/ejercicio-2/artist";
import { Album } from "../src/ejercicio-2/album";
import { Single } from "../src/ejercicio-2/single";
import { Song } from "../src/ejercicio-2/song";

describe("Song class tests", () => {
  test("Create a Song instance", () => {
    const song = new Song("Song A", 210, ["Rock"], 50000);
    expect(song.name).toBe("Song A");
    expect(song.duration).toBe(210);
    expect(song.genres).toEqual(["Rock"]);
    expect(song.playCount).toBe(50000);
  });
});

describe("Album class tests", () => {
  test("Create an Album instance", () => {
    const song1 = new Song("Song A", 210, ["Rock"], 50000);
    const song2 = new Song("Song B", 180, ["Pop"], 30000);
    const album = new Album("Album 1", 2022, [song1, song2]);
    expect(album.name).toBe("Album 1");
    expect(album.year).toBe(2022);
    expect(album.songs.length).toBe(2);
  });
});

describe("Single class tests", () => {
  test("Create a Single instance", () => {
    const song = new Song("Song A", 210, ["Rock"], 50000);
    const single = new Single("Single 1", 2023, song);
    expect(single.name).toBe("Single 1");
    expect(single.year).toBe(2023);
    expect(single.song).toBe(song);
  });
});

describe("Artist class tests", () => {
  test("Create an Artist instance and add albums/singles", () => {
    const artist = new Artist("Artist 1", 1000000);
    expect(artist.name).toBe("Artist 1");
    expect(artist.monthlyListeners).toBe(1000000);
    
    const song = new Song("Song A", 210, ["Rock"], 50000);
    const album = new Album("Album 1", 2022, [song]);
    const single = new Single("Single 1", 2023, song);
    
    artist.addAlbum(album);
    artist.addSingle(single);
    expect(artist.getDiscography().length).toBe(2);
  });
});

describe("MusicLibrary class tests", () => {
  test("Add and retrieve artists from library", () => {
    const library = new MusicLibrary();
    const artist = new Artist("Artist 1", 1000000);
    library.addArtist(artist);
    expect(library.getArtists().length).toBe(1);
    expect(library.getArtists()[0].name).toBe("Artist 1");
  });
});