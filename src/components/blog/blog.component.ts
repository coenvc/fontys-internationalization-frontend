import {Component, OnInit} from '@angular/core';
import {Blog} from 'models/Blog';
import {BlogDataservice} from "../../app/database/blog.dataservice";
import {User} from "../../models/User";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public blog: Blog = new Blog();


  constructor(private blogData: BlogDataservice) {



    // Tesje
    this.blog.approvedBy = new User("Niels", "Werkman", "de", "nielswerkman@gmail.com", "yoksar", true);
    this.blog.creator = new User("Reinoud", "Zoelen", "van", "reintjezoeloe@gmail.com", "mypass", false);

    this.blog.summary = "Mooie samenvatting yo";
    //this.blog.summaryImage = new Blob();
  }

  ngOnInit() {
    //this.blogData.getBlogById(0).subscribe(request => this.blog = request);
  }

  getContent(source: any) {
    this.blog.content = source;
  }

  onSubmit() {
    this.blog.summary = this.blog.content;
    this.blog.content = null;

    console.log(JSON.stringify(this.blog));

    this.blogData.create(this.blog).subscribe(result => console.log(result));
  }
}
