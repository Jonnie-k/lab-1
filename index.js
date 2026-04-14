const combineUsers = (...arrays) => {
  const users = [].concat(...arrays);

  return {
    users,
    merge_date: new Date().toISOString()
  };
};

module.exports = combineUsers;