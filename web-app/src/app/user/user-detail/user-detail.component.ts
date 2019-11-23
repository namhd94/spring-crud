import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {

  id: number;
  user: User;

  constructor(private activedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.id = this.activedRoute.snapshot.params.id;
    this.getUser(this.id);
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe(data => {
      console.log(data);
      this.user = data;
    }, error => console.log(error));
  }

}
