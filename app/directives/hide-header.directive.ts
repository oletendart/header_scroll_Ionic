import { Directive, OnInit } from "@angular/core";

@Directive({
  selector: "[appHideHeader]"
})
export class HideHeaderDirective implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implementd.");
  }
}
