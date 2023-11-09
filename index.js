"#dropdownMeu"
  .on("show.bs.dropdown", function () {
    this.find(".dropdown-toggle").addClass("rotated");
  })
  .on("hide.bs.dropdown", function () {
    this.find(".dropdown-toggle").removeClass("rotated");
    console.log("hi");
  });
