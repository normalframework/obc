function initial() {
  let initialized = true;

  return () => {
    if (initialized) {
      initialized = false;
      return true;
    }
    return false;
  }
}

module.exports = initial;