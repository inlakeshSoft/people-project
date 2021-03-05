import { Component, OnInit } from '@angular/core';
import { Person } from '../../../model/person.model';
import { PeopleService } from '../../../services/people.service';
import { Result } from '../../../model/result.model';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {

  result!: Result;
  people!: Person[];
  constructor(private peopleService:  PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe(
      data =>  {
        this.people = data[0]!.people;
       },
      err=> console.info("Ocurrió un error")
    );
  }

  onPersonAdded(person: Person){
    this.people.push(person);
  }

}
