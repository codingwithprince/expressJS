import connectMongo from "./db/connect.js";
import { insertDoc, getAllDoc, getAllDocSpecified, getSingleDoc, getSingleDocSpecified, getDocByField,
    getDocFieldBySpecifiedField, getLimitedDoc, getSkipDocument , getDocCount,
    getSortDoc , mixedDoc, compDoc , logDoc} from "./model/Student.js";
const db_url = 'mongodb://127.0.0.1:27017'


connectMongo(db_url)
// insertDoc('tanha', 15)


// getAllDoc()
// getAllDocSpecified()
// getSingleDoc()
// getSingleDocSpecified()
// getDocByField()
// getDocFieldBySpecifiedField()
// getLimitedDoc()
// getSkipDocument()
// getDocCount()
// getSortDoc()
// mixedDoc()
// compDoc()
logDoc()