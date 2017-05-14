var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = "mongodb://cph-cs241:cjs192@ds017514.mlab.com:17514/cjs_db"


function setURL(newURL) {
  url = newURL
}

function getBooks(callback) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err)
    assert.ok(db != null)

    db.collection("books").find({}).toArray(function (err, data) {
      assert.equal(null, err)
      var books = data
      callback(books)
      db.close()
    })
  })
}

function addBook(book, callback) {
  console.log(book)
  MongoClient.connect(url, function (err, db) {
      var collection = db.collection("books")
      collection.insert(book, function (err, data) {
        assert.equal(null, err)
        callback(data)
      })
    })


}

function deleteBook(bookId, callback) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err)
    assert.ok(db != null)

    db.collection("books").deleteOne({ _id: bookId }, function (err, data) {
      assert.equal(null, err)
      var response = data
      callback(response)
    })
  })
}

function updateBook(book, callback) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err)
    assert.ok(db != null)
    var options = {
      returnOriginal: false,
      upsert: true
    }

    db.collection("books").findOneAndReplace({ _id: book.id },
      { $set: { "_id": book.id, "title": book.title, "info": book.info, "moreInfo": book.moreInfo } },
      options,
      function (err, data) {
        assert.equal(null, err)
        var updatedBook = data.value
        callback(updatedBook)
      })
  })
}

var crud = {
  getBooks: getBooks,
  addBook: addBook,
  deleteBook: deleteBook,
  updateBook: updateBook,
  setURL: setURL
}

module.exports = crud