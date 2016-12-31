import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html'
})
export class AddContactPage {

  contactList: FirebaseListObservable<any>;
  contact = {
    id: '',
    name: '',
    address: '',
    phone: '',
    city: ''
  };
  constructor(public navCtrl: NavController, public _af: AngularFire, public params: NavParams) {
    this.contactList = _af.database.list('/contacts');
    this.contact.id = this.params.get('key');
    this.contact.name = this.params.get('name');
    this.contact.address = this.params.get('address');
    this.contact.phone = this.params.get('phone');
    this.contact.city = this.params.get('city');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }

  addContact(id, name, address, phone, city) {
    if (id) {
      this.contactList.update(id, {
        name: name,
        address: address,
        phone: phone,
        city: city
      }).then(newContact => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    } else {
      this.contactList.push({
        name: name,
        address: address,
        phone: phone,
        city: city
      }).then(newContact => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    }
  }

}
