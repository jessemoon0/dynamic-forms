import { ComponentFactoryResolver, Directive, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { MyInputComponent } from '../control-components/my-input/my-input.component';
import { MyButtonComponent } from '../control-components/my-button/my-button.component';


const componentMapper = {
  text: MyInputComponent,
  email: MyInputComponent,
  button: MyButtonComponent
};

@Directive({
  selector: '[appDynamicFormControls]'
})
export class DynamicFormControlsDirective implements OnChanges {

  @Input()
  myFormControl;
  @Input()
  actualForm;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.clearComponents();
    this.reloadComponents();
  }

  private reloadComponents() {
    const componentToLoad = componentMapper[this.myFormControl.type];
    const factory = this.resolver.resolveComponentFactory(componentToLoad);

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.myFormControl = this.myFormControl;
    this.componentRef.instance.actualForm = this.actualForm;
  }

  clearComponents() {
    this.container.clear();
  }
}
