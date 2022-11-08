export class Movie {
    constructor(title, year, imageUrl, type) {
        this.title = title;
        this.year = parseInt(year);
        this.imageUrl = imageUrl;
        this.type = type.toUpperCase();
    }
}