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
  breedResponse?: BreedResponse;
  breedList = [];
  catNumber = 0;


  constructor(private breedsResponseService: BreedsResponseService) {}

  ngOnInit(): void {
    this.getBreedsResponse();
  }



  getBreedsResponse() {
    this.breedsResponseService.getBreedsResponse().subscribe(breedResponse => {
      this.breedResponse = breedResponse;
      console.log(this.breedResponse.data)
      this.breedResponse.data.forEach(x => this.breedList?.push(x));
      this.breed = this.breedList[this.catNumber]
    })
  }

  nextCatNumber(){
    if(this.catNumber!= 24){
      this.catNumber += 1
    }
    else{
      this.catNumber = 0
    }
    this.getBreedsResponse();
  }
  previousCatNumber(){
    if(this.catNumber!= 0){
      this.catNumber -= 1
    }
    else{
      this.catNumber = 24
    }
    this.getBreedsResponse();
  }
}
