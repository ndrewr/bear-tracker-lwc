import { LightningElement, wire } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';

import getAllBears from '@salesforce/apex/BearController.getAllBears';

export default class BearList extends LightningElement {
  @wire(getAllBears) bears;
  appResources = {
    bearSilhouette: ursusResources + '/img/standing-bear-silhouette.png',
  }
}

// "imperative Apex" implementation below
// import { LightningElement, track } from 'lwc';
// import ursusResources from '@salesforce/resourceUrl/ursus_park';
// // BearController.getAllBears() Apex method
// import getAllBears from '@salesforce/apex/BearController.getAllBears';

// export default class BearList extends LightningElement {

//   @track bears;
//   @track error;

//   appResources = {
//     bearSilhouette: ursusResources + '/img/standing-bear-silhouette.png',
//   };

//   connectedCallback() {
//     this.loadBears();
//   }

//   loadBears() {
//     getAllBears()
//       .then(result => {
//         this.bears = result;
//       })
//       .catch(error => {
//         this.error = error;
//       });
//   }
// }