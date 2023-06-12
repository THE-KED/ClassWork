import { Injectable } from '@angular/core';
import { Assignment } from '../Models/Assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentServiceService {

  assignment!:Assignment[];
  constructor(private assignmentServ:AssignmentServiceService) {
    
   }
}
