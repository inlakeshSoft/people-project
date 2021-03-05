import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Result } from '../model/result.model';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private urlAPI =  'https://randomapi.com/api/02wjudov?key=1HZQ-4LPJ-UJDD-M435&fmt=raw&noinfo';

  constructor(private http: HttpClient) { }


  getPeopleList(): Observable<Result[]>{
    return this.http.get<Result[]>(this.urlAPI);
  }

}
