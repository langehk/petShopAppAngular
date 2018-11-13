import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../shared/services/owner.service';
import {Owner} from '../../shared/models/owner';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {

  owners: Owner[];

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.ownerService.getOwners()
      .subscribe(listOfOwners => {
        this.owners = listOfOwners;
      });
  }


  delete(ownerId: number) {
      this.ownerService.deleteOwner(ownerId)
        .subscribe(message => {
          this.refresh();
        });
  }
}
