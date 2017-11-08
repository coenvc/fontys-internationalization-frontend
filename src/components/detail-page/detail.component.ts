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

    private blog: Observable<Blog>;

    constructor(private blogService: BlogDataservice) {
        this.blog = blogService.getBlogById(1);
        console.log(this.blog);
    }

    ngOnInit() {

    }
}
