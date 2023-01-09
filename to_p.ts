// Angular 8.x​​​​​​‌​​‌‌‌​​‌‌‌​​​​‌‌‌‌​​‌​‌‌ code
import { Component, NgModule, Injectable, Inject, forwardRef } from '@angular/core';


// Do not modify the service as validation tests will not pass
@Injectable({ providedIn: 'root' })
export class AccountingService{
  private accountsWithBalance: Map<string, number> = new Map();

  public async createAccount(accountID: string): Promise<void> {
    if (this.accountsWithBalance.has(accountID)){
      throw Error("ACCOUNT_EXISTS");
    }
    this.accountsWithBalance.set(accountID, 0);
  }

  public async topUp(accountID: string, amount: number): Promise<number>{
    if (!this.accountsWithBalance.has(accountID)){
      throw Error("ACCOUNT_DOES_NOT_EXIST");
    }
    this.accountsWithBalance.set(accountID, this.accountsWithBalance.get(accountID)+ amount);
    return this.accountsWithBalance.get(accountID);
  } 
}

// Implement the component here
@Component({
  selector:'account-component',
  template: `
  <div id="message">{{message}}</div>
  <input  id='createAccountInput' (input)="value = $event.target.value"/>
  <button id='createAccountButton' (click)="create()">Create</button>

  <input id='topupAccountInput' (input)="amount = $event.target.value"/>
  <button id='topupAccountButton' (click)="topUp()">Add</button>
  `,
})
export class AccountComponent {
  constructor(private _acs:AccountingService){
  }
  value : string ="Example";
  message : string ="Example";
  amount : number =0
  create(){
    this._acs.createAccount(this.value).then((res)=>{
      this.message = `Successfully added account`
    }).catch((err)=>{
      this.message = err
      console.log(`Error message ${err} `)
    })
  }

  topUp(){
    this.message = `Topup with ${this.amount}`
    this._acs.topUp(this.value,Number(this.amount)).then((res)=>{
      this.message = `Current balance: ${res}`
    }).catch((err)=>{
      this.message = err
      console.log(`Error message ${err} `)
    })
  }

}

// #region Preview
@Component({
    template: `<account-component></account-component>`
})
export class PreviewComponent { }
// #endregion Preview

// #region Module declaration - Do not Change
@NgModule({
    declarations: [PreviewComponent, AccountComponent],
    entryComponents: [PreviewComponent]
})
export class PreviewModule { }
// #endregion Module declaration