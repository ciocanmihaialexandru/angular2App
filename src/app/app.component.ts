import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<alert type="success">Well done {{name}}!</alert>`,
})
export class AppComponent  { name = 'Angular'; }
