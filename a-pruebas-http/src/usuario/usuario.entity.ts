import {Entity} from "typeorm";
import { PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('usuario_web')
export class UsuarioEntity{
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'id_web',
    comment: 'Identificador de la clave de usuario',
  })
  id: number;
}