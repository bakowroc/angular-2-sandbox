export default class RepoDataModel{
  name:string;
  author:string;
  desc:string;
  link:string;
  date:string;

  constructor(name:string, author:string, desc:string, link:string, date:string){
    this.name=name;
    this.author=author;
    this.desc=desc;
    this.link=link;
    this.date=date;
  }

}
