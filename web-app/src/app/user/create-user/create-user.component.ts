import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent implements OnInit {

  @Input() newUser: User;
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  save(newUser: User) {
    this.userService.createUser(newUser).subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save(this.newUser);
  }

  gotoList() {
    this.router.navigate(['/rest/user']);
  }

}
