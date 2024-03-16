// Assuming storedObj exists and has an Object property
storedObj.Object.ID = "newKey";

// A more defensive approach would be to check the objects before assignment
if (storedObj && storedObj.Object) {
  storedObj.Object.ID = "newKey";
} else {
  console.error("storedObj or storedObj.Object is undefined");
}

// If you're unsure whether storedObj or storedObj.Object exists, you could also use:
storedObj = storedObj || {}; // Ensure storedObj is an object
storedObj.Object = storedObj.Object || {}; // Ensure storedObj.Object is an object
storedObj.Object.ID = "newKey"; // Now it's safe to assign the ID property
