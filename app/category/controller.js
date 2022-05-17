module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", {
        title: "Category Test",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
