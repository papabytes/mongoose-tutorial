print("Started Adding the Users.");

db = db.getSiblingDB("tutorial");
db.createUser({
  user: "tutorial",
  pwd: "tutorial",
  roles: [{ role: "readWrite", db: "tutorial" }],
});

print("End Adding the User Roles.");