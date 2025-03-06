
import { Album } from "./album";
import { Single } from "./single";
import { Discography } from "./discography";

export class Artist {
  private discography: Discography<Album | Single> = new Discography();

  constructor(
    public name: string,
    public monthlyListeners: number
  ) {}

  public addAlbum(album: Album): void {
    this.discography.add(album);
  }

  public addSingle(single: Single): void {
    this.discography.add(single);
  }

  public getDiscography(): (Album | Single)[] {
    return this.discography.getAll();
  }
}
