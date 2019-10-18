import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  faChevronDownUp = faChevronDown;
  hamburger = faBars;
  dropdownHidden: boolean = false;

  ngOnInit() {
  }


  toggleNavigation() {
    if (document.getElementById("collapse-nav").className.indexOf("collapse") == -1) {
      document.getElementById("collapse-nav").classList.add("collapse");
    }
    else {
      document.getElementById("collapse-nav").classList.remove("collapse");
    }
  }

  toggleAdminDropdown() {
    this.dropdownHidden = !this.dropdownHidden;
    this.faChevronDownUp = (this.faChevronDownUp == faChevronDown) ? faChevronUp : faChevronDown;

    if(this.dropdownHidden || document.getElementById("admin-sub").className.indexOf("collapseInstant") == -1){
      document.getElementById("admin-sub").classList.add("collapseInstant");
    }
    else{
      document.getElementById("admin-sub").classList.remove("collapseInstant");
    }
  }
}
