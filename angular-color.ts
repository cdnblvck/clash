// Angular 8.x code
import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector:'label-component',
  template: `
    <div [ngStyle]="{ 'color': color }" class="label">{{label}}</div>
  `
})
export class LabelComponent {
    @Input() label: String = new String("");
    @Input() color: String = new String("");
}

// #region Preview
@Component({
    template: `<label-component label='Hello World!' color='red'></label-component>`
})
export class PreviewComponent { }
// #endregion Preview

// #region Module declaration - Do not Change
@NgModule({
    imports: [CommonModule],
    declarations: [PreviewComponent, LabelComponent],
    entryComponents: [PreviewComponent]
})
export class PreviewModule { }
// #endregion Module declaration