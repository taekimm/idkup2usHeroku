import { Idkup2usPage } from './app.po';

describe('idkup2us App', () => {
  let page: Idkup2usPage;

  beforeEach(() => {
    page = new Idkup2usPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
