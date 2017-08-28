
export class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ?
        process.env.dbURI : "mongodb://heroku_h6cgnkll:ctdf9di5toalb9cedtm10h8p3c@ds161493.mlab.com:61493/heroku_h6cgnkll"
}