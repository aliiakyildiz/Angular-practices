import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomfor]'
})
export class CustomforDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set appCustomfor(value: string[]) {
    for (let i = 0; i < value.length; i++)
      this.viewContainerRef.createEmbeddedView(this.templateRef,{
        // index: i
        // $implicit:`${i}`//"i" değerini tanımlandığı yere gönderir.
        $implicit:value[i],
        index:i
      })
  }
}
