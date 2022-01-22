import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IvaFormGroup } from 'src/app/classes/iva-forms-group';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.scss'],
  animations: [
    trigger('galleryItems', [
      transition('* => *', [
        query(':leave', [
          stagger(
            0, [
              animate('0s .3s cubic-bezier(.17,.67,.44,1.01)', style({
                opacity: 0,
                transform: 'translateX(4rem)',
              }))
            ]
          )
        ], {optional: true}),
        query(':enter', [
          style({
            transform: 'translateX(-4rem)',
            opacity: 0
          }),
          stagger(300, [
            animate('.4s .4s cubic-bezier(.17,.67,.44,1.01)', style({
              transform: 'translateX(0rem)',
              opacity: 1
            }))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class FormgroupComponent implements OnInit {
  @Input() formGroup:IvaFormGroup;
  constructor() { }

  ngOnInit(): void {

  }


}
