/*
values in format [savingsC02, equivalentTrees, savingsH20, equivalentWater, savingsWaste, equivalentWaste]
*/
const topWear = [4.5, 0.2, 0.1, 0.5, 0.2, 0.1];
const knitWear = [13.7, 0.2, 0.3, 1.4, 0.1, 0.3];
const dressWear = [7.2, 0.2, 0.2, 0.7, 0.1, 0.2];
const jeansWear = [13.8, 0.9, 0.3, 1.4, 0.7, 0.5];
const trowsersWear = [13.5, 0.7, 0.3, 1.4, 0.5, 0.4];
const shoesWear = [14.3, 0.1, 0.6, 1.4, 0.1, 1.1];

$(".control").click(function () {
  var clicked = $(this).parent().parent().attr("data-citem"); //gets to the parent attribute of the clicked button
  var btnType = $(this).hasClass("plus"); //checks if the button clicked has plus or minus 'class'
  var getCounterElement = $(this).siblings(".value");

  console.log(clicked);

  var dataCitemArray = ["Top", "Knit", "Dress", "Jeans", "Pants", "Shoes"];
  var getCounterValue = parseFloat(getCounterElement.text());

  var top = parseFloat(getCounterElement.text());
  var knit = parseFloat(getCounterElement.text());
  var dress = parseFloat(getCounterElement.text());
  var jeans = parseFloat(getCounterElement.text());
  var pants = parseFloat(getCounterElement.text());
  var shoes = parseFloat(getCounterElement.text());

  if (clicked == "Top") {
    if (btnType == true) {
      top = top + 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") + topWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") + topWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") + topWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") + topWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") + topWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") + topWear[5]
      ).toFixed(1);

      getCounterElement.text(top);

      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    } else {
      top = top - 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") - topWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") - topWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") - topWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") - topWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") - topWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") - topWear[5]
      ).toFixed(1);

      getCounterElement.text(top);
      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    }
  } else if (clicked == "Knit") {
    if (btnType == true) {
      knit = knit + 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") + knitWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") + knitWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") + knitWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") + knitWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") + knitWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") + knitWear[5]
      ).toFixed(1);

      getCounterElement.text(knit);

      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    } else {
      knit = knit - 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") - knitWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") - knitWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") - knitWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") - knitWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") - knitWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") - knitWear[5]
      ).toFixed(1);

      getCounterElement.text(knit);
      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    }
  } else if (clicked == "Dress") {
    if (btnType == true) {
      dress = dress + 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") + dressWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") + dressWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") + dressWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") + dressWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") + dressWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") + dressWear[5]
      ).toFixed(1);

      getCounterElement.text(dress);

      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    } else {
      dress = dress - 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") - dressWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") - dressWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") - dressWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") - dressWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") - dressWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") - dressWear[5]
      ).toFixed(1);

      getCounterElement.text(dress);
      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    }
  } else if (clicked == "Jeans") {
    if (btnType == true) {
      jeans = jeans + 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") + jeansWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") + jeansWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") + jeansWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") + jeansWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") + jeansWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") + jeansWear[5]
      ).toFixed(1);

      getCounterElement.text(jeans);

      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    } else {
      jeans = jeans - 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") - jeansWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") - jeansWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") - jeansWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") - jeansWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") - jeansWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") - jeansWear[5]
      ).toFixed(1);

      getCounterElement.text(jeans);
      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    }
  } else if (clicked == "Pants") {
    if (btnType == true) {
      pants = pants + 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") + trowsersWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") + trowsersWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") + trowsersWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") + trowsersWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") + trowsersWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") + trowsersWear[5]
      ).toFixed(1);

      getCounterElement.text(pants);

      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    } else {
      pants = pants - 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") - trowsersWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") - trowsersWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") - trowsersWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") - trowsersWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") - trowsersWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") - trowsersWear[5]
      ).toFixed(1);

      getCounterElement.text(pants);
      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    }
  } else if (clicked == "Shoes") {
    if (btnType == true) {
      shoes = shoes + 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") + shoesWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") + shoesWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") + shoesWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") + shoesWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") + shoesWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") + shoesWear[5]
      ).toFixed(1);

      getCounterElement.text(shoes);

      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    } else {
      shoes = shoes - 1;
      var savingsC02 = (
        getCurrentResultValue("savingsC02") - shoesWear[0]
      ).toFixed(1);
      var equivalentTrees = (
        getCurrentResultValue("equivalentTrees") - shoesWear[1]
      ).toFixed(1);
      var savingsH20 = (
        getCurrentResultValue("savingsH20") - shoesWear[2]
      ).toFixed(1);
      var equivalentWater = (
        getCurrentResultValue("equivalentWater") - shoesWear[3]
      ).toFixed(1);
      var savingsWaste = (
        getCurrentResultValue("savingsWaste") - shoesWear[4]
      ).toFixed(1);
      var equivalentWaste = (
        getCurrentResultValue("equivalentWaste") - shoesWear[5]
      ).toFixed(1);

      getCounterElement.text(shoes);
      $("[data-groupname='savingsC02']").find(".result-value").text(savingsC02);
      $("[data-groupname='equivalentTrees']")
        .find(".result-value")
        .text(equivalentTrees);
      $("[data-groupname='savingsH20']").find(".result-value").text(savingsH20);
      $("[data-groupname='equivalentWater']")
        .find(".result-value")
        .text(equivalentWater);
      $("[data-groupname='savingsWaste']")
        .find(".result-value")
        .text(savingsWaste);
      $("[data-groupname='equivalentWaste']")
        .find(".result-value")
        .text(equivalentWaste);
    }
  }

  function getCurrentResultValue(dataGroupName) {
    debugger;
    return parseFloat(
      $("[data-groupname='" + dataGroupName + "']")
        .find(".result-value")
        .text()
    );
  }
});
