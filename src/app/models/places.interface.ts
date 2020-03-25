export interface Places {
    name: string;
    idsCss: Array<string>;
    info: string;
    location: {Lat: Number, Lon: Number};
    questions : [{
        question: string,
        incorrect: Array<string>,
        correct: string
    }];
}