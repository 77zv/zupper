# Zupper - Directory Compression Tool
Zupper is a Node.js application that compresses all files in a given directory into a single compressed file. The application uses the fflate library for compression and the fs/promises module for file system operations.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You will need to have Node.js and npm installed on your machine. You can download them from the official website.

### Installation
Clone the repository:

    git clone https://github.com/example/zupper.git
Navigate to the project directory and install the necessary dependencies:

    cd zupper

### How to Use
Import the Zupper class into your project:
      import { Zupper } from './zupper.js';
      
Call the zipAndCompressDirectory method with the directory you want to compress and the path to the output zip file:

      await Zupper.zipAndCompressDirectory('/path/to/directory', '/path/to/output.zip');
The method will compress all the files in the directory and write the output to the specified zip file.
Note: The zipAndCompressDirectory method is asynchronous, so you'll need to use await or .then() to handle the result.

Here's an example of how you might use the Zupper class in a Node.js script:

    import { Zupper } from './zupper.js';

    async function compressFiles() {
      try {
        await Zupper.zipAndCompressDirectory('/path/to/directory', '/path/to/output.zip');
        console.log('Files compressed successfully!');
      } catch (error) {
        console.error('Error compressing files:', error);
      }
    }

    compressFiles();
This will compress all the files in the specified directory and write the output to the specified zip file.
