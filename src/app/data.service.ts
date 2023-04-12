import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TableData } from './table-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tableData: TableData[] = []; // Data model to represent the table data
  private tableDataSubject = new Subject<TableData[]>(); // Subject to emit and subscribe to table data changes

  updateTableData(tableData: TableData[]) {
    this.tableData = tableData; // Update the table data
    this.tableDataSubject.next(tableData); // Emit the table data to subscribers
  }

  getTableData(): TableData[] {
    return this.tableData; // Return the current table data
  }

  getTableDataObservable() {
    return this.tableDataSubject.asObservable(); // Return an observable to subscribe to table data changes
  }
}
