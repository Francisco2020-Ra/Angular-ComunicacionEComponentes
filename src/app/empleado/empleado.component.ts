import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  titulo = "Listado de Empleados"

  empleados:Empleado[]=[
    new Empleado("Nicolas", "Gonzalez", "Presidente", 7500),
    new Empleado("Maria", "Martín", "Vicepresidente", 6500),
    new Empleado("Ana", "Lopez", "Jefa de Area", 4500),
    new Empleado("Alfredo", "Gimenez", "Supervisor", 3500),
  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
    this.empleados.push(miEmpleado);
  }
  cuadroNombre: string = "";
  cuadroApellido: string = ""
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  
}
