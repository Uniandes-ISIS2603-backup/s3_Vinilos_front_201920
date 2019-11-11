import {Vinilo} from "./vinilo";

export class ViniloDetail {
  /**
  * El año del vinilo
  */
  anio: number;

  /**
   * El artista del vinilo
   */
  artista: string;

  /**
  * La colecccion del vinilo
  */
  coleccion: string;

  /**
  * El precio del vinilo
  */
  precio: number;

  /**
  * La informacion del vinilo
  */
  descripcion: string;

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