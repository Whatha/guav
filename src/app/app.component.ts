import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guav';
  description = 'Angular5-Firebase Demo';
 
  itemValue = '';
  items: Observable<any[]>;
  labels='';

  constructor(public db: AngularFireDatabase) {

    this.items = db.list('items').valueChanges();


  db.object('/number')
    .valueChanges()
    .subscribe(res => {
        console.log(res)//should give you the array of percentage. 
        this.description = res;
    });
    db.object('/message')
    .valueChanges()
    .subscribe(res => {
        console.log(res)//should give you the array of percentage. 
        this.title = res;
    });
  }
 
  onSubmit() {
   const items = this.db.list('items');
    this.db.list('/items').push({ contenido: this.itemValue });
  }
}
