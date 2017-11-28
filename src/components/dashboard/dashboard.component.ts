import {Component, OnInit} from '@angular/core';
import {BlogDataservice} from '../../app/database/blog.dataservice';
import {Blog} from 'models/Blog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  blogs: Blog[];

  constructor(private blogDataService: BlogDataservice) {
  }

  ngOnInit(): void {
    this.blogDataService.getAll()
      .subscribe(result => {this.blogs = result; console.log(result)});
  }

}
