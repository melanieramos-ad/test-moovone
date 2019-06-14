import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

  @Input() user: User;

  constructor() {}

}
