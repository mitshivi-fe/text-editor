import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  @ViewChild('myTextArea') myTextArea!: ElementRef<HTMLTextAreaElement>;
  inputEventTypeAndText: TypeAndText[] = [];
  pasteDetected: boolean = false;
  currentTextAreaTxt: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(e: Event){
    const value = (e.target as HTMLTextAreaElement).value;
  }

  onKeyDown(e: KeyboardEvent) {
    if (this.pasteDetected) {
      e.preventDefault();
      this.pasteDetected = false;
    } else {
      if(e.key.toLocaleLowerCase() === 'backspace') {
        const textarea = this.myTextArea.nativeElement;
        const cursorPos = textarea.selectionStart;
        const text = textarea.value;
        const deletedChar = text.charAt(cursorPos - 1);
        let deletionEvent: TypeAndText = {
          typeOfTxt: 'deletion',
          text: deletedChar
        }
        this.inputEventTypeAndText.push(deletionEvent);
        return;
      }
      const character = e.key;
      let insertionEvent: TypeAndText = {
        typeOfTxt: 'insertion',
        text: e.key
      }
      this.inputEventTypeAndText.push(insertionEvent);
    }
  }

  onPaste(e: ClipboardEvent){
    this.pasteDetected = true;
    console.log('Pasted text:', e.clipboardData?.getData('text/plain'));
    
  }

  setStyle(property: string, value: string) {
    const textarea = this.myTextArea.nativeElement as HTMLTextAreaElement;
    textarea.style[property as any] = value;
  }
}


export interface TypeAndText {
  typeOfTxt: TxtType,
  text: string
}

type TxtType = 'insertion' | 'deletion' | 'replacement' | 'nonTextUpdate';
