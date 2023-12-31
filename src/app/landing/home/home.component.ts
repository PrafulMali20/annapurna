import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Product } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from '../../myservices/common.service';
import { SafeResourceUrl } from '@angular/platform-browser';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Virtual]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 7500, noPause: true, showIndicators: true } }
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  blogs: any[] = [];
  blog: any = {};

  imagepath:any='http://127.0.0.1:8000/public/images/  ';
  product : any[] = [];
  category : any[] = [];
  loader: boolean = false;
  baseURL: string = 'http://localhost:3131/images/products/';
  baseURLCat: string = 'http://localhost:3131/images/';

  constructor(
    private _calldata : DataService,private http: HttpClient, private CommonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.getAllProduct(4, 0);
    this.getAllCategory();
    this.fetchBlogs();
  }




  getAllCategory(){
    this._calldata.getAllCategory().subscribe(
      (res : any) =>{
        this.category = res['data']
        console.log(res)
      }
    )
  }

  getAllProduct(limit: number, skip : number) {
    this.loader = true;
    this._calldata.getProductsByLimit(limit, skip).subscribe(
      (res: any) => {
        this.product = res['data']
        console.log(this.product)
        this.loader = false;
      }
    )
  }

  fetchBlogs() {
    this.CommonService.getBlogData().subscribe(
      (data: any) => {
        this.blogs = data.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  
  
}
