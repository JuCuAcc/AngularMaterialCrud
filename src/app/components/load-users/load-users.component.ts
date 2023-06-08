import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-load-users',
  templateUrl: './load-users.component.html',
  styleUrls: ['./load-users.component.css']
})
export class LoadUsersComponent implements OnInit{

  dataSource = new MatTableDataSource<UserModel>();
  displayColumns = ['id', 'name', 'email'];

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.dataSource.data = response.users;

        console.table(response);

      },
      error: (err) => console.error(err)
    })
  }

  ngOnInit(): void {
    this.loadUsers();
    console.table(this.loadUsers());
  }

  constructor( private userService: UserService) {

  }
}
