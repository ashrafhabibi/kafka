const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Admin Connection Success...");

  console.log("Creating Topic [demo-topic-1]");
  await admin.createTopics({
    topics: [
      {
        topic: "demo-topic-1",
        numPartitions: 1,
      },
    ],
  });
  console.log("Topic Created Success [demo-topic-1]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();