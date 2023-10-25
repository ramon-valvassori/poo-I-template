
export class Video {
    constructor(
      private id: string,
      private title: string,
      private duration: number,
      private uploadDate: string
    ) {}
  
    public getId(): string {
      return this.id
    }
  
    public setId(newValue: string): void {
      this.id = newValue
    }
  
    public getTitle(): string {
      return this.title
    }
  
    public setTitle(newValue: string): void {
      this.title = newValue
    }
  
    public getDuration(): number {
      return this.duration
    }
  
    public setDuration(newValue: number): void {
      this.duration = newValue
    }
  
    public getUploadDate(): string {
      return this.uploadDate
    }
  
    public setUploadDate(newValue: string): void {
      this.uploadDate = newValue
    }
  
  }
  