import { Component, OnInit } from '@angular/core';
import { Envio } from "../envio";
import { EnvioService } from "../envio.service";

@Component({
  selector: 'app-envio-list',
  templateUrl: './envio-list.component.html',
  styleUrls: ['./envio-list.component.css']
})
export class EnvioListComponent implements OnInit {

  constructor(private envioService: EnvioService) {
    this.envio = [];
  }
  envio: Envio[];
  getEnvio(): void {
    this.envioService.getEnvio().subscribe(envio=> (this.envio = envio));
  }
  ngOnInit() {
    // que hace cuando se llama el componente
    this.getEnvio();
  }

}
