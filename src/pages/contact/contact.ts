import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { NavController } from 'ionic-angular';
import { AddContactPage } from '../add-contact/add-contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contactList: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public _af: AngularFire) {
    this.contactList = _af.database.list('/contacts');
    console.log(this.contactList);
  }

  addContact() {
    this.navCtrl.push(AddContactPage);
  }

  editContact(contact) {
    console.log(contact);
    this.navCtrl.push(AddContactPage, {
      key: contact.$key,
      name: contact.name,
      address: contact.address,
      phone: contact.phone,
      city: contact.city
    });
  }

  deleteContact(contact) {
    this.contactList.remove(contact);
  }


}
