import {Vinilo} from "./vinilo";

export class ViniloDetail extends Vinilo {

  /**
  * La colecccion del vinilo
  */
  coleccion: string;

  /**
  * La informacion del vinilo
  */
  informacion: string;

  /**
  * El estado del vinilo
  */
  estado: string;

  /**
  * La disponibilidad del vinilo
  */
  disponible: boolean;

  /**
  * El dueño del vinilo
  */
  //Por ahora le puse any, pero cuando se conecte es de tipo Usuario
  duenio: any;
}