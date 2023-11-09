class Book{
	constructor(title,author,year){
		this.title=title;
		this.author=author;
		this.year=year;
	}
	display(){
		console.log(`Book title is : ${this.title}`)
		console.log(`Book author is : ${this.author}`)
		console.log(`Book publication year is : ${this.year}`)
	}
}	
	
    class Ebook extends Book{
		constructor(title,author,year,bookPrize){
			super(title,author,year)
			this.bookPrize=bookPrize;
		}
		display(){
			console.log(`Book title is :${this.title},  Book author is :${this.author},  Book publication year is : ${this.year},  Book price in : ${this.bookPrize}`)
		}
		
	}	
	


let note=new Book("Everest","Abdhul Kalam",2002);
note.display()
let note1=new Ebook("Everest","Abdhul Kalam",2002,299);
note1.display()
