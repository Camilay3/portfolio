import { Component, inject, OnInit } from '@angular/core';
import { TelaService } from '../../services/tela.service';
import { DialogoComponent } from '../../modals/dialogo/dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertasComponent } from '../../modals/alertas/alertas.component';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  desktop?: boolean;
  readonly #dialog = inject(MatDialog)

  constructor(private readonly telaService: TelaService) {}

  ngOnInit(): void {
    this.telaService.desktop$.subscribe(isDesktop => this.desktop = isDesktop); // Monitora se é desktop
  }

  redirecionar(url: string) {
    window.open(url, '_blank', 'noopener noreferrer');
  }

  openModal() {
    this.#dialog.open(DialogoComponent, {
      disableClose: true,
      height: 'auto',
      maxHeight: '90vh',
    })
  }
}

