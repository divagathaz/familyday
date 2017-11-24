/*$( "#header" ).load( "common/header.html" );*/
$( "#footer" ).load( "common/footer.html" );
$( "#content" ).load( "content/login.html" );

function login_dashboard(){
	$( "#content" ).load( "content/login.html");
}

function load_dashboard(id){
	if (id==0) {
		$( "#content" ).load( "content/pendapatan.html");
	} else if(id==1){
		$( "#content" ).load( "content/inquiry.html");
	} else if(id==2){
		$( "#content" ).load( "content/booking.html");
	} else if (id==3){
		$( "#content" ).load( "content/payment.html");
	} else {
	}
}

function show_filter(){
	$("#pesan_filter").show();
	$("#list_pilihan").show();
	$("#list_filter").hide();
	$("#list_filter_tangal").hide();
}
