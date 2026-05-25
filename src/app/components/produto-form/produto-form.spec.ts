import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFormComponent } from './produto-form';

describe('ProdutoFormComponent', () => {
  let component: ProdutoFormComponent;
  let fixture: ComponentFixture<ProdutoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
