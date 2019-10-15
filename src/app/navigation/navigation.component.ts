import { Component, OnInit } from '@angular/core';
import { faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  faChevronDownUp = faChevronDown;
  dropdownHidden: boolean = true;

  ngOnInit() {
  }

  toggleAdminDropdown(){
    this.dropdownHidden = !this.dropdownHidden;
    if(this.faChevronDownUp == faChevronDown){
      this.faChevronDownUp = faChevronUp;
    }
    else{
      this.faChevronDownUp = faChevronDown;
    }
  }
}
