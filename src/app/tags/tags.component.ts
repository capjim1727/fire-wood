import { Component, OnInit } from '@angular/core';
import { WoodService } from '../services/wood/wood.service';
import { Tag } from '../shared/models/tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  woodPageTags?:string[];
  tags?:Tag[];
  constructor(private woodService:WoodService) { }

  ngOnInit(): void {
    if(!this.woodPageTags)
    this.tags = this.woodService.getAllTags();
  }

}
