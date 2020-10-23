import {
  Directive,
  OnInit,
  Input,
  Renderer2,
  HostListener
} from "@angular/core";
import { DomController } from "ionic-angular";

@Directive({
  selector: "[appHideHeader]"
})
export class HideHeaderDirective implements OnInit {
  @Input("appHideHeader") toolbar: any;
  private toolbarHeight = 44;

  constructor(private renderer: Renderer2, private domCtrl: DomController) {}

  ngOnInit() {
    this.toolbar = this.toolbar.el;
    this.domCtrl.read(() => {
      this.toolbarHeight = this.toolbar.clientHeight;
    });
  }

  @HostListener("ionScroll", ["$event"]) onContentScroll($event) {
    const scrollTop = $event.detail.scrollTop;
    let newPosition = (scrollTop / 5);
    
    if ()

  }
}
