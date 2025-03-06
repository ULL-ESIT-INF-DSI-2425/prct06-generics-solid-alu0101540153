import { Song } from "./song";

export class Single {
  constructor(
    public name: string,
    public year: number,
    public song: Song
  ) {}

  public getTotalDuration(): number {
    return this.song.duration;
  }

  public getTotalPlays(): number {
    return this.song.playCount;
  }
}