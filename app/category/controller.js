module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", {
        title: "Category",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
