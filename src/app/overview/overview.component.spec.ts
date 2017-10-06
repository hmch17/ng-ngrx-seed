import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppOverviewComponent } from './overview.component';
import { UserService } from '../store/user.service';
import { userServiceStub } from '../test/user.service.mock';
import { CookbookService } from '../store/cookbook.service';
import { cookbookServiceStub } from '../test/cookbook.service.mock';

describe('OverviewComponent', () => {
    let component: AppOverviewComponent;
    let fixture: ComponentFixture<AppOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: UserService, useValue: userServiceStub },
                { provide: CookbookService, useValue: cookbookServiceStub }
            ],
            declarations: [ AppOverviewComponent ],
            imports: [ RouterTestingModule, NoopAnimationsModule ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
