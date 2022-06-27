import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output()   toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(@Inject(DOCUMENT) private document: any,private router: Router) { }
  elem;

returnUrl='/login'
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
name: any
  ngOnInit(): void {
    this.elem = document.documentElement;
this.name=localStorage.getItem('Name');
  }

  toggleSideBar() {
this.toggleSideBarForMe.emit();

  }
  signOut(){
  localStorage.clear();
  this.router.navigate([this.returnUrl]);
  }
  Color='#f31760'

  toggle(){
    this.Color='black'

    setTimeout(() => {
     this.router.navigate(['/login'])
    }, 500)

  }
}

