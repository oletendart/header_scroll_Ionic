import { Directive, OnInit } from "@angular/core";

@Directive({
  selector: "[appHideHeader]"
})
export class HideHeaderDirective implements OnInit {
  @Input("appHideHeader") toolbar: any;
  ngOnInit(): void {
    throw new Error("Method not implementd.");
  }
}
