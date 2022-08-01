  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link href="/NHD_Num.css?v=7" rel="stylesheet">
  <script src="/js/LocalStorage.js"></script>
  <script src="/js/grade.js?v=2"></script>
  <style type="text/css">
      body
      {
          background: black;
      }
      .container{

          margin-top: 15%;

      }
  </style>
<div class="container">
    <div class="row">
     
      <div class="col-lg-12">
        <div class="card border-dark ">
          <div class="card hedear">
            <div class="pannel-heading text-center" style="padding:1%">
                <span >Tên cầu thủ : <b id="tencauthu">Chưa có</b></span> ---- 
                <span >Vị trí đá : <b id="vitri">Chưa có</b></span><br>
                <span>Ảnh cầu thủ : <img style="width: 7%" src="https://s1.fifaaddict.com/fo4/players/pjryjjna.png?20200818"></span>
            </div>
            <div class="pannel-body"><br>
              <input id="name" class="form-control" placeholder="Ten cau thu">
              <input id="face" class="form-control" placeholder="link face">
              <input id="vitri" class="form-control" placeholder="vi tri da">
              <br>
              <button class="btn btn-block btn-danger " onclick="add()">Add</button><button class="btn btn-block btn-danger" onclick="window.location.href='/profile.php'">Trở Về</button>
              <script type="text/javascript">
                  function add()
                  {
                      var name = $('#name').val();
                      var face = $('#face').val();
                      var vitri = $('#vitri').val();
                      $.ajax({
                          type:"POST",
                          data:{
                              name:name,
                              face:face,
                              vitri:vitri
                          },
                          url:"../api/add.php",
                          success:function(ketqua)
                          { 
                              alert(ketqua)
                          },
                          error:function()
                          {
                              alert("error");
                          }
                      })
                  }
              </script>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>