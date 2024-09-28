import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {
  heroes: any[] = []

  constructor(private heroesService: HeroesService) {    
    this.heroes = this.heroesService.getHeroes()
    console.log(this.heroes);
    
  }


}
