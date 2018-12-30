import { ComponentFactoryResolver, Directive, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { RadiobuttonComponent } from '../components/radiobutton/radiobutton.component';
import { DateComponent } from '../components/date/date.component';
import { SelectComponent } from '../components/select/select.component';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { FieldConfig } from '../models/field.interface';
import { FormGroup } from '@angular/forms';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
};
@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit, OnChanges {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    //
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.clearComponents();
    this.reloadComponents();
  }

  private reloadComponents() {
    const componentToLoad = componentMapper[this.field.type];
    const factory = this.resolver.resolveComponentFactory(componentToLoad);

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

  clearComponents() {
    this.container.clear();
  }
}
