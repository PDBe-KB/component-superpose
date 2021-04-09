import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperposeComponent } from './superpose.component';
import {MatDialog} from '@angular/material';

const MOCKDATA = {
  length: 10,
  inactive_color: 'white',
  active_color: 'black',
  start_index: 0,
  main_label: 'foo',
  sub_label: 'foo',
  gallery_items: [
    {
      observed: [
        {
          unp_start: 1,
          unp_end: 5
        }
      ],
      image_url: '',
      image_alt: '',
      label: '',
      start: 1,
      end: 10,
      target_url: '',
      main_id: 'main_id',
      sub_id: 'sub_id',
      opt_id: 'opt_id',
      coverage: 0
    }
  ]
};

describe('SuperposeComponent', () => {
  let component: SuperposeComponent;
  let fixture: ComponentFixture<SuperposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperposeComponent ],
      providers: [
        {provide: MatDialog, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openMolstarDialog() should work', () => {
    // Set parameters for opening a Mol* dialog

    const expected = {
      entryList: [
        {
          superposition: true,
          accession: 'P0DTD1',
          superpositionParams: { segment: 5 }
        }
      ],
      current: 0
    };
    component.dialog.open = function () {
      return null;
    };
    component.superposeModalData = {accession: 'P0DTD1', superposition: true, superpositionParams: { segment: 5 }};
    expect(component.openMolstarDialog()).toEqual(expected);

  });
});
