import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PetService} from '../../shared/services/pet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petForm = new FormGroup({
    petName: new FormControl(''),
    petType: new FormControl(''),
    birthDate: new FormControl(''),
    soldDate: new FormControl(''),
    color: new FormControl(''),
    previousOwner: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private petService: PetService,
              private router: Router) {
  }

  ngOnInit() {
  }

  save() {
    const pet = this.petForm.value;
    this.petService.addPet(pet)
      .subscribe(() => {
        this.router.navigateByUrl('/pets');
      });

  }
}
