import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginpostService } from '../loginpost.service';


@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  public showLogin : boolean = false
  public login : boolean = false
  userModel = new User("", "")
  constructor(private _loginpostService: LoginpostService) { }

  ngOnInit(): void {
  }

  changeView(){
    this.showLogin = true
  }

validateForm(){
  if (this.userModel.userName && this.userModel.password){
    this.login = true
  }
}
onSubmit(){
  localStorage.setItem('userDetail', this.userModel.userName)

  this._loginpostService.postUserDetails(this.userModel)
  .subscribe(
    data => console.log("Success!", data),
    
  )
}
}
