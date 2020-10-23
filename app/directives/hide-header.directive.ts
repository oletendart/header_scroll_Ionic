import { Directive, OnInit, Input, Renderer2 } from "@angular/core";
import { DomController } from "ionic-angular";

@Directive({
  selector: "[appHideHeader]"
})
export class HideHeaderDirective implements OnInit {
  @Input("appHideHeader") toolbar: any;
  private toolbarHeight = 44;

  constructor(private renderer: Renderer2, private domCtrl: DomController) {
    
  }
}
