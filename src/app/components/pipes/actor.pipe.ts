import {Pipe, PipeTransform } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';

@Pipe({
  name: 'actorFull'
})

export class actorFullName implements PipeTransform{

  transform(actor: Actor): string {
    return `${actor.firstName} ${actor.lastName} dans le role de ${actor.role}`
  }

}
