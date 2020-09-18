import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { BoardStateSettings } from './board-settings.state';


describe('Board actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([BoardStateSettings])]
    }).compileComponents();
    store = TestBed.inject(Store);
  }));
});
