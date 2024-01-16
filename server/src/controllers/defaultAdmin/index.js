const User = require("./src/models/user/user.model.ts");

async function createDefaultAdminUser() {
  try {
    const existingAdminUser = await User.findOne({ admin: true });

    if (!existingAdminUser) {
      const adminUser = new User({
        name: "Admin",
        email: "harshit.shah@codexeros.com",
        password: "admin123",
        streetAddress:"Ahmedabad",
        postalCode: 380054,
        city: "Ahmedabad",
        country: "India",
        phone: 7777712345,
        admin: true,
      });

      await adminUser.save();
      console.log("Default admin user created successfully.");
    } else {
      console.log("Default admin user already exists.");
    }
  } catch (error) {
    console.error("Error creating default admin user:", error.message);
  }
}

module.exports = createDefaultAdminUser;
