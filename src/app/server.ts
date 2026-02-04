import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;



const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://muhammadatiq757_db_user:xzoU2pX0JSiYitBJ@cluster0.ab409e4.mongodb.net/tour-management?appName=Cluster0"
    );

    console.log("Connected to DB!!");
    server = app.listen(5000, () => {
      console.log("Server is listening to port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();


// 1. unhandled rejection error
process.on("unhandledRejection", (err) => {
  console.log("unhandled Rejection detected... server sutting down..", err)
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});


// 2. uncaught rejection error
process.on("uncaughtException", (err) => {
  console.log("uncaught exceptional error detected... server sutting down..", err)
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});


// 3. signal termination (sigterm) error
process.on("SIGTERM", () => {
  console.log("SIGTERM Signal Rechived... server sutting down..")
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});


// 1.unhandled rejection error
// Promise.reject(new Error("I forgot to cath this promise"))


// 2. uncaught rejection error
// throw new Error ("I forgot to handle this local error")



// 3 types of server error handling
// 1. unhandled rejection error
// 2. uncaught rejection error
// 3. signal termination (sigterm) error