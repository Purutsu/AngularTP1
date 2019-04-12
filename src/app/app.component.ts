import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TP1';

  posts = [
    {
      title: 'Premier poste',
      content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      loveIts: 0,
      created_at: 'Wed Oct 30 2018 16:33:22'
    },
    {
      title: 'Deuxième poste',
      content: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      loveIts: 0,
      created_at: 'Wed Oct 30 2018 17:12:22'
    },
    {
      title: 'Dernier poste',
      content: 'ccccccccccccccccccccccccccccccccccccccccccccccccc',
      loveIts: 0,
      created_at: 'Wed Oct 30 2018 18:45:22'
    }
  ];
}
