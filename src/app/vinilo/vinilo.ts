import { Genero } from "app/genero/genero";

export interface Vinilo {
  /**
  * El id del vinilo
  */
  id: number;


  anio:string;
  /**
  * El nombre del vinilo
  */
  nombre: string;

  /**
   * El path de la imagen del vinilo
   */
  imagen: string;

  /**
  * El artista del vinilo
  */
  artista: string;

  /**
   * El precio del vinilo
   */
  precio: number;
  
  genero: Genero;
}