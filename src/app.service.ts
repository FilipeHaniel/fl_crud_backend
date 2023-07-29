import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello() {
    return {
      nome: 'Filipe',
      altura: 1.75,
    }
  }
}
