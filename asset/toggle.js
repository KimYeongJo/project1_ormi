function showHide(id) {
    $(document).ready(function(){
        $("button").click(function(){
            $(id).toggle();
        });
    });
}