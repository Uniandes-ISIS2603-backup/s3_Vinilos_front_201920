import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { EnvioService } from "../envio.service";
import { Envio } from "../envio";
import { EnvioDetail } from "../envio-detail";

@Component({
  selector: 'app-envio-detail',
  templateUrl: './envio-detail.component.html',
  styleUrls: ['./envio-detail.component.css']
})
export class EnvioDetailComponent implements OnInit {

  constructor(
    private envioService: EnvioService,
    private route: ActivatedRoute
  ) {}

  envioDetail: EnvioDetail;

  @Input() envio_id: number;

  loader: any;

  getEnvioDetail(): void {
    this.envioService.getEnvioDetail(this.envio_id).subscribe(o => {
      this.envioDetail = o;
    });
  }

  onLoad(params) {
    this.envio_id = parseInt(params["id"]);
    this.envioDetail = new EnvioDetail();
    this.getEnvioDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) =>
      this.onLoad(params)
    );
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}
