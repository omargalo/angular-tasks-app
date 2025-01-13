import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

//helper to select random dummy user
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //selectedUser = DUMMY_USERS[randomIndex];

  // Using signal to notify the parent component
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  /* get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  } */

  // Read the value of the signal using computed property
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser = DUMMY_USERS[randomIndex];

    // Change the value of the signal
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
