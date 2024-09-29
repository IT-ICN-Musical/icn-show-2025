module.exports = {
  "*{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write .",
    () => "tsc --skipLibCheck --noEmit",
  ],
};
