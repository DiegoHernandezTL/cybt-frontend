export class InformeTecnico {

  id?: number;
  cliente: string;
  responsable: string;
  tipo: number;
  usuario: string;
  usuarioCargo?: string;
  dependencia: string;
  fechaRetiro: string;
  fechaRecibe?: string;
  equipoTipo: string;
  equipoNombre?: string;
  equipoMarca?: string;
  equipoSN?: string;
  officeVersion?: string;
  officeKEY?: string;
  windowsVersion?: string;
  windowsKEY?: string;
  contadorHojas?: number;
  direccionIP?: string;
  monitorNombre?: string;
  monitorMarca?: string;
  monitorSN?: string;
  tecladoNombre?: string;
  tecladoMarca?: string;
  tecladoSN?: string;
  mouseNombre?: string;
  mouseMarca?: string;
  mouseSN?: string;
  recibe?: string;
  recibeCargo?: string;
  firmaRecibe?: string;
  servicioDetalle?: string;
  observaciones?: string;

  constructor(
    cliente: string,
    responsable: string,
    tipo: number,
    usuario: string,
    usuarioCargo: string,
    dependencia: string,
    fechaRetiro: string,
    fechaRecibe: string,
    equipoTipo: string,
    equipoNombre: string,
    equipoMarca: string,
    equipoSN: string,
    officeVersion: string,
    officeKEY: string,
    windowsVersion: string,
    windowsKEY: string,
    contadorHojas: number,
    direccionIP: string,
    monitorNombre: string,
    monitorMarca: string,
    monitorSN: string,
    tecladoNombre: string,
    tecladoMarca: string,
    tecladoSN: string,
    mouseNombre: string,
    mouseMarca: string,
    mouseSN: string,
    recibe: string,
    recibeCargo: string,
    firmaRecibe: string,
    servicioDetalle: string,
    observaciones: string
  ) {
    this.cliente = cliente;
    this.responsable = responsable;
    this.tipo = tipo;
    this.usuario = usuario;
    this.usuarioCargo = usuarioCargo;
    this.dependencia = dependencia;
    this.fechaRetiro = fechaRetiro;
    this.fechaRecibe = fechaRecibe;
    this.equipoTipo = equipoTipo;
    this.equipoNombre = equipoNombre;
    this.equipoMarca = equipoMarca;
    this.equipoSN = equipoSN;
    this.officeVersion = officeVersion;
    this.officeKEY = officeKEY;
    this.windowsVersion = windowsVersion;
    this.windowsKEY = windowsKEY;
    this.contadorHojas = contadorHojas;
    this.direccionIP = direccionIP;
    this.monitorNombre = monitorNombre;
    this.monitorMarca = monitorMarca;
    this.monitorSN = monitorSN;
    this.tecladoNombre = tecladoNombre;
    this.tecladoMarca = tecladoMarca;
    this.tecladoSN = tecladoSN;
    this.mouseNombre = mouseNombre;
    this.mouseMarca = mouseMarca;
    this.mouseSN = mouseSN;
    this.recibe = recibe;
    this.recibeCargo = recibeCargo;
    this.firmaRecibe = firmaRecibe;
    this.servicioDetalle = servicioDetalle;
    this.observaciones = observaciones;
  }

}
