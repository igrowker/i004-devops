const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Animal = require("../models/animalModel"); // Adjust path based on your project structure
const User = require("../models/userModel");
const RefugeeNeed = require("../models/refugeeNeedModel");
const AdminActivityLog = require("../models/adminModel");

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
    seedDatabase(); // Call the function to seed the data
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the script with an error code
  });

// Function to seed the database
async function seedDatabase() {
  try {
    // Clear existing data in collections
    await Animal.deleteMany({});
    await User.deleteMany({});
    await RefugeeNeed.deleteMany({});
    await AdminActivityLog.deleteMany({});

    console.log("Existing data cleared!");

    const animals = [
      {
        refugee_id: new mongoose.Types.ObjectId(),
        name: "Max",
        age: 3,
        species: "Dog",
        breed: "Golden Retriever",
        health_status: "Healthy",
        description: "Friendly and energetic dog.",
        photos: ["https://example.com/dog1.jpg"],
        adoption_status: "disponible",
      },
      {
        refugee_id: new mongoose.Types.ObjectId(),
        name: "Whiskers",
        age: 2,
        species: "Cat",
        health_status: "Healthy",
        description: "Calm and loves cuddles.",
        photos: ["https://example.com/cat1.jpg"],
        adoption_status: "adoptado",
      },
    ];
    await Animal.insertMany(animals);
    console.log("Animals seeded!");

    const users = [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        role: "admin",
        isActive: true,
        isVolunteer: false,
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "password123",
        role: "user",
        isActive: true,
        isVolunteer: true,
      },
    ];
    await User.insertMany(users);
    console.log("Users seeded!");

    const refugeeNeeds = [
      {
        refugee_id: new mongoose.Types.ObjectId(),
        item: "Blankets",
        quantity: 20,
        urgency: "High",
      },
      {
        refugee_id: new mongoose.Types.ObjectId(),
        item: "Canned Food",
        quantity: 50,
        urgency: "Medium",
      },
    ];
    await RefugeeNeed.insertMany(refugeeNeeds);
    console.log("Refugee needs seeded!");

    const adminLogs = [
      {
        action: "Created new animal entry",
        user_id: new mongoose.Types.ObjectId(),
        createdAt: new Date(),
      },
      {
        action: "Approved a user request",
        user_id: new mongoose.Types.ObjectId(),
        createdAt: new Date(),
      },
    ];
    await AdminActivityLog.insertMany(adminLogs);
    console.log("Admin activity logs seeded!");

    console.log("Seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
}
