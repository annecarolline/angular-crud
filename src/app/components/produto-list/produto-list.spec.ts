import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListComponent } from './produto-list';

describe('ProdutoListComponent', () => {
  let component: ProdutoListComponent;
  let fixture: ComponentFixture<ProdutoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
