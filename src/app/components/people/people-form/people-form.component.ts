import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../../model/person.model';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {

  @Output() personAdded = new EventEmitter<Person>();

  personForm: FormGroup;

  constructor() {
    this.personForm = new FormGroup({
      personName: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    
  }

  add() {
    this.personAdded.emit(new Person(this.personForm.get("personName")?.value));
  }

}
