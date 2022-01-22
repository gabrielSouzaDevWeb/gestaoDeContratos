import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CadastroPrestadorRead2DataSource, CadastroPrestadorRead2Item } from './cadastro-prestador-read2-datasource';

@Component({
  selector: 'app-cadastro-prestador-read2',
  templateUrl: './cadastro-prestador-read2.component.html',
  styleUrls: ['./cadastro-prestador-read2.component.css']
})
export class CadastroPrestadorRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CadastroPrestadorRead2Item>;
  dataSource: CadastroPrestadorRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new CadastroPrestadorRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
