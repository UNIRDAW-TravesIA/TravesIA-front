import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../button/button';

/**
 * Caja de búsqueda del chat. El host `<app-chat>` lleva los estilos base
 * (clase `chat-form`); para cambiar su aspecto, pasa clases con `class`.
 */
@Component({
  selector: 'app-chat',
  imports: [ReactiveFormsModule, Button, FontAwesomeModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
  host: {
    class: 'chat-form',
  },
})
export class Chat {
  faMicrophone = faMicrophone;
  audio() {
    window.navigator.mediaDevices.getUserMedia({ audio: true })
      .then(async stream => {
        const texto = 'Viaje a Granada';
        this.chatForm.patchValue({ message: texto });

      })
      .catch(error => {
        console.error('Error accessing audio', error);
      });
  }
  
  chatForm = new FormGroup({
    message: new FormControl('')
  });
  enviarMensaje() {
    console.log(this.chatForm.value.message);
  }
}
