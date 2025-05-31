
const pool = require('../../config/db');

module.exports = {
  beautyService: (data, callback) => {
    const { name, videoUrl, thumbnailUrl } = data;
    const query = process.env.BEAUTY_POST_QUERY;

    pool.query(query, [name, videoUrl, thumbnailUrl], (err, result) => {
      if (err) {
        console.error("Query Error:", err);
        return callback(err);
      }
      return callback(null, result);
    });
  },

  getAllBeautyItems: (callback) => {
    const query = process.env.BEAUTY_GET_ALL_QUERY;
    pool.query(query, [], (err, results) => {
      if (err) {
        console.error("Fetch Error:", err);
        return callback(err);
      }
      return callback(null, results);
    });
  },

  getBeautyItemById: (id, callback) => {
    const query = "SELECT * FROM videos WHERE id = ?";
    pool.query(query, [id], (err, results) => {
      if (err) {
        console.error("Fetch by ID Error:", err);
        return callback(err);
      }
      return callback(null, results[0]); // Return the single video object
    });
  },

incrementLike: ({ videourl, name }, callback) => {
  const selectQuery = process.env.LIKE_SELECT_QUERY;  
  const insertQuery = process.env.LIKE_INSERT_QUERY;  
  const updateQuery = process.env.LIKE_UPDATE_QUERY; 

  pool.query(selectQuery, [videourl], (err, results) => {
    if (err) {
      console.error("Select LikeCounts Error:", err);
      return callback(err);
    }

    if (results.length === 0) {
      // Insert new row with likecounts=1 and provided name
      pool.query(insertQuery, [name, videourl], (err, result) => {
        if (err) {
          console.error("Insert Like Error:", err);
          return callback(err);
        }
        return callback(null, { likecounts: 1 });
      });
    } else {
      // Update existing record's likecounts
      pool.query(updateQuery, [videourl], (err, result) => {
        if (err) {
          console.error("Update Like Error:", err);
          return callback(err);
        }
        const newLikeCount = results[0].likecounts + 1;
        return callback(null, { likecounts: newLikeCount });
      });
    }
  });
}
};