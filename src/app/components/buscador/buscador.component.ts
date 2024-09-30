import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {
  heroes:Heroe[] = []

  constructor(private activatedRoute:ActivatedRoute, private heroesService: HeroesService, private router:Router){
    this.activatedRoute.params.subscribe(param => {
    this.heroes= this.heroesService.buscarHeroes(param['termino'])
    })
  }

  verHeroe(id:number){
    this.router.navigate(['heroe', id])
  }
}
