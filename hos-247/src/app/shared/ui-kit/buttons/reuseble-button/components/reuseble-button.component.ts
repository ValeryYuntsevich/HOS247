import * as core from '@angular/core';

import { TButton } from '@core/models';

@core.Component({
  selector: 'app-reuseble-button',
  templateUrl: './reuseble-button.component.html',
  changeDetection: core.ChangeDetectionStrategy.OnPush,
})
export class ReusebleButtonComponent {
  @core.Input() public params: TButton;
  @core.Input() public isDisabled = false;

  @core.Output() public click = new core.EventEmitter<string>();

  public onImgClick(): void {
    this.click.emit('');
  }

  public onTextClick(): void {
    this.click.emit('');
  }
}
// Example:
// textBtnConfig = {
//   styles: {
//     position: 'relative',
//     width: '150px',
//     height: '60px',
//     backgroundColor: '#f92672',
//     color: '#fff',
//     fontFamily: 'sans-serif',
//     fontSize: '20px',
//     borderRadius: '10px',
//     marginTop: '30px'
//   },
//   text: 'Click Here'
// };

// imgBtnConfig = {
//   styles: {
//     position: 'relative',
//     width: '100px',
//     height: '100px'
//   },
//   src: './assets/conversation.png'
// };
