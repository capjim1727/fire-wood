import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 6 },
      { name: 'Cherry', count: 2 },
      { name: 'Pecan', count: 2 },
      { name: 'Oak', count: 2 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      { 
        id: 1,
        name: 'Cherry Wood', 
        price: 20,
        imageUrl: '/assets/images/foods/image0.jpeg',
        tags: ['Cherry'],
      },
      {
        id: 2,
        name: 'Pecan Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image1.jpeg',
        tags: ['Pecan'],
      },
      {
        id: 4,
        name: 'Cherry Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image6.jpeg',
        tags: ['Pecan'],
      },
      {
        id: 5,
        name: 'Pecan Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image4.jpeg',
        tags: ['Cherry'],
      },
      {
        id: 6,
        name: 'Oak Wood',
        price: 20, 
        imageUrl: '/assets/images/foods/image5.jpeg',
        tags: ['Oak'],
      },
       { 
        id: 1,
        name: 'Cherry Wood', 
        price: 20,
        imageUrl: '/assets/images/foods/image0.jpeg',
        tags: ['Cherry'],
      },
      {
        id: 2,
        name: 'Pecan Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image1.jpeg',
        tags: ['Pecan'],
      },
      {
        id: 4,
        name: 'Cherry Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image6.jpeg',
        tags: ['Pecan'],
      },
      {
        id: 5,
        name: 'Pecan Wood',
        price: 20,
        imageUrl: '/assets/images/foods/image4.jpeg',
        tags: ['Cherry'],
      },
      {
        id: 6,
        name: 'Oak Wood',
        price: 20, 
        imageUrl: '/assets/images/foods/image5.jpeg',
        tags: ['Oak'],
      },
    ];
  }
}
