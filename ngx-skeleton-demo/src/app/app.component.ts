import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-skeleton-demo-app';

  dataList = new Array<IData>();

  loadItems() {
    this.dataList = [];
    // mock server request
    setTimeout(() => {
      this.dataList = [{
        id: 1,
        title: 'qui dignissimos debitis',
        body: 'Ut perferendis delectus que error vel nemo. Quam deserunt.'
      }, {
        id: 2,
        title: 'numquam voluptas culpa',
        body: ' Porro sed consequuntur porro ipsum harum. Dignissimos qui officiis.'
      }, {
        id: 3,
        title: 'repudiandae molestiae illum',
        body: 'Vel eveniet accusamus reprehenderit dolor. Vel qui porro ex quidem.'
      }, {
        id: 4,
        title: 'nobis id repellat',
        body: 'Quam itaque recusandae. Autem nostrum aut nemo alias eos dicta autem .'
      }, {
        id: 5,
        title: 'assumenda voluptates voluptatibus',
        body: 'Omnis exercitationem est facilis minima molestiae laudantium.'
      }];
    }, 2000);
  }

  generateFake(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }
}

export interface IData {
  id: number;
  title: string;
  body: string;
}