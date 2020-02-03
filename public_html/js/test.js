function IsJsonString(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

function update_uNSData() {
	$.get( "http://api.idyll.info/api/uns/sync_info", function( data ) {
		if('state' in data) {
			$( "#data_uNS_lastname" ).html( data.last_record_names_registered );
			$( "#data_uNS_localblocks" ).html( data.local_blocks );
			$( "#data_uNS_totalblocks" ).html( data.total_blocks );
			$( "#data_uNS_peers" ).html( data.peers_connected );
			$( "#data_uNS_state" ).html( data.state );
		}
	});
}

function update_CRPData() {
	$.get( "http://api.idyll.info/api/rates", function( data ) {
		if('BTC' in data) {
			$( "#data_CRP_BTC" ).html( data.BTC );
			$( "#data_CRP_ETH" ).html( data.ETH );
			$( "#data_CRP_LTC" ).html( data.LTC );
			$( "#data_CRP_RUB" ).html( data.RUB );
			$( "#data_CRP_EUR" ).html( data.EUR );
			$( "#data_CRP_CNY" ).html( data.CNY );
			$( "#data_CRP_USD" ).html( data.USD );
		}
	});
}

update_uNSData();
update_CRPData();
