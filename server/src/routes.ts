// import express from 'express';
// import connectDB from './shared/utils/dataBase/mongo';

// export const app = express();
// app.use(express.json());

// connectDB();

// // app.get("/", (req, res) => {
// //   console.log("connectDB");
// //   res.json({
// //     message: "Hello World from Server Side. Please find the Product List Below:-",
// //     name: ["Mobile", "TV", "AC", "Tab", "Laptop"],
// //   });
// // });

// // app.use("/api", router);

// // export default app



// // import express from 'express';
// // import connectDB from './shared/utils/dataBase/mongo';
// // import router from './controllers';

// // export class Server {
// //     private app: express.Application;
// //     private port: number;

// //     constructor(port: number) {
// //         this.app = express();
// //         this.port = port;
// //         this.setupMiddleware();
// //         this.setupRoutes();
// //     }

// //     private setupMiddleware() {
// //         this.app.use(express.json());
// //         connectDB(); // Assuming this function establishes database connection
// //     }

// //     private setupRoutes() {
// //         this.app.get('/', (req, res) => {
// //             res.json({
// //                 message: 'Hello World from Server Side. Please find the Product List Below:-',
// //                 name: ['Mobile', 'TV', 'AC', 'Tab', 'Laptop'],
// //             });
// //         });
// //         this.app.use('/api', router);
// //     }

// //     async start() {
// //         return new Promise<void>((resolve, reject) => {
// //             this.app.listen(this.port, (err: Error) => {
// //                 if (err) {
// //                     reject(err);
// //                 } else {
// //                     console.log(`REST API server listening on port ${this.port}`);
// //                     resolve();
// //                 }
// //             });
// //         });
// //     }
// // }

