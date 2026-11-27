import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';

/**
 * Caja de búsqueda del chat. El host `<app-chat>` lleva los estilos base
 * (clase `chat-form`); para cambiar su aspecto, pasa clases con `class`.
 */
@Component({
  selector: 'app-chat',
  imports: [ReactiveFormsModule, Button, Icon],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
  host: {
    class: 'chat-form',
  },
})
export class Chat {

  iconName = input<string>('microphone');

  chatForm = new FormGroup({
    message: new FormControl('')
  });
  enviarMensaje() {
    console.log(this.chatForm.value.message);
  }
}
