import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// using this imported field reference over a hard-coded string helps referential integrity
import SUPERVISOR_FIELD from '@salesforce/schema/Bear__c.Supervisor__c';

const bearFields = [SUPERVISOR_FIELD];

export default class BearSupervisor extends LightningElement {
  @api recordId; // Bear id
  @wire(getRecord, { recordId: '$recordId', fields: bearFields })
  bear;
  get supervisorId() {
    return getFieldValue(this.bear.data, SUPERVISOR_FIELD);
  }
}