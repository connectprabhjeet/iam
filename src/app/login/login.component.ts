import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  Optional,
  PLATFORM_ID,
} from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { COMPONENT_DATA } from 'server/utils/renderer/renderer.constants';
import { COMPONENT_STATE } from '../app.constants';

const STATE = COMPONENT_STATE<any>();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /**
   * Handle state transfer
   */
  private handleStateTransfer = async () => {
    if (isPlatformBrowser(this.platformId)) {
      //get message from transferState if browser side
      this.componentData = this.transferState.get(STATE, 'defaultMessageValue');
    } //server side: get provided message and store in in transfer state
    else {
      this.transferState.set(STATE, this.componentData);
    }
  };

  ngOnInit(): void {
    this.handleStateTransfer();
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional()
    @Inject(COMPONENT_DATA)
    public componentData: any,
    private transferState: TransferState
  ) {}
}
