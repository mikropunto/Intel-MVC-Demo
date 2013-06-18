var app = new $.mvc.app();
app.loadControllers(["hello"]); //You can pass in array or a string.  You do not need to reference the .js extension.

//app.setViewType("text/html");
//app.setViewType("text/x-handlebars-template");
app.setBaseDir("localhost");

app.ready(function(){
    $.mvc.route("hello/");
});