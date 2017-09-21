import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { Hero } from '../data-model';
import { HeroService } from '../heros/hero.service';
import { Hero } from '../heros/hero';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Observable<Hero[]>;

    private selectedId: number;

    constructor(
      private service: HeroService,
      private route: ActivatedRoute,
      private router: Router
    ) {}

    ngOnInit() {
      this.heroes = this.route.params
        .switchMap((params: Params) => {
          this.selectedId = +params['id'];
          return this.service.getHeroes();
        });
    }

    isSelected(hero: Hero) { return hero.id === this.selectedId; }

    onSelect(hero: Hero) {
      this.router.navigate(['hero', hero.id]);
    }

}
