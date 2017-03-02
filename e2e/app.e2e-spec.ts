import { ToursPage } from './app.po';

describe('tours App', function() {
  let page: ToursPage;

  beforeEach(() => {
    page = new ToursPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
