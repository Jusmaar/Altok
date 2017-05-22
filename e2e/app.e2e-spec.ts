import { AltokPage } from './app.po';

describe('altok App', () => {
  let page: AltokPage;

  beforeEach(() => {
    page = new AltokPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
