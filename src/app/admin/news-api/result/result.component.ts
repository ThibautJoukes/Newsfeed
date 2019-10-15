import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { newsApiArticle } from 'src/app/interfaces/newsApiArticle';
import { MatTable, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-admin-newsApi-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor() { }

  @Input() articles: newsApiArticle[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ['select', 'title', 'description', 'author', 'publishedAt'];
  dataSource = new MatTableDataSource<newsApiArticle>(this.articles);
  selection = new SelectionModel<newsApiArticle>(true, this.articles);

  ngOnInit() {
  }

  // Runs when this.articles data has been loaded
  RenderTable() {
    this.articles.map(
      article => {
        if (article.description == null || article.description == undefined) {
          article.description = 'No description...';
        }
        article.publishedAt = article.publishedAt.split('T')[0];
      });
    
    // re-initialize because data has now loaded;
    this.dataSource = new MatTableDataSource<newsApiArticle>(this.articles);
    this.selection = new SelectionModel<newsApiArticle>(true, this.articles);
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    if (this.selection != null) {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: newsApiArticle): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.author + 1}`;
  }
}
