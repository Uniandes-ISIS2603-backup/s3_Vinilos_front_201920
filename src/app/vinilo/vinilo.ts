import { Genero } from "app/genero/genero";

export interface Vinilo {
  /**
  * El id del vinilo
  */
  id: number;

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

  genero: Genero;
}