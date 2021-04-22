import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent {
  users: {}[] = [];
  title = 'kek';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users.results.map((user: any) => {
        return {
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          geo: `${user.location.city} ${user.location.state} ${user.location.street.name}`,
        };
      });

      console.log(this.users);
    });
  }
}
