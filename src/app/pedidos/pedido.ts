import { Vinilo } from "app/vinilo/vinilo";

export interface Pedido {

  id: number;
  aceptado: boolean;
  observacion: string;
  tipo: string;
  fechaGeneracion: Date;
  viniloCompra:Vinilo;
 
  envio:
  {
    id: number,
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
  vinilosIntercambio: Vinilo[];
}
