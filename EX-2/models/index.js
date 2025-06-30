import { Sequelize } from 'sequelize';
import AuthorModel from './author.js';
import BookModel from './book.js';

const sequelize = new Sequelize('sqlite::memory:');

const Author = AuthorModel(sequelize);
const Book = BookModel(sequelize);

Author.hasMany(Book);
Book.belongsTo(Author);

export { sequelize, Author, Book };
