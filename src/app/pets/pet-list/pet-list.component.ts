import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/models/pet';
import {PetService} from '../../shared/services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {


  pets: Pet[];

  constructor(private petService: PetService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.petService.getPets()
      .subscribe(listOfPets => {
        this.pets = listOfPets;
      });

    /*
    delete(petId:number)
    {
      this.petService.deletePet(petId)
        .subscribe(message => {
          this.refresh();
        });
    }
    */

  }
}

