import { Component, OnInit, HostListener } from '@angular/core'
import { ParticlesConfig } from './particles-config'
import { Router, NavigationEnd } from '@angular/router'
import { Sphere } from '../../sphere-list/interface/sphere'
import { SphereService } from '../../sphere-list/service/sphere.service'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../../translate.component'

declare let particlesJS: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  protected isPageMain: boolean = this.router.url === '/'
  protected sphereList: Sphere[] = this.sphereService.sphereList
  public currentLANG: string
  private translation: TranslateClass
  isMobileScreen: boolean = false;
  isMenuOpen: boolean = false;
  ismenuHidden: boolean = true;
  isSubmenuOpen: boolean = false;
  activeSubmenu: number | null = null;
  menuButtonImage: string = '/assets/header/menu_pict.png';
  subMenuArrow: string = '/assets/header/down.png';
  submenuIcons: string[] = [
    'assets/header/up1.png',
    'assets/header/up2.png',
    'assets/header/up3.png'
  ];

  public ngOnInit(): void {
    if (this.isPageMain) {
      this.invokeParticles();
      this.checkWindowSize();
    }
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.checkWindowSize();
  }

  checkWindowSize(): void {
    const windowWidth: number = window.innerWidth;

    if (windowWidth <= 778) {
      this.isMobileScreen = true;
    }
    else {
      this.isMobileScreen = false;
    }

    if (!this.isMobileScreen) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  
  constructor(
    private router: Router,
    private sphereService: SphereService,
    public translate: TranslateService
  ) {
    this.translation = new TranslateClass(translate)
    this.currentLANG = this.translation.getLanguage().toUpperCase()
    this.translation.translateData(this.currentLANG)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkWindowSize();
      }
    });
  }


    

  private invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {})
  }

  public reLoad(lang: string): any {
    this.translation.setLanguage(lang)
    window.location.reload()
  }

  toggleMenu(): void {
    this.ismenuHidden = !this.ismenuHidden;
    setTimeout(() => {
      this.isMenuOpen = !this.isMenuOpen;
      this.menuButtonImage = this.isMenuOpen ? '/assets/header/close-pict.png' : '/assets/header/menu_pict.png';
    }, 1); 
    
  }

  toggleSubmenu(submenuId: number) {
    if (this.activeSubmenu === submenuId) {
      this.activeSubmenu = null;
    } else {
      this.activeSubmenu = submenuId;
    }
  }
}
