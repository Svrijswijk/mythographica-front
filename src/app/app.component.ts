import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';

import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private connectionService: ConnectionService, 
    private store: Store<any>
  ){}

  ngOnInit() {
    this.connectionService.getNodes();
    this.connectionService.getLinks();

    this.store.select('graph').pluck('nodes').subscribe(nodes => {
			console.log(nodes)
    });
    
    this.store.select('graph').pluck('links').subscribe(links => {
			console.log(links)
		});
  }
}
