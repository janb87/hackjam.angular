import { Component, OnInit } from '@angular/core';
import { Book, mockBooks } from './mocks/books';
import { ICategory, categories } from './mocks/categories';

@Component({
  selector: 'bookstore',
  // template: ``,
  templateUrl: '../app/app.template.html'
})
export class AppComponent implements OnInit {
  books: Book[];
  categories: ICategory[];
  navClosed: Boolean = true;
  searchQuery: string = "";
  private selectedCategory: ICategory

  ngOnInit(): void {
    this.books = mockBooks;
    this.categories = categories;
    // Not that clean as we make an assumption that the first item is the default one
    this.selectedCategory = categories[0];
  }

  clicked(book: Book) {
    console.log('Will be implemented in the next section', book);
  }

  onCategorySelected(category: ICategory) {
    this.categories = categories.map(c => {
      c.selected = category.name === c.name;
      return c;
    });

    this.selectedCategory = category;
    this.books = this.filterBooks();
  }

  search() {
    this.books = this.filterBooks();
  }

  toggleSideBar() {
    this.navClosed = !this.navClosed;
  }

  private filterBooks(): Book[] {
    let regex = new RegExp(`.*${this.searchQuery.toLowerCase().trim()}.*`, 'gi');
    const category = this.selectedCategory;

    return mockBooks.filter(book => {
      return !!book.title.match(regex) && (category.name === "All" || book.category === category.name);
    });
  }
}
