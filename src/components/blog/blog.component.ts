import { Component, OnInit } from '@angular/core';
import { Blog } from 'models/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public blog : Blog = new Blog();
  public myTitle : String;
  public myContent : String;

  constructor() { }

  ngOnInit() {
  }


  onSubmit(){
    this.blog.title = this.myTitle;
    this.blog.content = this.myContent;
    console.log(this.blog.title);
  }
}
