import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "angular-store"
  name = 'Eduardo';
  age = 56;
  img = 'https://res.cloudinary.com/dheyjds01/image/upload/v1681861536/journal-mui/tzreo0wug9ggvjd7oykf.png';
  btnDisabled = true;
  person = {
    name: "Samaniego",
    age: 26,
    avatar: this.img
  }

  names: string[] = ['Elizabeth', 'Ingrid', 'Ari', 'Katarina'];
  newName = '';


  addNewName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  deleteName(index: number){
    this.names.splice(index, 1)
  }
}
