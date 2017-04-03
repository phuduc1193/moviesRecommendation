import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-subscriber',
  template: `<section class="weekly-subscriber">
    <div class="subscriber-wrapper text-center">
      <h2>Subcribe for Weekly Movie Ratings &amp; Updates.</h2>
      <form action="" class="form-subscription">
        <input type="text" placeholder="Your Name">
        <input type="email" placeholder="Email Address">
        <button name="button" class="btn btn-primary">Subcribe</button>
      </form>
    </div>
  </section>`
})
export class WeeklySubscriberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
