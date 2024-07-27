import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../models/inventory-item';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {
  itemForm: FormGroup;
  itemId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private inventoryService: InventoryService,
    private router: Router
  ) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.itemId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inventoryService.getItem(this.itemId).subscribe(item => {
      this.itemForm.patchValue(item);
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      const updatedItem: InventoryItem = this.itemForm.value;
      this.inventoryService.updateItem(this.itemId, updatedItem).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}

