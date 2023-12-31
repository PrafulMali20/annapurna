import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { 
  }
  PostFormData(formdata:any){
    return this.http.post("http://127.0.0.1:8000/api/client",formdata).toPromise();
  }
  Formdata(formsdata:any){
    return this.http.post("http://127.0.0.1:8000/api/reqfood",formsdata).toPromise();
  }
  contactus(condata:any){
    return this.http.post("http://127.0.0.1:8000/api/contact",condata).toPromise();
  }
  regformdata(fomdata:any){
    return this.http.post("http://127.0.0.1:8000/api/bpartner",fomdata).toPromise();
  }
  pickup(pick:any){
    return this.http.post("http://127.0.0.1:8000/api/fortime",pick).toPromise();
  }
  remove(del:any){
    return this.http.post("http://127.0.0.1:8000/api/forremove",del).toPromise();
  }
  login(adminData: object){
    return this.http.post('http://127.0.0.1:8000/api/login',adminData);
  }

  //Blog GET
  private blog = 'http://localhost:8000/api/blogs'; // Your actual API endpoint for blogs

getBlogData() {
  return this.http.get(`${this.blog}`);
}

private blog2 = 'http://localhost:8000/api/blogs/{id}'; // Your actual API endpoint for blogs

getBlogsData() {
  return this.http.get(`${this.blog2}`);
}
}
