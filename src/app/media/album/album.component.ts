import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../../translate.component'
import { MediaService } from '../service/media.service'
import { Router } from '@angular/router'
import { Photo } from '../interface/photo'
import { AlbumList } from '../mock/media-mock'
import { Fancybox } from '@fancyapps/ui'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: [
    './album.component.scss',
    '../../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css',
  ],
})
export class AlbumComponent {
  private mediaService: MediaService

  private albumList: AlbumList
  public photoList: Photo[]

  public folderPath: string
  public albumName: string

  constructor(
    public translate: TranslateService,
    private router: Router
  ) {
    this.albumList = new AlbumList(translate)
    //получаем имя альбома (имя папки) из url
    this.folderPath = this.albumList.getAlbumPath(router.url)
    //получаем полное имя альбома 
    this.albumName = this.albumList.getFullName(this.folderPath)
    this.mediaService = new MediaService(translate)
    //получаем список фото
    this.photoList = this.mediaService.getPhotoList(this.folderPath)
    Fancybox.bind('[data-fancybox]', {})
  }

}
