import {Body, Controller, Delete, Get, HttpCode, Post, Put, Query, Headers} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('calculadora')
export class AppController {
  constructor(private readonly appService: AppService) {}
  total = 100;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('suma')
  @HttpCode(200)
  public sumar(
      @Headers() cabeceras:any,
      @Headers('num1') num1:string,
      @Headers('num2') num2:string,
  ){
    console.log(cabeceras);
    const resultado: number=parseInt(num1)+parseInt(num2);
    const operacion: number= this.total-resultado
    this.total=operacion
    return `Resultado de SUMA =   ${resultado} .... Queda ${this.contador(this.total)}`;
  }

  @Get('resta')
  @HttpCode(200)
  public restar(
      @Headers() cabeceras:any,
      @Headers('num1') num1:string,
      @Headers('num2') num2:string,
  ){
    console.log(cabeceras);
    const resultado: number=parseInt(num1)-parseInt(num2);
    const operacion: number= this.total-resultado
    this.total=operacion
    return `Resultado de Resta =   ${resultado} .... Queda ${this.contador(this.total)}`;
  }


  @Put('multiplicacion')
  @HttpCode(202)
  public multiplicar(
      @Query('num1')num1:string,
      @Query('num2')num2:string
  ){
    console.log(`${num1} ${num2}`);
    const resultado: number=parseInt(num1)*parseInt(num2);
    const operacion: number= this.total-resultado
    this.total=operacion
    return `Resultado de MULTIPLICACION =   ${resultado} .... Queda ${this.contador(this.total)}`;
  }

  @Delete('division')
  @HttpCode(200)
  public dividir(
      @Headers() cabeceras:any,
      @Headers('num1') num1:string,
      @Headers('num2') num2:string,
  ){
    console.log(cabeceras);
    const resultado: number=parseInt(num1)/parseInt(num2);
    const operacion: number= this.total-resultado
    this.total=operacion
    return `Resultado de DIVISION =   ${resultado} .... Queda ${this.contador(this.total)}`;
  }

  public contador(operacion : number):number{
    if (operacion<0){
      this.total =100
    }
    return operacion
  }

}