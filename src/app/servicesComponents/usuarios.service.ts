import { Injectable } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private _model: ServiciosService
  ) { }

  get(query:any){
    return this._model.querys('tblusuario/querys',query, 'post');
  }

  getInfo(query:any){
    return this._model.querys('tblusuario/infoUser',query, 'post');
  }

  darPuntos(query:any){
    return this._model.querys('tblusuario/guardarPunto',query, 'post');
  }
  
  getNivel(query:any){
    return this._model.querys('tblusuario/nivelUser',query, 'post');
  }

  cambioPass(query:any){
    return this._model.querys('tblusuario/cambioPass',query, 'post');
  }

  login(query:any){
    return this._model.querys('tblusuario/login',query, 'post');
  }

  create(query:any){
    return this._model.querys('tblusuario/register',query, 'post');
  }

  update(query:any){
    return this._model.querys('tblusuario/'+query.id, query, 'put');
  }
  
  delete(query:any){
    return this._model.querys('tblusuario/'+query.id, query, 'delete');
  }
}
