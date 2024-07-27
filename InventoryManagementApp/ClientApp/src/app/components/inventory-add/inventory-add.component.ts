import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../models/inventory-item';

@Component({
  selector: 'app-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.css']
})
export class InventoryAddComponent {
  itemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryService,
    private router: Router
  ) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      const newItem: InventoryItem = this.itemForm.value;
      this.inventoryService.addItem(newItem).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}

