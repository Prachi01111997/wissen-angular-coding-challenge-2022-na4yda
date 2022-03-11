import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  userDetails: any;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.userData().subscribe((result: any) => {
      console.log(result);
      this.userDetails = result.data;
      //  this.userDetails =  result.data.map((item)=>item)
      //   this.userDetails.push(result.data);
      console.log(this.userDetails);
    });
  }
}
