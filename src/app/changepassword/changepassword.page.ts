import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ModalController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
data: any;
response: any;
  constructor( 
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private alertService: AlertService) {
    // this.feedback = new Array();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.details;
        console.log(this.data);
        // t his.school = this.data.school;
      }
    });
  }

  ngOnInit() {
  }
  reset(form: NgForm) {
    this.authService.presentLoading();
    console.log(form.value);
    this.authService.reset(form.value.oldpass, form.value.newpassword).subscribe(
      data => {
        this.response = data;
        if ( this.response.response === 'success') {
        this.authService.dismiss();
        this.alertService.presentToast('Password changed successfully...');
        this.navCtrl.navigateRoot('/dashboard');
        } else {
          this.authService.dismiss();
          this.alertService.presentToast('Fail to reset your pass please try again...');
        }
      },
      error => {
        this.authService.dismiss();
        console.log(error);
      },
      () => {
      }
    );
  }

}
