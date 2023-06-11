import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-update-users',
  templateUrl: './add-update-users.component.html',
  styleUrls: ['./add-update-users.component.css']
})
export class AddUpdateUsersComponent implements OnInit{

  frm!: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //this.getUserById();
    this.frm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }
}
