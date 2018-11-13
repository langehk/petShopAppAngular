import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../shared/services/owner.service';
import {Owner} from '../../shared/models/owner';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  owner: Owner;

  constructor(private route: ActivatedRoute,
              private ownerService: OwnerService) { }

  ngOnInit() {
    const ownerId = +this.route.snapshot.paramMap.get('ownerId');
    this.ownerService.getOwnersById(ownerId)
      .subscribe(ownerFromRest => {
        this.owner = ownerFromRest;
      });
  }
}
