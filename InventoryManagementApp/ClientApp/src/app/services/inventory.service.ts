import { Injectable } from 'angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvenoryItem } from '../models/inventory-item';

@Injectable({
  provideIn: 'root'
})
export class InventoryService {
  private apiURL = 'https://localhost:5001/api/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.apiURL);
  }
  getItem(id: number); Observable <InventoryItem>{
    return this.http.get<InventoryItem>(`${ this.apiURL } / { id }`);
  }
  addItem(item: InventoryItem): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(this.apiURL, item);
  }
  updateItem(item: InventoryItem): Observable<void> {
    return this.http.put<void>(`${ this.apiUrl } / ${ item.itemID }`, item);
  }
  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
