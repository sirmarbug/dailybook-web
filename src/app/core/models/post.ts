export class Post {
  constructor(
    public id: string = '',
    public title: string = '',
    public body: string = '',
    public tags: string[] = [''],
    public userId: string = '',
    public journalId: string = '',
  ) {}
}
