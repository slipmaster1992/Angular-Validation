import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  
    this.userService.getUsers().subscribe();
 
  }

}
