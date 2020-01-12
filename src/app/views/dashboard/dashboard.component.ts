import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
  }

  goToHome(): void {
    this.router.navigateByUrl('dashboard/home');
  }

  goToAddNote(): void {
    this.router.navigateByUrl('dashboard/add-note');
  }

  goToSettings(): void {
    this.router.navigateByUrl('dashboard/settings/account');
  }

  logout(): void {
    this.logger.debug('logout');
    this.router.navigateByUrl('/');
  }

}
