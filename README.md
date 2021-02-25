
## NodeJS implementation of the landtree task

### Running
Enter the directory and run `npm link`

You should now be able to run the command `landtree` from anywhere. For example: `landtree  --mode=from_root C104936104`

If this fails for any reason, within the project directory, you can run `node index.js --mode=from_root C104936104` 

There is no need to run `npm i`, as the dependencies are just for development.

### Details
+ I timeboxed my work to 3 hours and wanted to keep it clean, so have only implemented `--mode=from_root`. To implement mode=expanded would be a achieved by making the trace array optional (so we would show all children, instead of just children of appropriate parent organisations)
+ The tests are really basic, and just there to show that I've structured the task in a testable way and considered coverage. I'm using assert (which only outputs on failure) rather than a unit testing library, which felt over the top for a simple file and timboxed task.