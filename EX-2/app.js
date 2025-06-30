import { sequelize, Author, Book } from './models/index.js';

(async () => {
    await sequelize.sync();

    const [ronan, kim, hok] = await Promise.all([
        Author.create({ name: "Ronan The Best", birthYear: 1990 }),
        Author.create({ name: "Kim Ang", birthYear: 1995 }),
        Author.create({ name: "Hok Tim", birthYear: 2015 }),
    ]);

    await ronan.createBook({
        title: 'The Warrior Path',
        publicationYear: 2015,
        pages: 190,
    });
    await ronan.createBook({
        title: 'The Legend',
        publicationYear: 2017,
        pages: 200,
    });
    await kim.createBook({
        title: 'Peaceful Rain',
        publicationYear: 2014,
        pages: 168,
    });
    await kim.createBook({
        title: 'Time Machine',
        publicationYear: 2018,
        pages: 500,
    });
    await hok.createBook({
        title: 'Dr Stone',
        publicationYear: 2017,
        pages: 305,
    });
    await hok.createBook({
        title: 'Zero To One',
        publicationYear: 2017,
        pages: 100,
    });
    
    const allAuthors = await Author.findAll({ include: Book });
    console.log(JSON.stringify(allAuthors, null, 2));

    await sequelize.close();
})();
