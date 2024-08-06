import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar..</h5>
    <input type="text" class="form-control" placeholder="Busqueda.."
      (keyup.enter)="searchTag()"
      #searchBox
    />
  `,
})
export class SearchBoxComponent {

  constructor(private GifsService : GifsService) {}

  @ViewChild('searchBox')
  public searchBox! : ElementRef<HTMLInputElement>

  searchTag() {
    let newTag = this.searchBox.nativeElement.value
    console.log(newTag);
    this.GifsService.searchTag(newTag)
    this.searchBox.nativeElement.value= ''

  }
}
