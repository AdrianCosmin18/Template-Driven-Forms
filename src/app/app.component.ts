import { Component } from '@angular/core';
import {User} from "./user";
import {EnrollmentService} from "./enrollment.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ["Angular", "React", "View"];
  topicHasError = true;

  constructor(private service: EnrollmentService) {
  }

  userModel = new User('Rob', 'rob@test.com', 33333333, 'default', 'morning', true);
  title = 'tdf';

  validateTopic(value: any){
    if (value === "default"){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

  onSubmit() {
    console.log(this.userModel);
    this.service.enroll(this.userModel).subscribe({
      next: value => console.log("Success", value),
      error: (err) => console.log("Error!", err)
    });

  }
}
