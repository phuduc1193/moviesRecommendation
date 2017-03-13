import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  pageTitle:string = 'Movies Recommendation';
  pageAuthor:string = 'Duc Truong';

  formatDate (d: Date) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
  }
}
