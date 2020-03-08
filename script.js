var total  = 0; var minuman = 0; var makanan = 0; var pesanan = '';

document.querySelectorAll('.tambah').forEach(tambah => {
    tambah.addEventListener('click', function() {
        var jenis  = this.dataset.jenis;
		let item = document.querySelector('#'+jenis);
		let harga  = item.dataset.harga;
		if(item.value < 10){
			item.value++;
			total = total + parseInt(harga);
			item.value = item.value;
			if(jenis == 'nasbak' || jenis == 'nasgor'){
				makanan++;
			}else{
				minuman++;
			}
		}
		updateOrder();
    });
});

document.querySelectorAll('.kurang').forEach(kurang => {
    kurang.addEventListener('click', function() {
        var jenis  = this.dataset.jenis;
		let item = document.querySelector('#'+jenis);
		let harga  = item.dataset.harga;
		if(item.value != 0){
			item.value--;
			total = total - parseInt(harga);
			item.value = item.value;
			if(jenis == 'nasbak' || jenis == 'nasgor'){
				makanan--;
			}else{
				minuman--;
			}
		}
		updateOrder();
    });
});

function updateOrder(){
	document.querySelector('#harga').innerHTML = 'Rp.'+total;
	let pesan = document.querySelector('#total');
	if(makanan != 0 && minuman != 0){
		pesanan = 'Total '+makanan+' makanan dan '+minuman+' minuman.';
	}else{
		if(makanan == 0 && minuman != 0){
			pesanan = 'Total '+minuman+' minuman.';
		}else if(makanan != 0 && minuman == 0){
			pesanan = 'Total '+makanan+' makanan.';
		}else{
			pesanan = '_';
		}
	}
	pesan.innerHTML = pesanan;
}