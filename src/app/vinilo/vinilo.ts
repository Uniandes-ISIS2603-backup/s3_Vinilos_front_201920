export interface Vinilo {
  /**
  * El id del vinilo
  */
  id: number;

  /**
  * El nombre del vinilo
  */
  name: string;

  /**
  * El año del vinilo
  */
  anio: number;

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