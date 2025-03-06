import { MusicLibrary } from "./musicLibrary";
import { Artist } from "./artist";
import { Album } from "./album";
import { Single } from "./single";
import { Song } from "./song";

// Crear canciones
const song1 = new Song("Song A", 210, ["Rock"], 50000);
const song2 = new Song("Song B", 180, ["Pop"], 30000);

// Crear álbum y single
const album = new Album("Album 1", 2022, [song1, song2]);
const single = new Single("Single 1", 2023, song1);

// Crear artista y agregar discografía
const artist = new Artist("Artist 1", 1000000);
artist.addAlbum(album);
artist.addSingle(single);

// Crear biblioteca musical y agregar artista
const library = new MusicLibrary();
library.addArtist(artist);

// Mostrar la biblioteca completa
library.showLibrary();

// Recorrer artistas de la biblioteca
library.getArtists().forEach((artist) => {
    console.log(`\n🎤 Artista: ${artist.name} | 🎧 Oyentes Mensuales: ${artist.monthlyListeners}`);
    console.log("📀 Discografía:");
    
    artist.getDiscography().forEach((item) => {
        if (item instanceof Album) {
            console.log(`  📀 Álbum: ${item.name} (${item.year})`);
            item.songs.forEach((song) => {
                console.log(`    🎵 ${song.name} | ⏱️ Duración: ${song.duration}s | 🎼 Género: ${song.genres.join(", ")} | ▶️ Reproducciones: ${song.playCount}`);
            });
        } else if (item instanceof Single) {
            console.log(`  🎵 Single: ${item.name} (${item.year})`);
            console.log(`    🎶 ${item.song.name} | ⏱️ Duración: ${item.song.duration}s | 🎼 Género: ${item.song.genres.join(", ")} | ▶️ Reproducciones: ${item.song.playCount}`);
        }
    });

    console.log("──────────────────────────────────");
});
