import { Component, OnInit } from '@angular/core';
import { BlogDataservice } from '../../app/database/blog.dataservice'
import { Blog } from 'models/Blog';
import { Observable } from 'rxjs/Observable';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'detail-page',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    private blog:Blog;

    constructor(private blogService: BlogDataservice) {
        
    }

    ngOnInit() {
        this.blogService.getBlogById(7).subscribe(r =>{ 
            this.blog = r, 
            console.log(r)
        
        });
        
    }
}
