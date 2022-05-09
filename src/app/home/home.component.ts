import { Component, OnInit } from '@angular/core';
import { WoodService } from '../services/wood/wood.service';
import { Wood } from '../shared/models/wood';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  woods:Wood[] = [];
  constructor(private woodService:WoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.woods = this.woodService.getAllWoodsBySearchTerm(params['searchTerm']);
      else if(params['tag'])
      this.woods = this.woodService.getAllWoodsByTag(params['tag']);
      else
      this.woods = this.woodService.getAll();
    })    
  }
}
