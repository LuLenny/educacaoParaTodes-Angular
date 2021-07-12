import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';


@Component({
  selector: 'app-perfil-voluntario',
  templateUrl: './perfil-voluntario.component.html',
  styleUrls: ['./perfil-voluntario.component.css']
})
export class PerfilVoluntarioComponent implements OnInit {
 
  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService,
    private authService: AuthService
    ) { }

  ngOnInit() { 
    
    if(environment.token == ''){
    this.router.navigate(['/login'])
    
  }
  this.authService.refreshToken()
  this.temaService.refreshToken()
  }

  

}
