function doGet() {
  return HtmlService.createTemplateFromFile('Index_v1.1.1').evaluate();
}

// GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData() {
  var spreadSheetId = "13OAvXQzNewpMcY31WZ6Tgc2BDZ6tv5jzDgIyx9BblcU"; //CHANGE
  var dataRange = "Transactions!A2:F"; //CHANGE

  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;

  return values;
}

// INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
