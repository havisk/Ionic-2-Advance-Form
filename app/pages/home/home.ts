import {Component, ViewChild} from "@angular/core";
import {FormBuilder, ControlGroup, Validators} from '@angular/common';
import {Slides} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  @ViewChild('signupSlider') signupSlider: Slides;

  slideOneForm: ControlGroup;
  slideTwoForm: ControlGroup;

  firstNameChanged: boolean = false;
  lastNameChanged: boolean = false;
  ageChanged: boolean = false;

  usernameChanged: boolean = false;
  privacyChanged: boolean = false;

  constructor(private formBuilder: FormBuilder) {

    this.slideOneForm = formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: ['']
    });

  }

  next() {
    this.signupSlider.slideNext();
  }

  prev() {
    this.signupSlider.slidePrev();
  }

  save(){

  }

  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
}
