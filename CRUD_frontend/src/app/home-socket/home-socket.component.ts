import { Component, OnInit } from '@angular/core';

import * as io from 'socket.io-client';

import { HomeSocketService } from './home-socket.service';


@Component({
  selector: 'app-home-socket',
  templateUrl: './home-socket.component.html',
  styleUrls: ['./home-socket.component.scss']
})
export class HomeSocketComponent implements OnInit {

  add = 0
  update = 0
  del = 0 
 
  username=""
  oldname=""
  newname=""
  all_users = []
  constructor(private HomeSocketService:HomeSocketService) {}

/*  ss()
  {  
  var socket = io.connect('http://localhost:1337');
  socket.on('connect', function(){
    socket.emit('event', { name: 'khore' });

    socket.on('message', function(data){
      console.log(data.msg);
    })
  }); 
  }*/
  
  Add(){
    this.add = 1
    this.update = 0
    this.del = 0 
  }

  del_user(){
    this.add = 0
    this.update = 0
    this.del = 1 

  }
  update_email(){
    this.add = 0
    this.update = 1
    this.del = 0 

  }

  save(){
    
    if(this.update==1){
      var id=0
      for(var i=0;i<this.all_users.length;i++){
        if(this.oldname == this.all_users[i].name){
          id = this.all_users[i].id
        }
      }
      this.HomeSocketService.update(id,this.newname).subscribe((res) => {
        console.log(res)  
      });    
      this.HomeSocketService.getusers().subscribe((res) => {
        console.log(res)
        this.all_users = res
      });

    }
    else{
      if(this.del==1){
        for(var i=0;i<this.all_users.length;i++){
          if(this.username == this.all_users[i].name){
            this.username = this.all_users[i].id
          }
        }
      }
      this.HomeSocketService.add_delete(this.username,this.add,this.del).subscribe((res) => {
        console.log(res)
      }); 
      if(this.del==1){
        alert("Deleted "+this.username)        
      }        

    }

  }
  ngOnInit() {
    this.HomeSocketService.getusers().subscribe((res) => {
      console.log(res)
      this.all_users = res
    });

  }

}
