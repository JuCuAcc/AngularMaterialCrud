import { Component, OnInit } from '@angular/core';

import { PageEvent} from '@angular/material/paginator';
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

  pageSizeOptions = [3, 6, 9, 12];
  pageSize = 3;
  pageIndex = 0;
  pageLength = 0; // total records in db
  
  displayColumns = ['id', 'name', 'email','action'];

  loadUsers() {
    this.userService.getUsers((this.pageIndex+1), this.pageSize).subscribe({
      next: (response) => {
        this.dataSource.data = response.users;
        this.pageLength = response.count;
        console.table(response.users);

      },
      error: (err) => console.error(err)
    })
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  changePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadUsers();
  }
  constructor( private userService: UserService) {

  }
}
