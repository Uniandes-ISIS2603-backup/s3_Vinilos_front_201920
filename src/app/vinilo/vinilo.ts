import { Genero } from "app/genero/genero";
import {Artista} from "app/artistas/artista"

export class Vinilo {
  /**
  * El id del vinilo
  */
  id: number;

/**
  * El año del vinilo
  */
 anio: number;
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
  artista: Artista;

  /**
   * El precio del vinilo
   */
  precio: number;
  
  genero: Genero;
}