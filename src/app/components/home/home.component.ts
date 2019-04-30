import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'discussionOnline';

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
  ];

  public isPaused = false;

  public presentors = [
    {presentorName: 'אור בדיחי', title: 'שדרוג של כל כיפות ברדד', time: 10},
    {presentorName: 'שיר בדיחי', title: 'עד מתי ספמט 16', time: 10.1},
    {presentorName: 'דניאל טלאור מוזס', title: 'עד מתיייי', time: 60}
  ];
  public presentorsCopy = [...this.presentors];

  public currentPresentor = {presentorName: '', title: '', time: 0};


  public nextDiscussionName = 'דיון על עד מתי';
  public nextDiscussionTime = '14:20';

  constructor(){
  }

  ngOnInit(){
    this.currentPresentor = this.presentorsCopy.shift();
  }

  // Pass to next presentor when the timer finish 
  onFinished(){
    if(this.presentorsCopy.length == 0) return;

    this.currentPresentor = this.presentorsCopy.shift();
  }

  // Pass to next presentor when the client clicks 
  nextPresentor(){
    let nextPresentorIndex = this.presentors.indexOf(this.currentPresentor) + 1;

    if(nextPresentorIndex != this.presentors.length){
       this.currentPresentor = this.presentors[nextPresentorIndex];
       this.presentorsCopy.shift();
      }
  }

  // Pass to previous presentor when the client clicks 
  previousPresentor(){
    let preveiousPresentorIndex = this.presentors.indexOf(this.currentPresentor) - 1;

    if(preveiousPresentorIndex >= 0){
      this.presentorsCopy.unshift(this.currentPresentor);
      this.currentPresentor = this.presentors[preveiousPresentorIndex];
    }
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  // }

}
