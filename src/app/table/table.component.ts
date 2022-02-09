import {Component, Input} from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})
export class TableComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() genre: string = '';
  @Input() description: string = '';
  @Input() isbn: string = '';
  @Input() image: string = '';
  @Input() published: string = '';
  @Input() publisher: string = '';
}
