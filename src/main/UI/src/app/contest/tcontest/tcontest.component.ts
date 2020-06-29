import { Component, OnInit } from '@angular/core';
import { TypingappService } from '../typingapp.service';
import { R3TargetBinder } from '@angular/compiler';



@Component({
  selector: 'app-tcontest',
  templateUrl: './tcontest.component.html',
  styleUrls: ['./tcontest.component.scss']
})
export class TContestComponent implements OnInit {

  // Declaration Of Class Attributes
  words = [];
  wordsType1 = [];
  wordsType2 = [];
  wordInput: string;
  index: number = 0;
  circleState: boolean;
  iterations: number = 0;




  constructor(private typingapp: TypingappService) { }



  ngOnInit(): void {

  }

   // Words Comparison Function
   compare(word1: string, word2: string) {
    if(word1 === word2) {
      return true;
    } else {
      return false;
    }
  }

  // Get Current Word From Comparison List ( wordsType2 )
  getCurrentWord(index: number) {
    return this.wordsType2[index];
  }

  // Circle Events
    // Change Circle Color Everytime When User Give Some Input
  changeCircleStyle(circleState: any) {
    const circle = document.getElementById('circle');
    if(circleState === true) {
      circle.style.backgroundColor = 'rgb(175, 255, 202)';
      circle.style.transition = 'background-color 0.4s ease-in';
    } else if (circleState === false) {
      circle.style.backgroundColor = 'rgb(255, 175, 202)'
      circle.style.transition = 'background-color 0.4s esee-in';
    }else {
      circle.style.backgroundColor = 'white';
      circle.style.transition = 'background-color 0.4s ease-in';
    }
  }

  // Change Hand Position
  changeHandPosition() {
    const hand = document.querySelector('.circle .hand');
        let clockInterval = setInterval(() => {
          (<HTMLDivElement>hand).style.setProperty('--rotation', (this.iterations/6 * 360).toString());
            if(this.iterations==6){
              clearInterval(clockInterval);
              this.resetHandPosition();
              this.changeCircleStyle('1');
              alert('Game Over !');
              location.replace('http://localhost:8081/typing_contest-0.0.0');
            }
            this.iterations++;
        } , 500);
  }

  // Reset Hand Position
  resetHandPosition() {
    const hand = document.querySelector('.circle .hand');
    (<HTMLDivElement>hand).style.setProperty('--rotation', '0');
    this.iterations = 0;
  }


  // Import List
  onImport(value: number) {
    this.typingapp.getWordsList().subscribe( (response:any) => {
      this.words = response;

      // Depending On Chosen Option Set Values Of Comparison List and Displayed List
      switch (value) {
        case 1:
          this.words.forEach(i => { this.wordsType1[this.words.indexOf(i)] = i.en;});
          this.words.forEach(i => { this.wordsType2[this.words.indexOf(i)] = i.en });
          break;
        case 2:
          this.words.forEach(i => { this.wordsType1[this.words.indexOf(i)] = i.pl });
          this.words.forEach(i => { this.wordsType2[this.words.indexOf(i)] = i.pl });
          break;
        case 3:
          this.words.forEach(i => { this.wordsType1[this.words.indexOf(i)] = i.en });
          this.words.forEach(i => { this.wordsType2[this.words.indexOf(i)] = i.pl });
          break;
        case 4:
          this.words.forEach(i => { this.wordsType1[this.words.indexOf(i)] = i.pl });
          this.words.forEach(i => { this.wordsType2[this.words.indexOf(i)] = i.en });
          break;
      }

    });

  }

  // When A User Starts To Type Something In The Input Field
  onInput(value1: string) {
    this.wordInput = value1;

    if(this.getCurrentWord(this.index).includes(this.wordInput)) {
      this.circleState = true;
      this.changeCircleStyle(this.circleState);
    } else {
      this.circleState = false;
      this.changeCircleStyle(this.circleState);
    }

    if(this.wordInput === this.getCurrentWord(this.index)){
      // Increment Index
      this.index++;
      // Clear field
      (<HTMLInputElement>event.target).value = "";
      this.resetHandPosition();

    }
  }




}
