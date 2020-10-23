import { Directive, OnInit, Input, HostListener } from "@angular/core";
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

  @HostListener("ionScroll", ["$event"]) onContentScroll($event) {
    let scrollTop = $event.detail.scrollTop;
    if (scrollTop >= 255) {
      scrollTop = 255;
    }
    const hexDist = scrollTop.toString(16);

    this.domCtrl.write(() => {
      this.toolbar.style.setProperty("--background", `#f4f5f8`);
    });
  }
}
