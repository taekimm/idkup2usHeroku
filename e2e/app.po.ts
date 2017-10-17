import { browser, by, element } from 'protractor';

export class Idkup2usPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
