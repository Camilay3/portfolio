import { Component, inject } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertasComponent } from '../alertas/alertas.component';

@Component({
  selector: 'app-dialogo',
  imports: [],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css'
})
export class DialogoComponent {
  constructor( private readonly dialogRef: MatDialogRef<DialogoComponent> ) {}
  readonly #dialog = inject(MatDialog);

  public closeModal() {
    return this.dialogRef.close();
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_z05btzr', 'template_q2wk59t', e.target as HTMLFormElement, {
        publicKey: 'dEr2-__vF6-Ouqsfi',
      })
      .then(() => {
          const alertRef = this.#dialog.open(AlertasComponent, {
            disableClose: true,
            data: { tipo: 'sucesso', mensagem: 'Email enviado com sucesso!' }
          });

          this.closeModal();
          setTimeout(() => alertRef.close(), 3000);
        },
        (error) => {
          console.error('FAILED...', (error as EmailJSResponseStatus).text);

          const alertRef = this.#dialog.open(AlertasComponent, {
            disableClose: true,
            data: { tipo: 'erro', mensagem: 'Falha ao enviar email' }
          });

          this.closeModal();
          setTimeout(() => alertRef.close(), 3000);
        }
      );
  }
}
