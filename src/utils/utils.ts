export function updateValues(updates, dbValue) {
  Object.keys(updates).forEach((key) => {
    if (dbValue.hasOwnProperty(key)) {
      dbValue[key] = updates[key];
    }
  });
}
