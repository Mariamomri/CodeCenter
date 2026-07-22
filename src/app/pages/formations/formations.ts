import { Component } from '@angular/core';
import { NgClass } from "@angular/common" ;
@Component({
  selector: 'app-formations',
  imports: [NgClass],
  templateUrl: './formations.html',
  styleUrl: './formations.css',
})
export class Formations {

  formations =  [ 'Angular', 'React', 'Node.js', 'Java Spring', '.NET' ];
  
}
