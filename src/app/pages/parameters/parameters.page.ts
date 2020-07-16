import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.page.html',
  styleUrls: ['./parameters.page.scss'],
})
export class ParametersPage implements OnInit {

  public buttons = [
    {
      title: 'PARAMETERS.LOCAL',
      url: 'locals',
      icon: 'locate'
    },
    {
      title: 'PARAMETERS.ACTION_TYPE',
      url: 'action-types',
      icon: 'flash'
    },
    {
      title: 'PARAMETERS.REQUEST_TYPE',
      url: 'request-types',
      icon: 'file-tray-full'
    },
    {
      title: 'PARAMETERS.STATUS',
      url: 'statuses',
      icon: 'information-circle'
    },
    {
      title: 'PARAMETERS.MODEL_PRINTER',
      url: 'printer-models',
      icon: 'print'
    },
    {
      title: 'PARAMETERS.USER',
      url: 'users',
      icon: 'person'
    },
    {
      title: 'PARAMETERS.SYSTEM',
      url: 'email-params',
      icon: 'construct'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
