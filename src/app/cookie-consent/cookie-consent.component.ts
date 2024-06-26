import { Component } from '@angular/core'

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
})
export class CookieConsentComponent {
  isCookieConsentGiven: boolean =
    localStorage.getItem('cookieConsent') === 'true'

  acceptCookies(): void {
    localStorage.setItem('cookieConsent', 'true')
    this.isCookieConsentGiven = true
  }

  rejectCookies(): void {
    localStorage.setItem('cookieConsent', 'false')
    this.isCookieConsentGiven = true
  }
  aboutCookie(): void {
    localStorage.setItem('cookieConsent', 'false')
    this.isCookieConsentGiven = true
  }
}
