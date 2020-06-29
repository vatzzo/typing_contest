import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { TypingappService } from '../typingapp.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  words = [];
  wordId : string = "";
  inputEnState: boolean = false;
  inputPlState: boolean = false;

  constructor(private typingapp: TypingappService) { }

  ngOnInit(): void {
  }

   // Import List
  onImport() {
    this.typingapp.getWordsList().subscribe( (response:any) => { this.words = response });
  }

  // Remove Element
  removeElement(e: any, id: number) {
    // Remove Element From UI
    e.target.parentElement.remove();

    // Remove Element From Db
    this.typingapp.deleteWord(id).subscribe();

  }

  // Validate Inputs
  validateEn(value: string) {
    let letters = /^[A-Za-z]+$/;
    const formBtn = document.querySelector(".form-button");
    if(value.match(letters) && value !== "" && value.length > 2) {
      this.inputEnState = true;
    } else {
      this.inputEnState = false;
    }
  }

  validatePl(value: string) {
    let letters = /^[A-Za-z]+$/;
    if(value.match(letters) && value !== "" && value.length > 2) {
      this.inputPlState = true;
    } else {
      this.inputPlState = false;
    }
  }

  // Add Element
  addWord(inputState1 = this.inputEnState, inputState2=this.inputPlState, iden: string = this.wordId) {
    const formBtn = document.querySelector(".form-button");
    const wordEn = document.querySelector(".word-en");
    const wordPl = document.querySelector(".word-pl");
    const form = document.querySelector(".word-form");
    if(inputState1 === true && inputState2 === true) {
      this.inputEnState = false;
      this.inputPlState = false;

      (<HTMLButtonElement>formBtn).style.backgroundColor = '#71ee9b';
      setTimeout(() => { (<HTMLButtonElement>formBtn).style.backgroundColor = '#4a4181'; }, 500);

      // If Everything Is Okay Make An JSON Array
      let Word = {
        id : iden,
        pl: ((<HTMLInputElement>wordPl).value).toString(),
        en: ((<HTMLInputElement>wordEn).value).toString()
      }

      // Use Post Method To Add A New Record
      this.wordId = "";
      (<HTMLInputElement>wordEn).value = "";
      (<HTMLInputElement>wordPl).value = "";
      this.typingapp.addWord(JSON.stringify(Word)).subscribe();

    } else {
      (<HTMLButtonElement>formBtn).style.backgroundColor = 'red';
      setTimeout(() => { (<HTMLButtonElement>formBtn).style.backgroundColor = '#4a4181'; }, 2000);

      // If Something Went Wrong Display A Custom Alert
      let node = document.createElement("p");
      let textnode = document.createTextNode("Both words must have more than 2 characters and contain letters only.");
      node.appendChild(textnode);
      node.style.color = "red";
      node.style.textAlign = "center";
      form.appendChild(node);

      // Remove An Alert After 2 Seconds
      setTimeout(() => { form.removeChild(node) }, 2000);
    }
  }

  //  Put The Words To Be Modified In The Fields
  onLiClick(e: any, id: number) {
    this.typingapp.getWordsList(id.toString()).subscribe( response => {
      let content: any = response;
      const wordEn = document.querySelector(".word-en");
      const wordPl = document.querySelector(".word-pl");
      (<HTMLInputElement>wordEn).value = content.en;
      (<HTMLInputElement>wordPl).value = content.pl;
      this.wordId = content.id;
    } )
  }
}
