import {Component, OnInit} from '@angular/core';
import {Blog} from 'models/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public blog: Blog = new Blog();

  constructor() {
    this.blog.title = 'Mijn titel';
  }

  ngOnInit() {
  }


  onSubmit() {
    console.log(this.blog.title);

  }
}
