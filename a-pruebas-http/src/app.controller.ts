import { Body, Controller, Get, HttpCode, InternalServerErrorException, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('pepito') // segmento de la URL
export class AppController {
  constructor(private readonly appService: AppService) {
  } // http://localhost:4000/pepito/hola-mundo
  @Get('hola-mundo')
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(200)
  @Post('esPar')
  adiosMundo(): string {
    const segundos = this.obtenerSegundos();
    if (segundos % 2 === 0) {
      return 'Adios mundo!';
    }
    throw new InternalServerErrorException(
      'es impar',
    );
  }

  private obtenerSegundos(): number {
    return new Date().getSeconds();
  }

  // @ts-ignore
  @Get('bienvenida')
  public bienvenida(
    @Query() parametrosDeConsulta: ObjetoBienvenida,
    @Query(`nombre`) nombreUsuario: string,
    @Query(`numero`) numeroUsuario: number,
    @Query(`casado`) casadoUsuario: boolean,
  ): string {
    // tslint:disable-next-line:no-console
    console.log(parametrosDeConsulta);
    // tslint:disable-next-line:no-console
    console.log(typeof numeroUsuario);
    // templates strings  `mensaje ${variable}`
    // return `mensaje ${parametrosDeConsulta}`
  }

  @Get('inscripcion-curso/:idCurso/:cedula')
  public inscripcionCurso(
    @Param() parametrosDeRuta: ObjetoIinscripcion,
    @Param('idCurso') idCurso: string,
    @Param('cedula') cedula: string,
  ): string {
    // tslint:disable-next-line:no-console
    console.log(parametrosDeRuta);
    return `te inscribiste al curso : ${idCurso}`;
    // templates strings  `mensaje ${variable}`
    // return `mensaje ${parametrosDeConsulta}`
  }

  @Post('almorzar')
  @HttpCode(200)
  public almorzar(
    @Body() parametrosDeCuerpo,
  ): string {
    // tslint:disable-next-line:no-console
    console.log(parametrosDeCuerpo);
    return `te inscribiste al curso : ${parametrosDeCuerpo} `;

  }

}
interface ObjetoBienvenida {
    nombre?: string;
    numero?: string;
    casado?: string;
  }

interface ObjetoIinscripcion {
  idCurso: string;
  cedula: string;
}

/*
// Typescript

// Declaracion de variables

// No utilizar

// var nombre:string = "Daniel";

  let;
  apellido: string = 'Taco'; // Mutable

  const;
  cedula: string = '1718...'; // Inmutable

// TRUTY - FALSY

// con tres iguales compara hasta el tipo de dato

  if(true) {
  // tslint:disable-next-line:no-console
  console.log('Truty');
} else {
  // tslint:disable-next-line:no-console
  console.log('Falsy');

}

if (0) {

  // tslint:disable-next-line:no-console
  console.log('Falsy');

}

if (-1) {

  // tslint:disable-next-line:no-console
  console.log('Truty');

}

if (-1) {

  // tslint:disable-next-line:no-console
  console.log('Truty');

}

// tslint:disable-next-line:no-consecutive-blank-lines

if ('') {

  // tslint:disable-next-line:no-console
  console.log('Truty');

}
if ('abc') {

  // tslint:disable-next-line:no-console
  console.log('Truty');

}

// tslint:disable-next-line:max-classes-per-file

// tslint:disable-next-line:max-classes-per-file
class Usuario {

  public cedula: string = '1723926612';

  cedula2 = '0501651418';

  private holaMundo(): void {

    // tslint:disable-next-line:no-console

    // tslint:disable-next-line:no-console
    console.log('Hola');

  }

  holaMundo2() {

    // tslint:disable-next-line:no-console
    console.log('Hola');

  }

}

// tslint:disable-next-line:max-classes-per-file
class Usuario2 {
  constructor(
    public nombre: string,
    public apellido?: string,
  ) {
  }
}
const pancho = new Usuario2('Pancho');
const josue = new Usuario2('Pancho', 'Cevallos');

// tslint:disable-next-line:max-classes-per-file
class Empleado extends Usuario2 {
  constructor(
    nombre: string,
    public numeroContrato: string,
    apellido?: string,
  ) {
    super(nombre, apellido);
  }
}
const empleadoPancho = new Empleado('pancho', '25689');

interface Entrenador {
  id: number;
  nombre: string;
}
interface Pokemon {
  id: number;
  nombre: string;
  entrenador: Entrenador | number;
}

*/


