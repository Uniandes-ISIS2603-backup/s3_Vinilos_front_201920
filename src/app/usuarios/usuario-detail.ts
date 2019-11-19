import { Usuario } from './usuario';

export class UsuarioDetail extends Usuario{
    /**
   *nombre del usuario
   */
    nombre: String;
   
  /**
  *fecha de nacimiento del usuario
  */
   fechaNacim: Date;
  
  /**
  *numero de celular del usuario
  */
   celular: number;
  
  /**
  *pais del usuario
  */
   pais: String;
  
  /**
  *direccion del usuario
  */
   direccion: String;
  
}