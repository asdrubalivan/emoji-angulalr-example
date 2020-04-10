import { Component, OnInit, Input } from '@angular/core';

const REGEX = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g

function split(text: string, regex: RegExp): string[] {
  let token: RegExpExecArray, index: number, result: string[] = [];
  while (text !== '') {
      regex.lastIndex = 0;
      token = regex.exec(text);
      if (token === null) {
          break;
      }
      index = token.index;
      if (token[0].length === 0) {
          index = 1;
      }
      result.push(text.substr(0, index));
      result.push(token[0]);
      index = index + token[0].length;
      text = text.slice(index);
  }
  result.push(text);
  return result;
}

interface SeparatedElement {
  isEmoji: boolean,
  message: string
}

@Component({
  selector: 'app-emoji-separator',
  templateUrl: './emoji-separator.component.html',
  styleUrls: ['./emoji-separator.component.css']
})
export class EmojiSeparatorComponent {

  @Input() message: string;
  
  constructor() { }

  get elements() : SeparatedElement[] {
    const separated = split(this.message, REGEX);
    return separated.map((token: string) => {
      return {
        isEmoji: REGEX.test(token),
        message: token
      }
    });
  }

}
