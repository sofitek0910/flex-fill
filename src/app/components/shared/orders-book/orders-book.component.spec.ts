import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersBookComponent } from './orders-book.component';

describe('OrdersBookComponent', () => {
  let component: OrdersBookComponent;
  let fixture: ComponentFixture<OrdersBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
