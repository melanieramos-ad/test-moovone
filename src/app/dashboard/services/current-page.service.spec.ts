import { CurrentPageService } from './current-page.service';

describe('CurrentPageService', () => {
  let service: CurrentPageService;
  beforeEach(() => service = new CurrentPageService());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set page', () => {
    service.setPage(2);
    expect(service.currentPage).toEqual(2);
  });

  it('should not go below 1', () => {
    service.setPage(0);
    expect(service.currentPage).toEqual(1);
  });

});
