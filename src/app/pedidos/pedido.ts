export interface Pedido {

  id: number;
  aceptado: boolean;
  observacion: string;
  tipo: string;
  fechaGeneracion: Date;
  viniloCompra:
  {
    id: number,
    nombre: String,
    anio: number,
    coleccion: String,
    precio: number,
    informacion: String,
    estado: String,
    disponible: boolean,
    duenio: null
  };
  envio:
  {
    fecha: Date,
    fueEnviado: boolean,
  };
  metodoPago:
  {
    pago: String,
    numeroTarjeta: number;
    cuentaPSE: String,
    montoPagado: number
  }


}
