import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RickandmortyApiService } from '../../../app/_shared/services/rickandmorty-api.service'
import { Character, CharacterApiResponse } from '../../../app/_shared/interfaces/ ListI.interface'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @ViewChild('value_filter') value_filter: ElementRef | any;

  list_prev: any = [];
  full_list: any[] = [];

  page: string = "https://rickandmortyapi.com/api/character/?page=1";

  constructor(
    public list: RickandmortyApiService
  ) {
  }

  ngOnInit(): void {
    this.getListaPersonajes(this.page)
  }

  getListaPersonajes(page: string) {
    this.list.getPersonajes(page).subscribe((res: any) => {
      this.list_prev = res
      console.log(this.list_prev.info);

    });

  }
  getFilters() {
    let filter = this.value_filter.nativeElement.value;
    console.log(filter);

    this.list.getFilters(filter).subscribe({
      next: (res: any) => {
        this.list_prev = res
        console.log(this.list_prev.info);
      },
      error: (err) => {
        this.list_prev = []
      },
    });
  }



  prev() {
    if (this.list_prev.info.prev) {
      this.getListaPersonajes(this.list_prev.info.prev)
    }
  }
  next() {
    if (this.list_prev.info.next) {
      this.getListaPersonajes(this.list_prev.info.next)
    }
  }

  goTo(num: number) {
    console.log(num);

    this.list.getPages(num).subscribe((res: any) => {
      this.list_prev = res
      console.log(this.list_prev);

    });
  }

}
