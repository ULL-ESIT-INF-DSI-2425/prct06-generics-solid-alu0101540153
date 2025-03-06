
import { Artist } from "./artist";

export class MusicLibrary {
  private artists: Artist[] = [];

  public addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

  public searchArtist(name: string): Artist[] {
    return this.artists.filter(artist => artist.name.toLowerCase() === name.toLowerCase());
  }

  public showLibrary(): void {
    console.table(this.artists.map(artist => ({
      name: artist.name,
      monthlyListeners: artist.monthlyListeners,
      discographySize: artist.getDiscography().length
    })));
  }

  getArtists(): Artist[]{
    return this.artists
  }
}
