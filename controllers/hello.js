var view, json;

$.mvc.controller.create("hello", {
    views: ["views/hello.html", "views/world.html", "views/songs.html"], //These are the views we will use with the controller
    world: function() {
        $("#main").html($.template('views/world.html'));
    },
    init: function() {
        //Here we can run any initializing code for this controller/
    },
    default: function() {

    //OPCION en serie
        $.ajax({
            url: "views/songs.html",
            success: function(view) {
                $.getJSON(
                        "http://api.u-vox.com/demo.php?v=2", function(json) {
                    renderView(view, json, "main");
                    //$("#main").html($.template('views/songs.js', json)); // for normal templates
                }
                );
            }
        });

        function renderView(view, json, element) {
            var theTemplate = Handlebars.compile(view);
            var renderJson = theTemplate(json);
            //localStorage[element] = renderJson;
            element = "main";
            $container = element + "wrapper";
            //$('#' + element, $container).replaceWith('<ul id="' + element + '">' + renderJson + '</ul>'); //adding the html wrapper speeds-up loading!
            $('#' + element).html(renderJson);
            renderJson = null;
        }



//OPCION en paralelo (con onjetcwatcher/listener
//http://stackoverflow.com/questions/1759987/listening-for-variable-changes-in-javascript-or-jquery
        /*
         var test = new Object();
         test.watch(view, function(prop, oldval, newval) {
         //Your code
         //cuando tuviéramos view y json ejecutaríamos la función renderView
         return newval;
         });

         view = $.ajax({
         url: "/views/songs.js",
         async: false
         }).responseText;


         json = $.ajax({
         url: "http://api.u-vox.com/getallsongs.php?v=2",
         async: false
         }).responseText;

         */
    }


});
