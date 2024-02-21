// export class ValidationError extends Error {
//     constructor(...params:any[]) {
//       // Pass remaining arguments (including vendor specific ones) to parent constructor
//       super();
//       // Maintains proper stack trace for where our error was thrown (only available on V8)
//       if (Error.captureStackTrace) {
//         Error.captureStackTrace(this, ValidationError);
//       }
//       this.name = 'ValidationError';
//       this.message=''
//       // Custom debugging information
//     //   this.httpStatusCode=400;
//     //   this.date = new Date();
//     }
//   }