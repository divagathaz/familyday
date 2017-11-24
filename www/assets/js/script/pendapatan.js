$(function() {
	var containerDiv = document.getElementById("vizInquiry"),
	url = "http://apps.iconpln.co.id:2123/views/DashboardInquiryICCPAY1/DASHBORDUTAMA?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no&:toolbar=no",
	options = {
		"Tahun": "",
		"Bulan": "",
		"Tgl": "",
		"Transaksi": "",
		hideTabs: true
	};

	viz = new tableau.Viz(containerDiv, url, options);

	$("#vizInquiry iframe").css("width","100%").css("height","600px").css("visibility","");
	viz.refreshDataAsync();
});

$('#btn_tutup').click(function(){
	$("#pesan_filter").hide();
});

function filter_transaksi(option){

	if (option=="1") {
		$("#list_filter").show();
		$("#list_filter_tangal").hide();
		$("#list_pilihan").hide();
	}
	if (option=="2") {
		$("#list_filter").hide();
		$("#list_filter_tangal").show();
		$("#list_pilihan").hide();
	}	
}

function set_filter_transaksi(trans) {
	var inquiry1 = viz.getWorkbook().getActiveSheet().getWorksheets().get("PAYMENT PER JAM PER HARI");
	var inquiry2 = viz.getWorkbook().getActiveSheet().getWorksheets().get("BOOKING PER JAM PER HARI INI");
	var inquiry3 = viz.getWorkbook().getActiveSheet().getWorksheets().get("KUMULATIF PAYMENT");
	var inquiry4 = viz.getWorkbook().getActiveSheet().getWorksheets().get("PAYMENT PER BULAN");
	if (trans === "") {
		inquiry1.clearFilterAsync("Transaksi");
		inquiry2.clearFilterAsync("Transaksi");
		inquiry3.clearFilterAsync("Transaksi");
		inquiry4.clearFilterAsync("Transaksi");
	} else{
		inquiry1.applyFilterAsync("Transaksi", trans, tableauSoftware.FilterUpdateType.REPLACE);
		inquiry2.applyFilterAsync("Transaksi", trans, tableauSoftware.FilterUpdateType.REPLACE);
		inquiry3.applyFilterAsync("Transaksi", trans, tableauSoftware.FilterUpdateType.REPLACE);
		inquiry4.applyFilterAsync("Transaksi", trans, tableauSoftware.FilterUpdateType.REPLACE);
	}
	$("#pesan_filter").hide();
}


	setInterval(function () {viz.refreshDataAsync() }, 60000);
