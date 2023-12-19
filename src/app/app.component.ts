import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app-pro';
  user: any;
  
  constructor(private userservice: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userservice.getUser().subscribe(
      (user: any) => {
        console.log(user);
        this.user = user.results[0];
      },
      (err) => {
        console.log(err)
        this.toastr.error(err.status, "OOPs");
      },
    )
  }
}
