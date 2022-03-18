const pm2 = require("pm2");

const handleErr = (err,pre=""): void => {
  if(err){
    console.error(pre,err);
    process.exit(2)
  }
}

const startSandbox = (cb=()=>{}):void => {
  console.log("Starting sandbox...")

  pm2.start({
    script: "server.ts",
    name: "sandbox"
  }, (err) => {
    handleErr(err, "Create error:")
    console.log("Created sandbox")
    cb()
  })
  
}

pm2.connect((err):void => {
  handleErr(err)

  pm2.list((err, list) => {
    const hasProcess = Boolean(list.find(proc => proc.name === "sandbox"));
    if(hasProcess){
      console.log("Found sandbox, deleting...")
      pm2.delete("sandbox", (err) => {
        handleErr(err,"Delete error: ")
        console.log("Deleted sandbox...")
        startSandbox(() => pm2.disconnect())
      })
    } else {
      startSandbox(() => pm2.disconnect())
    }
  })

})
