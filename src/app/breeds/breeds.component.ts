import { Component, OnInit } from '@angular/core';
import { Breed } from '../models/breed';
import { BreedResponse } from '../models/breeds-response';
import { BreedsResponseService } from '../services/breeds-response.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss'],
})
export class BreedsComponent implements OnInit {
  breed?: Breed;
  breedList: Breed[] = [];
  catNumber = 0;

  constructor(private breedsResponseService: BreedsResponseService) {}

  ngOnInit(): void {
    this.getBreedsResponse();
  }

  getBreedsResponse() {
    this.breedsResponseService
      .getBreedsResponse()
      .subscribe((breedResponse) => {
        this.breedList = breedResponse.data;
        this.breed = this.breedList[this.catNumber];
      });
  }

  nextCatNumber() {
    if (this.catNumber != this.breedList.length - 1) {
      this.catNumber += 1;
    } else {
      this.catNumber = 0;
    }
    this.breed = this.breedList[this.catNumber];
  }
  previousCatNumber() {
    if (this.catNumber != 0) {
      this.catNumber -= 1;
    } else {
      this.catNumber = this.breedList.length - 1;
    }
    this.breed = this.breedList[this.catNumber];
  }
}
