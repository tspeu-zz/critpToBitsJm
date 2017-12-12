import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private holdingsProvider: HoldingsProvider) {

  }

  ionViewDidLoad(): void {
    this.holdingsProvider.loadHoldings();
}

  addHolding(): void {
    this.navCtrl.push('AddHoldingPage');
}

  goToCryptonator(): void {
    window.open('https://www.cryptonator.com/api', '_system');
}

  refreshPrices(refresher): void {
    this.holdingsProvider.fetchPrices(refresher);
}

}
