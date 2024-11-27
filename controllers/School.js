const db = require("../db");
const { calculateDistance } = require("../utils/calculateDistance");

//
exports.addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    // Validate inputs
    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      });
    }

    // type checking
    if (typeof latitude !== "number" || typeof longitude !== "number") {
      return res.status(400).json({
        success: false,
        error: "Latitude and Longitude must be numbers",
      });
    }

    // Writing Query for inserting values in school table
    const query = `INSERT INTO school (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;

    // Inserting operation
    db.query(query, [name, address, latitude, longitude], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          error: "Failed to add school",
        });
      }

      res.status(201).json({
        success: true,
        message: "School added successfully",
        schoolId: results.insertId,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.getSchools = async (req, res) => {
    
    try {
        // Extracting latutude and longitude using query parameter
        const { latitude, longitude } = req.query;
        if (!latitude || !longitude) {
        return res.status(400).json({
            success: false,
            error: "Latitude and Longitude are required",
        });
        }
        
        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        if (isNaN(userLat) || isNaN(userLon)) {
        return res
            .status(400)
            .json({ success: false, error: "Invalid Latitude or Longitude" });
        }
        

        // Query for extracting all records from school table
        const query = "SELECT * FROM school";

        db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res
            .status(500)
            .json({ success: false, error: "Failed to fetch schools" });
        }

        // Sorting wrto distance
        const schoolsWithDistance = results
            .map((school) => {
            const distance = calculateDistance(
                userLat,
                userLon,
                school.latitude,
                school.longitude
            );
            return { ...school, distance };
            })
            .sort((a, b) => a.distance - b.distance);

        res.status(201).json(schoolsWithDistance);
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
