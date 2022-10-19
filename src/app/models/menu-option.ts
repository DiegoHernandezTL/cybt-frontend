export class MenuOption {

  nombre: string;
  descripcion: string;
  path: string;
  access: string[];

  constructor(nombre: string, descripcion: string, path: string, access: string[]) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.path = path;
    this.access = access;
  }
}
