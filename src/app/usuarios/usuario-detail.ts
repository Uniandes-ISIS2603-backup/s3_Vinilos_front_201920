import { Usuario } from './usuario';

export class UsuarioDetail extends Usuario{
    /**
   *nombre del usuario
   */
    nombre: string;
   
  /**
  *fecha de nacimiento del usuario
  */
   fechaNacim: string;
  
  /**
  *numero de celular del usuario
  */
   celular: number;
  
  /**
  *pais del usuario
  */
   pais: string;
  
  /**
  *direccion del usuario
  */
   direccion: string;
  
}