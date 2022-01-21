import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';

import { AccountComponent } from './account.component';
import { SecurityComponent } from './security/security.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SecuritySettings2faComponent } from './security/security-settings2fa/security-settings2fa.component';
import { SecuritySettingsWhitelistComponent } from './security/security-settings-whitelist/security-settings-whitelist.component';
import { WalletAddressFormComponent } from '../shared/wallet-address-form/wallet-address-form.component';
import { SecuritySettingsSessionComponent } from './security/security-settings-session/security-settings-session.component';
import { SecuritySettingsWithdrawalComponent } from './security/security-settings-withdrawal/security-settings-withdrawal.component';
import { NotificationComponent } from './notification/notification.component';
import { IdentifyVerificationComponent } from './identify-verification/identify-verification.component';
import { IdentifyVerificationDetailComponent } from './identify-verification/identify-verification-detail/identify-verification-detail.component';
import { IdentifyVerificationEditComponent } from './identify-verification/identify-verification-edit/identify-verification-edit.component';
import { ThemeComponent } from './theme/theme.component';
import { ChartSettingComponent } from './chart-setting/chart-setting.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { HistoryComponent } from './history/history.component';
import { SupportComponent } from './support/support.component';
import { AssetsComponent } from './assets/assets.component';
import { DepositeComponent } from './deposite/deposite.component';
import { DepositeEditComponent } from './deposite-edit/deposite-edit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { WithdrawEditComponent } from './withdraw-edit/withdraw-edit.component';
import { SharedModule } from '../shared/shared.module';
import { PnlReportComponent } from './pnl-report/pnl-report.component';
import { ClearingDashboardComponent } from './clearing-dashboard/clearing-dashboard.component';

@NgModule({
  declarations: [
    AccountComponent,
    SecurityComponent,
    MyAccountComponent,
    SecuritySettings2faComponent,
    SecuritySettingsWhitelistComponent,
    WalletAddressFormComponent,
    SecuritySettingsSessionComponent,
    SecuritySettingsWithdrawalComponent,
    NotificationComponent,
    IdentifyVerificationComponent,
    IdentifyVerificationDetailComponent,
    IdentifyVerificationEditComponent,
    ThemeComponent,
    ChartSettingComponent,
    AddressBookComponent,
    HistoryComponent,
    SupportComponent,
    AssetsComponent,
    DepositeComponent,
    DepositeEditComponent,
    WithdrawComponent,
    WithdrawEditComponent,
    PnlReportComponent,
    ClearingDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
