import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ɵangular_packages_router_router_b } from '@angular/router';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens', this.token)
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem, this.token)
  }
}
