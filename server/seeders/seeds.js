const db = require("../config/connection");
const User = require("../models/User");
const Tag = require("../models/Tag");
const Post = require("../models/Post");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Tag.deleteMany({});
    await Post.deleteMany({});

    const users = await User.insertMany([
      {
        username: "kindling",
        password: "inspiration",
      },
    ]);

    console.log("Users Seeded.");

    const tags = await Tag.insertMany([
      {
        name: "raccoon",
      },
      {
        name: "refurbish",
      },
      {
        name: "upholster",
      },
      {
        name: "garden",
      },
      {
        name: "exercise",
      },
    ]);

    console.log("Tags Seeded.");

    const posts = await Post.insertMany([
      {
        title: "Raccoons Visit!!",
        description:
          "Some late night munchies were enjoyed by this trio of snackers!",
        url: "www.url.com",
        tags: [tags[0]._id, tags[1]._id],
      },
      {
        title: "1950s Re-Upholsted Chair",
        description:
          "Learn how to restore this chair that has seen so much love.",
        url: "www.url.com",
        tags: [tags[1]._id, tags[2]._id],
      },
      {
        title: "Do Something For Yourself",
        description:
          "Today I'd like to elaborate on how important it is to find time everyday to do something small for yourself.",
        url: "www.url.com",
        tags: [tags[2]._id, tags[3]._id],
      },
      {
        title: "Mulching 101",
        description:
          "Grab your notepads! Today we are tackling when, where, how, and why to mulch!",
        url: "www.url.com",
        tags: [tags[3]._id, tags[4]._id],
      },
      {
        title: "Daily Dose of Love",
        description: "Just a quick message to say spread your light today!",
        url: "www.url.com",
        tags: [tags[4]._id, tags[0]._id],
      },
      {
        title: "New Workout!!",
        description:
          "Here is the 411 on this new workout I've started with my trainer and the results I'm seeing. Check! This! Out!",
        thumbnail: "www.thumbnail.com",
        url: "www.url.com",
        length: "2:52",
        tags: [tags[0]._id, tags[1]._id],
      },
    ]);

    console.log("Posts Seeded");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Everything seeded successfully.");
  process.exit(0);
});
