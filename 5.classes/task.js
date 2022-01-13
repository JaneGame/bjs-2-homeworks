//Задание 1

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state=100;
        this.type = null;
    }

    fix() {
        this.state=this.state*1.5;
    }

    set state(fix){
        if (fix<0){
            this._state = 0;
        }else if (fix>100){
            this._state = 100;
        }else{
            this._state = fix;
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends Magazine{
    
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}


class NovelBook extends Magazine{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Magazine{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Magazine{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задание 2

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(this.state<30){
            this.books=this.books;
        }else{
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        for(let i=0; i<this.books.length; i++){
            if(type==this.name[i]&&type==this.author[i]&&type==this.releaseDate[i]&&type==this.type[i]){
                return [value];
            }else{
                return null;
            }
        }
    }

    giveBookByName(bookName){
        for(let i=0; i<this.books.length; i++){
            if(bookName==this.name){
                delete this.books[i];
                return this.name;
            }else{
                return null;
            }
        }
    }
}

