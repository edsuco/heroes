import { Component } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(private heroesService:HeroesService, private router:Router){
  }

  buscarHeros(termino:string){   
    // this.heroesService.buscarHeroes(termino)
    this.router.navigate(['/busqueda', termino])
  }
  handleKeyupEnter(event:any) {    
    if(event.code=="Enter")
    event.preventDefault();

  }
}
