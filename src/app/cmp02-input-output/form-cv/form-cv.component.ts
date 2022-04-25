import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type EventForm = {
  key: string,
  value: string
}

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {

  @Input() name: string = ''
  @Input() surname: string = ''
  @Input() email: string = ''

  @Output() dataChanged = new EventEmitter<EventForm>()

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event: any) {
    const myEvent: EventForm = {
      key: event.target.name,
      value: event.target.value
    }
    this.dataChanged.emit(myEvent)
  }

}
