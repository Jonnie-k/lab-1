const combineUsers = (...arrays) => {
  // Merge all arrays into one
  const users = [].concat(...arrays);

  // Get today's date
  const merge_date = new Date().toISOString();

  // Return object
  return {
    users,
    merge_date
  };
};

module.exports = combineUsers;