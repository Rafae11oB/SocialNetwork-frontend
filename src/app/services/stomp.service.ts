import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';
import * as Stomp from 'stompjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StompService {

  // private connecting = false;
  // private topicQueue: any[] = [];

  // socket = new SockJS(environment.getSocketUrl());
  // stompClient = Stomp.over(this.socket);

  // private socketHeader = {
  //   [environment.tokenHeader]: this.authService.getToken()
  // }

  // constructor(private authService: AuthService) { }

  // subscribe(topic: string, callback: any) {
  //   // If stomp client is currently connecting add the topic to the queue
  //   if(this.connecting) {
  //     this.topicQueue.push({
  //       topic,
  //       callback
  //     });
  //     return;
  //   }

  //   const connected = this.stompClient.connected;
  //   if(connected) {
  //     // Once we are connected set connecting flag to false
  //     this.connecting = false;
  //     this.subscribeToTopic(topic, callback);
  //     return;
  //   }

  //   // If stomp client is not connected connect and subscribe to topic
  //   this.connecting = true;
  //   this.stompClient.connect(this.socketHeader, (): any => {
  //     this.subscribeToTopic(topic, callback);

  //     // Once we are connected loop the queue and subscribe to remaining topics from it
  //     this.topicQueue.forEach((item:any) => {
  //       this.subscribeToTopic(item.topic, item.callback);
  //     })

  //     // Once done empty the queue
  //     this.topicQueue = [];
  //   });
  // }

  // private subscribeToTopic(topic: string, callback: any): void {
  //   this.stompClient.subscribe(topic, (response?:any): any => {
  //       callback(response);
  //   });
// }

}
