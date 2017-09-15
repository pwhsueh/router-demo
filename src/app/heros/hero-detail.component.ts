import { Component , Input , OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { states , Address , Hero } from '../data-model';
import { HeroService } from './hero.service';
import { Hero } from './hero';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  // heroForm = new FormGroup({
  //   name : new FormControl()
  // });

  @Input() hero: Hero;

}
