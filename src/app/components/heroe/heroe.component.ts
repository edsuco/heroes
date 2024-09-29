import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe: any = {}
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router:Router) {
    this.activatedRoute.params.subscribe(params => {      
    this.heroe = this.heroesService.getheroe(params['id'])    
    })
  }
  regresar(){
    this.router.navigate(['/heroes'])
  }
}
