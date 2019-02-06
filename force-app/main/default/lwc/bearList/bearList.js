import { NavigationMixin } from 'lightning/navigation';
import { loadStyle } from 'lightning/platformResourceLoader';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
import { LightningElement, track, wire } from 'lwc';
/** BearController.searchBears(searchTerm) Apex method */
import searchBears from '@salesforce/apex/BearController.searchBears';
export default class BearListNav extends NavigationMixin(LightningElement) {
	@track searchTerm = '';
	@wire(searchBears, {searchTerm: '$searchTerm'})
	bears;
	connectedCallback() {
		loadStyle(this, ursusResources + '/style.css');
	}
	handleSearchTermChange(event) {
		// Debouncing this method: do not update the reactive property as
		// long as this function is being called within a delay of 300 ms.
		// This is to avoid a very large number of Apex method calls.
		window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value;
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		this.delayTimeout = setTimeout(() => {
			this.searchTerm = searchTerm;
		}, 300);
	}
	get hasResults() {
		return (this.bears.data.length > 0);
	}
	handleBearView(event) {
		// Navigate to bear record page
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: event.target.bear.Id,
				objectApiName: 'Bear__c',
				actionName: 'view',
			},
		});
	}
}


//
// One-line data loading with "wire" implementation below
//
// import { LightningElement, wire } from 'lwc';
// import ursusResources from '@salesforce/resourceUrl/ursus_park';

// import getAllBears from '@salesforce/apex/BearController.getAllBears';

// export default class BearList extends LightningElement {
//   @wire(getAllBears) bears;
//   appResources = {
//     bearSilhouette: ursusResources + '/img/standing-bear-silhouette.png',
//   }
// }

//
// "imperative Apex" implementation below
//
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