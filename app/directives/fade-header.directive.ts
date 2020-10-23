import {
  Directive,
  OnInit,
  Input,
  Renderer2,
  HostListener
} from "@angular/core";
import { DomController } from "@ionic/angular";

@Directive({
  selector: "[appaFadeHeader]"
})
export class FadeHeaderDirective implements OnInit {
  @Input("appFadeHeader") toolbar: any;

  constructor(private domCtrl: DomController) {}

  ngOnInit() {
    this.toolbar = this.toolbar.el;
  }

  @HostListener("ionScroll", ["$event"]) onContentScroll($event) {}
}
