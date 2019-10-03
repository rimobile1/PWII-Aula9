import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'has-comtent',
  templateUrl: './comtent.component.html',
  styleUrls: ['./comtent.component.css']
})
export class ComtentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const options = {
      stringsElement: '#typed-strings',
      strings: ['ETEC Banking', 'Peça a portabilidade hoje mesmo', 'Inovavor, digital e seguro'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };

    const typed = new Typed('.typing-element', options);
  }

}
