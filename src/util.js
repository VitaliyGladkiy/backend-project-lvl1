const alias = {
  yes: true,
};

exports.convertAlias = (str) => (alias[str] ? alias[str] : false);
