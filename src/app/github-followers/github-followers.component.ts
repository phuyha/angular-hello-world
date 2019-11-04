import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // Multiple Observables
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      // this.service.getAll({ id: id, page: page });
      // this.service.getAll()
      //   .subscribe(followers => this.followers = followers);
      return this.service.getAll();
    }))
    .subscribe(followers => this.followers = followers);

/** Query Parameters
  this.route.paramMap
    .subscribe(params => {

    });
  let id = this.route.snapshot.paramMap.get('id');
  this.route.queryParamMap
    .subscribe(params => {

  });
  let page = this.route.snapshot.queryParamMap.get('page');
  this.service.getAll()
    .subscribe(followers => this.followers = followers);
  */
  }
}
