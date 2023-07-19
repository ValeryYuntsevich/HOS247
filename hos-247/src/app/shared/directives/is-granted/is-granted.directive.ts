import * as core from '@angular/core';

import * as helpers from '@core/helpers';
import * as models from '@core/models';

// https://medium.com/@rjlopezdev/angular-permissions-based-on-roles-part-2-permissions-for-multiple-resources-d35ea97df5b7
// https://medium.com/@rjlopezdev/angular-permissions-based-on-roles-part-1-roles-permissions-and-permission-manager-f3dde1bc82bb

@core.Directive({
  selector: '[appIsGranted]',
})
export class IsGrantedDirective {
  constructor(
    private readonly templateRef: core.TemplateRef<any>,
    private readonly viewContainer: core.ViewContainerRef,
    private readonly permissionManager: helpers.PermissionManagerService,
  ) {}

  @core.Input() set appIsGranted(permission: Array<string>) {
    this.isGranted(
      permission[0] as models.Resource,
      permission[1] as models.PermissionType,
    );
  }

  private isGranted(
    resource: models.Resource,
    permissionType: models.PermissionType,
  ): void {
    if (this.permissionManager.isGranted(resource, permissionType)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

// Example:
// <div *appIsGranted="['PIZZA', 'CREATE']">
//   // This block will only be shown to granted users
// </div>
// <my-component *appIsGranted="['PASTA', 'DELETE']">
//   // This component will only be shown to granted users
// </my-component>
