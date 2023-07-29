import { Component } from '@angular/core';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-foot-bar',
  templateUrl: './foot-bar.component.html',
  styleUrls: ['./foot-bar.component.css'],
})
export class FootBarComponent {
  faTwitter = faTwitter;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
