import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../models/inventory-item';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  items: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(id: number): void {
    this.inventoryService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item.itemID !== id);
    });
  }
}

