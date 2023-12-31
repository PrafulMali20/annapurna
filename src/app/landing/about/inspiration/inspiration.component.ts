// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { CommonService } from 'src/app/myservices/common.service';

// @Component({
//   selector: 'app-inspiration',
//   templateUrl: './inspiration.component.html',
//   styleUrls: ['./inspiration.component.scss']
// })
// export class InspirationComponent {
//   name:any;
//   email:any;
//   city:any;
//   address:any;
//   event_end_at:any;
//   food:any;

//   getformData(form:NgForm){
//     this.common.PostFormData(form.value).then((res)=>{
//       console.log.apply(res);

//     });
//   }
//   constructor(private common:CommonService){

//   }
// }

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/myservices/common.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent {
  name: any;
  email: any;
  city: any;
  address: any;
  pickup: any;
  fquantity: any;
  showAlert = false;
  alertMessage: string = '';
  alertClass: string = '';

  constructor(private common: CommonService) {}

  FormData(form: NgForm) {
    this.common.Formdata(form.value).then(
      (res) => {
        console.log(res);
        this.showAlertMessage('success', 'Form submitted successfully.');
        form.reset();
      },
      (error) => {
        console.error(error);
        this.showAlertMessage('error', 'Failed to submit the form.');
      }
    );
  }

  showAlertMessage(alertClass: string, message: string) {
    this.alertClass = alertClass;
    this.alertMessage = message;
    this.showAlert = true;
  }
}
