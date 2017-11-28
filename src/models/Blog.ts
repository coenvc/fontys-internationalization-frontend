import {User} from 'models/User';

export class Blog {

  id: number;
  creator: User;
  approvedBy: User;
  title: String;
  summary: String;
  accepted: boolean;
  rejected: boolean;
  date: Date;
  content: String;
  summaryImage: Blob;
  contentImage: Blob;

  constructor(id?: number, creator?: User, approvedBy?: User, title?: String, summary?: String, accepted?: boolean,
              rejected?: boolean, date?: Date, content?: String, summaryImage?: Blob, contentImage?: Blob) {
    this.id = id;
    this.creator = creator;
    this.approvedBy = approvedBy;
    this.title = title;
    this.summary = summary;
    this.accepted = accepted;
    this.rejected = rejected;
    this.date = date;
    this.content = content;
    this.summaryImage = summaryImage;
    this.contentImage = contentImage;
  }
}
