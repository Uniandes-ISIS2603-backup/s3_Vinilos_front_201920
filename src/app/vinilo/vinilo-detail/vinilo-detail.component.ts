import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ViniloService } from '../vinilo.service';
import { Vinilo } from '../vinilo';
import { ViniloDetail } from '../vinilo-detail';

@Component({
  selector: 'app-vinilo-detail',
  templateUrl: './vinilo-detail.component.html',
  styleUrls: ['./vinilo-detail.component.css']
})
export class ViniloDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private viniloService: ViniloService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  viniloDetail: ViniloDetail;

  /**
   *La lista de vinilos que pertenecen a la tienda
   */
  vinilos: Vinilo[] = [];

  getVinilos(): void {
        this.viniloService.getVinilos().subscribe(vinilos => this.vinilos = vinilos);
        this.onlyThree();
  }

  onlyThree(): void {
    this.vinilos = this.vinilos.slice(0,3);
  }

  /**
  * The editorial's id retrieved from the address
  */
  @Input() vinilo_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getViniloDetail(): void {

    this.viniloService.getViniloDetail(this.vinilo_id)
      .subscribe(o => {
        this.viniloDetail = o
      });
  }

  onLoad(params) {

    this.vinilo_id = parseInt(params['id']);
    console.log(" en detail " + this.vinilo_id);
    this.viniloDetail = new ViniloDetail();
    this.getViniloDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    this.getVinilos();
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}