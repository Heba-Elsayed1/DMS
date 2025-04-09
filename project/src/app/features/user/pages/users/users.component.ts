import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { UserDto } from '../../user.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LockUserComponent } from './lock-user/lock-user.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
 
}
