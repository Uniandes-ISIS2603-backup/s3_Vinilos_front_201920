import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ArtistaService } from "../artista.service";
import { Artista } from "../artista";
import { ArtistaDetail } from "../artista-detail";

@Component({
  selector: "app-artista-detail",
  templateUrl: "./artista-detail.component.html",
  styleUrls: ["./artista-detail.component.css"]
})
export class ArtistaDetailComponent implements OnInit {
  constructor(
    private artistaService: ArtistaService,
    private route: ActivatedRoute
  ) {}

  artistaDetail: ArtistaDetail;

  @Input() artista_id: number;

  loader: any;

  getArtistaDetail(): void {
    this.artistaService.getArtistaDetail(this.artista_id).subscribe(o => {
      this.artistaDetail = o;
    });
  }

  onLoad(params) {
    this.artista_id = parseInt(params["id"]);
    this.artistaDetail = new ArtistaDetail();
    this.getArtistaDetail();
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