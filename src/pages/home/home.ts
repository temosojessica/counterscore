import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

scoreTeamA = 0;
  scoreTeamB = 0;
  constructor(public navCtrl: NavController) {

  }
  onReset(){
    this.scoreTeamA = 0;
    this.scoreTeamB = 0;
}
onClickA(){
  this.scoreTeamA += 3;
  console.log(this.scoreTeamA);

}

onTwoA(){
  this.scoreTeamA += 2;
  console.log(this.scoreTeamA);
}

onThrowA(){
  this.scoreTeamA += 1;
  console.log(this.scoreTeamA);
}
onClickB(){
  this.scoreTeamB += 3;
  console.log(this.scoreTeamB);
}
onTwoB(){
  this.scoreTeamB += 3;
  console.log(this.scoreTeamB);
}
onThrowB(){
  this.scoreTeamB += 3;
  console.log(this.scoreTeamB);
}
}