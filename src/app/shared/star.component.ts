import {Component, OnChanges, Input, Output, EventEmitter} from "@angular/core";
/**
 * Created by alexandru.ciocan on 18/05/2017.
 */

@Component({
  selector: `ai-star`,
  moduleId: module.id,
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.notify.emit('clicked!');
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;
  }

}

