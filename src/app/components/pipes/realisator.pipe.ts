import { Pipe, PipeTransform } from '@angular/core'
import { Person } from 'src/app/models/person.model'

@Pipe({
  name: 'personnFull'
})

export class personnFullName implements PipeTransform{
  transform(person: Person): string {
    return `${person.firstName} ${person.lastName}`
  }

}
