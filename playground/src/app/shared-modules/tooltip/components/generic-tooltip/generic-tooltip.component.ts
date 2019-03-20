import { Component, OnInit, Input } from '@angular/core';
import { TooltipContainerStyle } from '../../contracts/tooltip-container-style';

@Component({
  selector: 'pg-generic-tooltip',
  templateUrl: './generic-tooltip.component.html',
  styleUrls: ['./generic-tooltip.component.scss']
})
export class GenericTooltipComponent implements OnInit {

  @Input()
  tooltipContainerStyle: TooltipContainerStyle;

  constructor() { }

  ngOnInit() {
  }

}
