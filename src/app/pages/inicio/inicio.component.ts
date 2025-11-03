import { Component } from '@angular/core';
import { IconesComponent } from "../../components/icones/icones.component";
import { Icone } from '../../components/icones/icone';

@Component({
  selector: 'app-inicio',
  imports: [IconesComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  iconesPrincipal: Icone[] = [
    { src: 'fab fa-angular', label: 'Angular' },
    { src: 'fi fi-brands-typescript', label: 'Typescript' },
    { src: 'fab fa-node-js', label: 'Nodejs' },
    { src: 'fab fa-js-square', label: 'Javascript' },
    { src: 'fab fa-git-alt', label: 'Git' },
    { src: 'fab fa-css3-alt', label: 'CSS' },
    { src: 'fab fa-html5', label: 'HTML' },
  ];

  iconesOutros: Icone[] = [
    { src: 'fab fa-python', label: 'Python' },
    { src: 'fas fa-database', label: 'PostgreSQL' },
    { src: 'fas fa-database', label: 'MySQL' },
    { src: 'fi fi-sr-square-c', label: 'C' },
    { src: 'fab fa-swift', label: 'Swift' },
    { src: 'fab fa-php', label: 'php' },
  ];

  iconesFerramentas: Icone[] = [
    { src: 'fab fa-figma', label: 'Figma' },
    { src: 'fab fa-trello', label: 'Trello' },
    { src: 'fab fa-docker', label: 'Docker' },
  ];
}
