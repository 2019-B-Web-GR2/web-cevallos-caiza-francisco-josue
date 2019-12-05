import {Body, Controller, Delete, Get, HttpCode, Post, Put, Query, Headers} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
    return `Resultado de SUMA =   ${resultado}`;
  }

  @Post('resta')
  @HttpCode(201)
  public restar(
      @Body('num1') num1: string,
      @Body('num2') num2:string
  ):string{
    const resultado: number=parseInt(num1)-parseInt(num2);
    return `Resultado de RESTA =   ${resultado}`;
  }

  @Put('multiplicacion')
  @HttpCode(202)
  public multiplicar(
      @Query('num1')num1:string,
      @Query('num2')num2:string
  ){
    console.log(`${num1} ${num2}`);
    const resultado: number=parseInt(num1)*parseInt(num2);
    return `Resultado de MULTIPLICACION =   ${resultado}`;
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
    return `Resultado de DIVISION =  ${resultado}`;
  }

}
