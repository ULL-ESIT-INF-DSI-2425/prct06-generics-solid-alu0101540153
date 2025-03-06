export class Song {
  constructor(
    public name: string,
    public duration: number,
    public genres: string[],
    public playCount: number
  ) {}
}
