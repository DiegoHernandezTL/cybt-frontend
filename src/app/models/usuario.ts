export class Usuario {

  sub: string;
  correo: string;
  nombre: string;
  apellido: string;
  area: string;
  cargo: string;
  telefono: number;
  rol: string;
  estado: string;


  constructor(sub: string, correo: string, nombre: string, apellido: string, area: string, cargo: string, telefono: number, rol: string, estado: string) {
    this.sub = sub;
    this.correo = correo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.area = area;
    this.cargo = cargo;
    this.telefono = telefono;
    this.rol = rol;
    this.estado = estado;
  }

}
