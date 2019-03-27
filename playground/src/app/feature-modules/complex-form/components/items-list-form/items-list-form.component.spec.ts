import { ItemsListFormComponent } from './items-list-form.component';
import { FormArray } from '@angular/forms';

describe('Items list component - Isolated test', () => {
    let component: ItemsListFormComponent;

    beforeEach(() => {
        component = new ItemsListFormComponent();
    });


    it('Should indicate an empty control as valid', () => {
        component.formArray = new FormArray([]);

        expect(component.formArray.invalid).toBe(false);
    });

    it('Should make the control invalid when adding new pristine control to the array', () => {
        component.formArray = new FormArray([]);

        component.onAdd();

        expect(component.formArray.invalid).toBe(true);
    });
});
