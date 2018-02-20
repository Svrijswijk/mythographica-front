import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Node } from './../domain/Node';
import { Link } from './../domain/Link';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { ADD_NODES, ADD_LINKS } from '../state/graph.actions';

@Injectable()
export class ConnectionService {
  
  private apiUrl = "http://localhost:8080/api"

  constructor(private http: HttpClient, private store: Store<any>) { }

  getNodes = () => {
    this.http.get(this.apiUrl + "/node")
    .map(res => res as Node[])
    .subscribe(nodes => {
      this.store.dispatch({
        type: ADD_NODES,
        payload: nodes
      });
    });
  }

  getLinks = () => {
    this.http.get(this.apiUrl + "/connection")
    .map(res => res as Link[])
    .subscribe(links => {
      this.store.dispatch({
        type: ADD_LINKS,
        payload: links
      });
    });
  }

  // getNode = (id) => {
  //   return this.http.get(this.apiUrl + "/node/" + id);
  // }

  // getNodeConnections = (nodeNumber) => {
  //   return this.http.get(this.apiUrl + "/connection/both/" + nodeNumber);
  // }

  // postNode(node) {
  //   console.log(node);
  //   return this.http.post(this.apiUrl + "/node", node)
  //     .subscribe(
  //     res => {
  //       console.log(res);
  //     },
  //     err => {
  //       console.log("Error occured");
  //     });
  // }

  // getConnections = () => {
  //   return this.http.get(this.apiUrl + "/connection");
  // }
}
