<?php require('header.php'); ?>
    <div id="liffAppContent" class="container">
        <h1 class="text-muted">MakanBang </h1>
        <hr class="mb-3">
        <p>Hi <b id="displayName">Customer!</b> kuy jajan, kakak bisa pilih menu dibawah</p>
        <div class="row">
        	<div class="col-12">
        		<h4>Makanan</h4>
        		<ul class="list-group">
				  <li class="list-group-item">
				  	<div class="row d-flex justify-content-between">
				  		<div class="col-6">
				  			<h6>Nasi Ayam Bakar</h6>
				  			<small class="text-danger">Rp.15.000</small>
				  		</div>
				  		<div class="col-6 col-md-2">
				  			<div class="input-group mb-3">
								<div class="input-group-prepend">
							    	<button class="btn btn-success kurang" type="button">-</button>
								</div>
							  	<input type="text" class="text-center form-control" value="0" readonly>
							  	<div class="input-group-append">
    								<button class="btn btn-success tambah" type="button">+</button>
  								</div>
							</div>
				  		</div>
				  	</div>
				  </li>
				</ul>
				<ul class="list-group">
				  <li class="list-group-item">
				  	<div class="row d-flex justify-content-between">
				  		<div class="col-6">
				  			<h6>Nasi Ayam Goreng</h6>
				  			<small class="text-danger">Rp.15.000</small>
				  		</div>
				  		<div class="col-6 col-md-2">
				  			<div class="input-group mb-3">
								<div class="input-group-prepend">
							    	<button class="btn btn-success kurang" type="button">-</button>
								</div>
							  	<input type="text" class="text-center form-control" value="0" readonly>
							  	<div class="input-group-append">
    								<button class="btn btn-success tambah" type="button">+</button>
  								</div>
							</div>
				  		</div>
				  	</div>
				  </li>
				</ul>
        	</div>
        </div>
        <div class="row mt-3">
        	<div class="col-12">
        		<h4>Minuman</h4>
        		<ul class="list-group">
				  <li class="list-group-item">
				  	<div class="row d-flex justify-content-between">
				  		<div class="col-6">
				  			<h6>Air Mineral</h6>
				  			<small class="text-danger">Rp.3.000</small>
				  		</div>
				  		<div class="col-6 col-md-2">
				  			<div class="input-group mb-3">
								<div class="input-group-prepend">
							    	<button class="btn btn-success kurang" type="button">-</button>
								</div>
							  	<input type="text" class="text-center form-control" value="0" readonly>
							  	<div class="input-group-append">
    								<button class="btn btn-success tambah" type="button">+</button>
  								</div>
							</div>
				  		</div>
				  	</div>
				  </li>
				</ul>
				<ul class="list-group">
				  <li class="list-group-item">
				  	<div class="row d-flex justify-content-between">
				  		<div class="col-6">
				  			<h6>Es Teh</h6>
				  			<small class="text-danger">Rp.5.000</small>
				  		</div>
				  		<div class="col-6 col-md-2">
				  			<div class="input-group mb-3">
								<div class="input-group-prepend">
							    	<button class="btn btn-success kurang" type="button">-</button>
								</div>
							  	<input type="text" class="text-center form-control" value="0" readonly>
							  	<div class="input-group-append">
    								<button class="btn btn-success tambah" type="button">+</button>
  								</div>
							</div>
				  		</div>
				  	</div>
				  </li>
				</ul>
        	</div>
        </div>
        <hr>
        <div class="row">
        	<div class="col-6">
        		<h5>Ringkasan</h5>
        		<p>Total: <span class="total"></span> <br>
        		Harga: <span class="harga"></span>
        		</p>
        	</div>
        	<div class="col-6">
        		<button id="btnOrder" class="btn btn-success float-right mr-4">Pesan Sekarang</button>
        	</div>
        </div>
        <div class="text-center">
        	<a href="#" id="openInBrowser" class="text-danger">open in browser?</a>
        	<button href="#" id="btnLogout" class="text-danger">LogOut</button>
        </div>
    </div>
    <!-- error -->
    <div id="liffIdErrorMessage" class="hidden">
        <h5 class="text-danger text-center">Something Went Wrong!</h5>
    </div>
<?php require('footer.php') ?>