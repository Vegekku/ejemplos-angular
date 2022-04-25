import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-cv',
  templateUrl: './preview-cv.component.html',
  styleUrls: ['./preview-cv.component.css']
})
export class PreviewCvComponent implements OnInit {

  @Input() name: string = ''
  @Input() surname: string = ''
  @Input() email: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
