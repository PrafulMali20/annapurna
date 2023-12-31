// blogs.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/myservices/common.service';
import { ImageLoader } from '@angular/common';
interface Blog {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private http: HttpClient,private common: CommonService) { }
 

  ngOnInit(): void {
    this.fetchBlogs();
  }

  // fetchBlogData(): void {
  //   const apiUrl = 'http://localhost:8000/api/blogs';

  //   this.http.get<Blog[]>(apiUrl)
  //     .subscribe(
  //       (data: Blog[]) => {
  //         this.blogs = data;
  //       },
  //       error => {
  //         console.error('Error fetching data:', error);
  //       }
  //     );
  fetchBlogs() {
    this.common.getBlogData().subscribe(
      (data: any) => {
        this.blogs = data.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  }

