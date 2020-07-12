const answerOption = {
  yes: true,
  no: false,
};

const convertAlias = (str) => answerOption[str];

module.exports = { answerOption, convertAlias };
