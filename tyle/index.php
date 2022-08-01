<title>TUTORIAL FO4</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <style type="text/css">
  		*
  		{
  			padding : 0;
  			margin : 0;
  		}
  		body
  		{
  			background: black;
  			font-size: 25px;
  			font-family: sans-serif;
  			margin-top: 5%;
  		}
  </style>
  <body onload="capnhattyle()"></body>
  <div class="container-fluid">
  		<div class="row">
  			<div class="col-lg-12">
  				<div class="card border-dark">
  					<div class="card-header">
  						<div class="pannel-heading text-center">
  							<h5><i class="fa fa-question-circle"></i> CẬP NHẬT TỈ LỆ </h5>
  						</div>
  						<div class="pannel-body">
  							<!-- tỉ lệ -->
  							<label style="font-size : 19px" class="form-label">Tỉ lệ 1 => 2 (Tỉ lệ cập nhật : <b class="red" id="tile-1">0</b>% )</label>
  							<input id="tile-11" type="number" class="form-control" placeholder="Tỉ lệ 1 => 2"><br>
  							<!-- tỉ lệ -->
  							<!-- tỉ lệ -->
  							<label style="font-size : 19px" class="form-label">Tỉ lệ 2 => 3 (Tỉ lệ cập nhật : <b class="red" id="tile-2">0</b>% )</label>
  							<input id="tile-21" type="number" class="form-control" placeholder="Tỉ lệ 2 => 3"><br>
  							<!-- tỉ lệ -->
  							<!-- tỉ lệ -->
  							<label style="font-size : 19px" class="form-label">Tỉ lệ 3 => 4 (Tỉ lệ cập nhật : <b class="red" id="tile-3">0</b>% )</label>
  							<input id="tile-31" type="number" class="form-control" placeholder="Tỉ lệ 3 => 4"><br>
  							<!-- tỉ lệ -->
  							<!-- tỉ lệ -->
  							<label style="font-size : 19px" class="form-label">Tỉ lệ 4 => 5 (Tỉ lệ cập nhật : <b class="red" id="tile-4">0</b>% )</label>
  							<input id="tile-41" type="number" class="form-control" placeholder="Tỉ lệ 4 => 5"><br>
  							<!-- tỉ lệ -->
  							<!-- tỉ lệ -->
  							<label style="font-size : 19px" class="form-label">Tỉ lệ 5 => 6 (Tỉ lệ cập nhật : <b class="red" id="tile-5">0</b>% )</label>
  							<input id="tile-51" type="number" class="form-control" placeholder="Tỉ lệ 5 => 6"><br>
  							<!-- tỉ lệ -->
  							<!-- tỉ lệ -->
  							<label style="font-size : 19px" class="form-label">Tỉ lệ 6 => 7 (Tỉ lệ cập nhật : <b class="red" id="tile-6">0</b>% )</label>
  							<input id="tile-61" type="number" class="form-control" placeholder="Tỉ lệ 6 => 7"><br>
  							<!-- tỉ lệ -->
  							<!-- tỉ lệ -->
  							<label style="font-size : 19px" class="form-label">Tỉ lệ 7 => 8 (Tỉ lệ cập nhật : <b class="red" id="tile-7">0</b>% )</label>
  							<input id="tile-71" type="number" class="form-control" placeholder="Tỉ lệ 7 => 8"><br>
  							<!-- tỉ lệ -->
  							<!-- tỉ lệ -->
  							<label style="font-size : 19px" class="form-label">Tỉ lệ 8 => 9 (Tỉ lệ cập nhật : <b class="red" id="tile-8">0</b>% )</label>
  							<input id="tile-81" type="number" class="form-control" placeholder="Tỉ lệ 8 => 9"><br>
  							<!-- tỉ lệ -->
  							<!-- tỉ lệ -->
  							<label style="font-size : 19px" class="form-label">Tỉ lệ 9 => 10 (Tỉ lệ cập nhật : <b class="red" id="tile-9">0</b>% )</label>
  							<input id="tile-91" type="number" class="form-control" placeholder="Tỉ lệ 9 => 10"><br>
  							<!-- tỉ lệ -->
  							<button id="capnhat" class="btn btn-block btn-success">Cập nhật</button>
  							<br>
  						<button class="btn btn-block btn-danger" onclick="window.location.href='/profile.php'">Trở Về</button>
  							
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  </div>
  <script type="text/javascript">
  		$('#capnhat').click(function(){
  			var code = '589JHNBĐFE';
  			var tyle1 = $('#tile-11').val();
  			var tyle2 = $('#tile-21').val();
  			var tyle3 = $('#tile-31').val();
  			var tyle4 = $('#tile-41').val();
  			var tyle5 = $('#tile-51').val();
  			var tyle6 = $('#tile-61').val();
  			var tyle7 = $('#tile-71').val();
  			var tyle8 = $('#tile-81').val();
  			var tyle9 = $('#tile-91').val();
  			$.ajax({
  				type:"POST",
  				data:{
  					code:code,
  					tyle1:tyle1,
  					tyle2:tyle2,
  					tyle3:tyle3,
  					tyle4:tyle4,
  					tyle5:tyle5,
  					tyle6:tyle6,
  					tyle7:tyle7,
  					tyle8:tyle8,
  					tyle9:tyle9
  				},
  				url:"/api/tyle.php",
  				success:function(ketquatrave){
  					
  					alert(ketquatrave)
  					capnhattyle();
  				},
  				error:function(){
  					alert("Lỗi kết nối");
  				}
  			})

  		})
  		function capnhattyle(){
  			var code = '589DSKKFCS';
  			$.ajax({
  				type:"POST",
  				data:{
  					code:code
  				},
  				url:"/api/tyle.php",
  				success:function(dataload){
  					var huuduc = JSON.parse(dataload);
  					$('#tile-1').html(huuduc.tyle1);
  					$('#tile-2').html(huuduc.tyle2);
  					$('#tile-3').html(huuduc.tyle3);
  					$('#tile-4').html(huuduc.tyle4);
  					$('#tile-5').html(huuduc.tyle5);
  					$('#tile-6').html(huuduc.tyle6);
  					$('#tile-7').html(huuduc.tyle7);
  					$('#tile-8').html(huuduc.tyle8);
  					$('#tile-9').html(huuduc.tyle9);
  				},
  				error:function()
  				{
  					alert("lỗi load tỷ lệ")
  				}
  			})
  		}
  </script>