/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

const expect = require("chai").expect;
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const dbName = "library";
const colName = "books";

module.exports = app => {
  app
    .route("/api/books")

    // Get all books with comments consolidated
    .get(async (req, res) => {
      const client = new MongoClient(process.env.DB, {
        useUnifiedTopology: true
      });
      try {
        await client.connect();
        const col = client.db(dbName).collection(colName);

        const books = await col.find({}, { sort: [["title", 1]] }).toArray();

        res.json(
          books.map(book => {
            return {
              title: book.title,
              _id: book._id,
              commentcount: book.comments.length
            };
          })
        );
      } catch (e) {
        console.log(e);
        res.send("Database error");
      }

      client.close();
    })

    // Add new book
    .post(async (req, res) => {
      if (!req.body.title) {
        return res.send("No title given");
      }

      const client = new MongoClient(process.env.DB, {
        useUnifiedTopology: true
      });
      try {
        await client.connect();
        const col = client.db(dbName).collection(colName);

        const result = await col.insertOne({
          title: req.body.title,
          comments: []
        });

        res.json({
          title: req.body.title,
          _id: result.insertedId
        });
      } catch (e) {
        console.log(e);
        res.send("Database error");
      }

      client.close();
    })

    // Delete all books
    .delete(async (req, res) => {
      const client = new MongoClient(process.env.DB, {
        useUnifiedTopology: true
      });
      try {
        await client.connect();
        const col = client.db(dbName).collection(colName);

        await col.deleteMany({});

        res.send("delete successful");
      } catch (e) {
        console.log(e);
        res.send("Database error");
      }

      client.close();
    });

  app
    .route("/api/books/:id")

    // Get book by ID
    .get(async (req, res) => {
      const client = new MongoClient(process.env.DB, {
        useUnifiedTopology: true
      });
      try {
        await client.connect();
        const col = client.db(dbName).collection(colName);

        const book = await col.findOne({ _id: new ObjectId(req.params.id) });

        res.json({
          title: book.title,
          _id: book._id,
          comments: book.comments
        });
      } catch (e) {
        console.log(e);
        res.send("no book exists");
      }

      client.close();
    })

    // Add new comment to book by ID
    .post(async (req, res) => {
      if (!req.body.comment) {
        return res.send("No comment provided");
      }

      const client = new MongoClient(process.env.DB, {
        useUnifiedTopology: true
      });
      try {
        await client.connect();
        const col = client.db(dbName).collection(colName);

        const result = await col.findOneAndUpdate(
          { _id: new ObjectId(req.params.id) },
          { $push: { comments: req.body.comment } },
          { returnOriginal: false }
        );

        res.json({
          title: result.value.title,
          _id: result.value._id,
          comments: result.value.comments
        });
      } catch (e) {
        console.log(e);
        res.send("no book exists");
      }

      client.close();
    })

    // Delete book by ID
    .delete(async (req, res) => {
      const client = new MongoClient(process.env.DB, {
        useUnifiedTopology: true
      });
      try {
        await client.connect();
        const col = client.db(dbName).collection(colName);

        const result = await col.deleteOne({
          _id: new ObjectId(req.params.id)
        });
        if (result.deletedCount === 1) {
          res.send("delete successful");
        } else {
          res.send("no book exists");
        }
      } catch (e) {
        console.log(e);
        res.send("no book exists");
      }

      client.close();
    });
};
