import { Component, OnInit } from '@angular/core';
import { Fact } from '../models/fact';

import { FactsService } from '../services/facts.service';


@Component({
  selector: 'app-random-facts',
  templateUrl: './random-facts.component.html',
  styleUrls: ['./random-facts.component.scss']
})
export class RandomFactsComponent implements OnInit {

  fact?: Fact;
  isLoaded = false;

  constructor(private factsService: FactsService ) { }

  ngOnInit(): void {
    this.getFact();
  }

  getFact(){
    this.isLoaded = false
    this.factsService.getFact().subscribe(fact => {
      this.fact = fact;
      console.log(fact)
      console.log(this.fact)
      this.isLoaded = true
    })
  }

}


