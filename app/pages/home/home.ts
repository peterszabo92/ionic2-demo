import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GithubService} from '../../services/github';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [GithubService]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(private github: GithubService) {

  }

  getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }
}
