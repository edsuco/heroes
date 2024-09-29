import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {
  heroes: any[] = []

  constructor(private heroesService: HeroesService, private router:Router) {    
    this.heroes = this.heroesService.getHeroes()
    console.log(this.heroes);
    
  }
  verHeroe(id:number){      
    this.router.navigate(['heroe', id])
  }

}
