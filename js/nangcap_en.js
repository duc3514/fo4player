function load_info_nc() {
  var thebaove = getItem("thebaove");
  var sudungthebaove = getItem("sudungthebaove");
  var thenangcap = getItem("thenangcap");
  var ten = getItem("ten");
  var ovr = getItem("ovr");
  var luong = getItem("luong");
  var ss = getItem("ss");
  var face = getItem("face");
  var vt = getItem("vt");
  var qg = getItem("qg");
  var price = getItem("price");
  var price_bandau = getItem("price_bandau");
  var ovr_nc = getOtem("ovr_nc");
  var grade = getItem("grade");
  var price = getItem("price");
  $(".card_img").attr("src", "/anh/anhcauthu/anh_1/" + ss + ".png?v=3");
  $(".txt_ovr").html(ovr);
  $(".txt_ten").html(ten);
  $(".txt_luong").html(luong);
  $(".txt_vt").html(vt);
  $(".txt_price").html(parseInt(price).toCurrencyString());
  if (qg == "Viet Nam") {
    $(".img_qg").attr("src", "/anh/Flag/VN.png");
  } else if (qg == "South Korea") {
    $(".img_qg").attr("src", "/anh/Flag/HQ.png");
  } else if (qg == "Thailand") {
    $(".img_qg").attr("src", "/anh/Flag/THA.png");
  } else if (qg == "China") {
    $(".img_qg").attr("src", "/anh/Flag/TQ.png");
  } else if (qg == "Indonesia") {
    $(".img_qg").attr("src", "/anh/Flag/IND.png");
  }
  $(".img_grade").attr("src", grade);
  $(".img_ss, .img_ss_info").attr(
    "src",
    "/anh/anhcauthu/anh_2/" + ss + ".png?v=3"
  );
  $(".img_face").attr("src", face);
  if (grade == grade_1) {
    $(".img_grade_next").attr("src", grade_2);
    $(".txt_ovr_next").html(parseInt(ovr) + 1);
    $(".txt_price_next").html(
      parseInt(parseInt(price) + parseInt(price) * 0.3).toCurrencyString()
    );
    ovr_tc = 1;
    setOtem("ovr_tc", ovr_tc);
    ovr_tb = 0;
    setOtem("ovr_tb", ovr_tb);
  } else if (grade == grade_2) {
    $(".img_grade_next").attr("src", grade_3);
    $(".txt_ovr_next").html(parseInt(ovr) + 1);
    $(".txt_price_next").html(
      parseInt(parseInt(price) + parseInt(price) * 0.6).toCurrencyString()
    );
    ovr_tc = 1;
    setOtem("ovr_tc", ovr_tc);
    ovr_tb = -1;
    setOtem("ovr_tb", ovr_tb);
  } else if (grade == grade_3) {
    $(".img_grade_next").attr("src", grade_4);
    $(".txt_ovr_next").html(parseInt(ovr) + 2);
    $(".txt_price_next").html(
      parseInt(parseInt(price) + parseInt(price) * 1.2).toCurrencyString()
    );
    ovr_tc = 2;
    setOtem("ovr_tc", ovr_tc);
    ovr_tb = -2;
    setOtem("ovr_tb", ovr_tb);
  } else if (grade == grade_4) {
    $(".img_grade_next").attr("src", grade_5);
    $(".txt_ovr_next").html(parseInt(ovr) + 2);
    $(".txt_price_next").html(
      parseInt(parseInt(price) + parseInt(price) * 1.6).toCurrencyString()
    );
    ovr_tc = 2;
    setOtem("ovr_tc", ovr_tc);
    ovr_tb = -4;
    setOtem("ovr_tb", ovr_tb);
  } else if (grade == grade_5) {
    $(".img_grade_next").attr("src", grade_6);
    $(".txt_ovr_next").html(parseInt(ovr) + 2);
    $(".txt_price_next").html(
      parseInt(parseInt(price) + parseInt(price) * 2).toCurrencyString()
    );
    ovr_tc = 2;
    setOtem("ovr_tc", ovr_tc);
    ovr_tb = -6;
    setOtem("ovr_tb", ovr_tb);
  } else if (grade == grade_6) {
    $(".img_grade_next").attr("src", grade_7);
    $(".txt_ovr_next").html(parseInt(ovr) + 3);
    $(".txt_price_next").html(
      parseInt(parseInt(price) + parseInt(price) * 2.5).toCurrencyString()
    );
    ovr_tc = 3;
    setOtem("ovr_tc", ovr_tc);
    ovr_tb = -8;
    setOtem("ovr_tb", ovr_tb);
  } else if (grade == grade_7) {
    $(".img_grade_next").attr("src", grade_8);
    $(".txt_ovr_next").html(parseInt(ovr) + 4);
    $(".txt_price_next").html(
      parseInt(parseInt(price) + parseInt(price) * 3).toCurrencyString()
    );
    ovr_tc = 4;
    setOtem("ovr_tc", ovr_tc);
    ovr_tb = -11;
    setOtem("ovr_tb", ovr_tb);
  } else if (grade == grade_8) {
    $(".img_grade_next").attr("src", grade_9);
    $(".txt_ovr_next").html(parseInt(ovr) + 4);
    $(".txt_price_next").html(
      parseInt(parseInt(price) + parseInt(price) * 3.5).toCurrencyString()
    );
    ovr_tc = 4;
    setOtem("ovr_tc", ovr_tc);
    ovr_tb = -15;
    setOtem("ovr_tb", ovr_tb);
  } else if (grade == grade_9) {
    $(".img_grade_next").attr("src", grade_10);
    $(".txt_ovr_next").html(parseInt(ovr) + 5);
    $(".txt_price_next").html(
      parseInt(parseInt(price) + parseInt(price) * 5).toCurrencyString()
    );
    ovr_tc = 5;
    setOtem("ovr_tc", ovr_tc);
    ovr_tb = -19;
    setOtem("ovr_tb", ovr_tb);
  } else if (grade == grade_10) {
    $(".gradeprice, .txt_updown").html("");
    $(".txt_status").html("Grade has been maximum");
  }
  if (price_bandau == "") {
    price_bandau = price;
    setItem("price_bandau", price_bandau);
  }
  $(".txt_ovr").addClass(ss);
  $(".txt_vt").addClass(ss);
  if (ovr != "") {
    if (sudungthebaove == "") {
      $(".check_baovecauthu").html("Không áp dụng");
    } else if (sudungthebaove == "0") {
      $(".check_baovecauthu").html("Không áp dụng");
    } else {
      $(".baove").css("display", "inline-block");
      $(".main_nc_info").css("height", "29vh");
      $(".check_baovecauthu").html("Áp dụng");
    }
  }
}
function removedis() {
  var grade = getItem("grade");
  if (grade != grade_10) {
    $(".btn_nangcap").removeAttr("disabled");
  }
}
function hieuungnangcap() {
  $(".btn_nangcap, .btn_hoantat").attr("disabled", true);
  $(".main_nc_info").addClass("fadeOutDownBig");
  setTimeout(function () {
    $(".main_nc_info").css("display", "none");
  }, 100);
  setTimeout(function () {
    $(".main_nc_status").addClass("fadeOutDownBig");
  }, 100);
  setTimeout(function () {
    $(".main_nc_status").css("display", "none");
  }, 100);
  setTimeout(function () {
    $(".card_nc").animate({ marginTop: "25vh" }, 1200);
  }, 300);
  setTimeout(function () {
    $(".main_nc").addClass("blur");

    $(".card_nc, .face_div, .ssname_div, .grade_div, .luong_div")
      .addClass("whitescale")
      .addClass("zoom");
  }, 1800);
  setTimeout(function () {
    $(".card_nc").addClass("rung");
  }, 2600);

  setTimeout(function () {
    $(".main_nc").removeClass("blur");
    $(".main_nc_info").removeClass("fadeOutDownBig");
    $(".main_nc_status").removeClass("fadeOutDownBig");
    $(".card_nc").removeClass("rung");
    $(".card_nc, .face_div, .ssname_div, .grade_div, .luong_div").removeClass(
      "whitescale zoom"
    );
    $(".main_nc_in").addClass("bounceIn");
  }, 4000);
  setTimeout(function () {
    $(".card_nc").animate({ marginTop: "20%" }, 500);
    $(".main_nc_status").addClass("fadeInUpBig").css("display", "block");
  }, 4900);
  setTimeout(function () {
    $(".main_nc_in").removeClass("animated bounceIn");
    $(".main_nc_info").addClass("fadeInUpBig").css("display", "block");
    $(".main_nc").css({ "z-index": "4", position: "relative" });
    $(".gradeprice").addClass("game");
  }, 5200);
  setTimeout(function () {
    $(".main_nc_status").removeClass("fadeInUpBig");
    $(".main_nc_info").removeClass("fadeInUpBig");
    $(".baove").css("display", "none");
    $(".main_nc_info").css("height", "25vh");
  }, 6000);
}
$(".btn_nangcap").click(function () {
  setTimeout(hieuungnangcap, 0);
  setTimeout(xuly_nc, 1800);
});
$(".btn_comeback").click(function () {
  location.href = "/profile.html" + v_cache;
});
$(".btn_hoantat").click(function () {
  location.reload();
});

// XỬ LÝ NÂNG CẤP
function xuly_nc() {
  var grade = getItem("grade");
  var tyle_nc = parseInt(Math.random() * 100) + 1;
  var tyle_nc_2 = parseInt(Math.random() * 100) + 1;
  var code = "589DSKKFCS";
  // $.ajax({
  //     type:"POST",
  //     data:{
  //         code:code
  //     },
  //     url:"./api/tyle.php",
  //     success:function(data){
  //         var huuduc = JSON.parse(data);
  //         tyle1 = huuduc.tyle1;setItem("tyle1", tyle1);
  //         tyle2 = huuduc.tyle2;setItem("tyle2", tyle2);
  //         tyle3 = huuduc.tyle3;setItem("tyle3", tyle3);
  //         tyle4 = huuduc.tyle4;setItem("tyle4", tyle4);
  //         tyle5 = huuduc.tyle5;setItem("tyle5", tyle5);
  //         tyle6 = huuduc.tyle6;setItem("tyle6", tyle6);
  //         tyle7 = huuduc.tyle7;setItem("tyle7", tyle7);
  //         tyle8 = huuduc.tyle8;setItem("tyle8", tyle8);
  //         tyle9 = huuduc.tyle9;setItem("tyle9", tyle9);
  //     },
  //     error:function(){
  //         alert("Error code")
  //     }
  // })
  var tyle1 = 100;
  var tyle2 = 81;
  var tyle3 = 64;
  var tyle4 = 50;
  var tyle5 = 26;
  var tyle6 = 15;
  var tyle7 = 8;
  var tyle8 = 5;
  var tyle9 = 3;
  var sudungthebaove = getItem("sudungthebaove");
  if (grade == grade_1) {
    if (tyle_nc <= tyle1) {
      setTimeout(xuly_nc_thanhcong, 0);
    } else {
      setTimeout(xuly_nc_thatbai, 0);
    }
  } else if (grade == grade_2) {
    if (tyle_nc <= tyle2) {
      setTimeout(xuly_nc_thanhcong, 0);
    } else if (tyle_nc_2 <= 80) {
      setTimeout(xuly_nc_thatbai, 0);
    } else {
      setTimeout(xuly_nc_thatbai, 0);
    }
  } else if (grade == grade_3) {
    if (tyle_nc <= tyle3) {
      setTimeout(xuly_nc_thanhcong, 0);
    } else if (tyle_nc_2 <= 10) {
      setTimeout(ph_thanhcong_2, 0);
    } else {
      setTimeout(xuly_nc_thatbai, 0);
    }
  } else if (grade == grade_4) {
    if (tyle_nc <= tyle4) {
      setTimeout(xuly_nc_thanhcong, 0);
    } else if (tyle_nc_2 <= 5) {
      setTimeout(ph_thanhcong_3, 0);
    } else if (tyle_nc_2 <= 80) {
      setTimeout(ph_thanhcong_2, 0);
    } else {
      setTimeout(xuly_nc_thatbai, 0);
    }
  } else if (grade == grade_5) {
    if (tyle_nc <= tyle5) {
      setTimeout(xuly_nc_thanhcong, 0);
    } else if (sudungthebaove == "1") {
      setTimeout(sudungthebaove_check, 0);
    } else if (tyle_nc_2 <= 5) {
      setTimeout(ph_thanhcong_4, 0);
    } else if (tyle_nc_2 <= 50) {
      setTimeout(ph_thanhcong_3, 0);
    } else if (tyle_nc_2 <= 80) {
      setTimeout(ph_thanhcong_2, 0);
    } else {
      setTimeout(xuly_nc_thatbai, 0);
    }
  } else if (grade == grade_6) {
    if (tyle_nc <= tyle6) {
      setTimeout(xuly_nc_thanhcong, 0);
    } else if (sudungthebaove == "1") {
      setTimeout(sudungthebaove_check, 0);
    } else if (tyle_nc_2 <= 5) {
      setTimeout(ph_thanhcong_5, 0);
    } else if (tyle_nc_2 <= 50) {
      setTimeout(ph_thanhcong_4, 0);
    } else if (tyle_nc_2 <= 60) {
      setTimeout(ph_thanhcong_3, 0);
    } else if (tyle_nc_2 <= 85) {
      setTimeout(ph_thanhcong_2, 0);
    } else {
      setTimeout(xuly_nc_thatbai, 0);
    }
  } else if (grade == grade_7) {
    if (tyle_nc <= tyle7) {
      setTimeout(xuly_nc_thanhcong, 0);
    } else if (sudungthebaove == "1") {
      setTimeout(sudungthebaove_check, 0);
    } else if (tyle_nc_2 <= 5) {
      setTimeout(ph_thanhcong_6, 0);
    } else if (tyle_nc_2 <= 50) {
      setTimeout(ph_thanhcong_5, 0);
    } else if (tyle_nc_2 <= 80) {
      setTimeout(ph_thanhcong_4, 0);
    } else if (tyle_nc_2 <= 90) {
      setTimeout(ph_thanhcong_3, 0);
    } else if (tyle_nc_2 <= 95) {
      setTimeout(ph_thanhcong_2, 0);
    } else {
      setTimeout(xuly_nc_thatbai, 0);
    }
  } else if (grade == grade_8) {
    if (tyle_nc <= tyle8) {
      setTimeout(xuly_nc_thanhcong, 0);
    } else if (sudungthebaove == "1") {
      setTimeout(sudungthebaove_check, 0);
    } else if (tyle_nc_2 <= 5) {
      setTimeout(ph_thanhcong_7, 0);
    } else if (tyle_nc_2 <= 20) {
      setTimeout(ph_thanhcong_6, 0);
    } else if (tyle_nc_2 <= 30) {
      setTimeout(ph_thanhcong_5, 0);
    } else if (tyle_nc_2 <= 40) {
      setTimeout(ph_thanhcong_4, 0);
    } else if (tyle_nc_2 <= 80) {
      setTimeout(ph_thanhcong_3, 0);
    } else if (tyle_nc_2 <= 90) {
      setTimeout(ph_thanhcong_2, 0);
    } else {
      setTimeout(xuly_nc_thatbai, 0);
    }
  } else if (grade == grade_9) {
    if (tyle_nc <= tyle9) {
      setTimeout(xuly_nc_thanhcong, 0);
    } else if (sudungthebaove == "1") {
      setTimeout(sudungthebaove_check, 0);
    } else if (tyle_nc_2 <= 5) {
      setTimeout(ph_thanhcong_8, 0);
    } else if (tyle_nc_2 <= 20) {
      setTimeout(ph_thanhcong_7, 0);
    } else if (tyle_nc_2 <= 30) {
      setTimeout(ph_thanhcong_6, 0);
    } else if (tyle_nc_2 <= 40) {
      setTimeout(ph_thanhcong_5, 0);
    } else if (tyle_nc_2 <= 80) {
      setTimeout(ph_thanhcong_4, 0);
    } else if (tyle_nc_2 <= 90) {
      setTimeout(ph_thanhcong_3, 0);
    } else {
      setTimeout(xuly_nc_thatbai, 0);
    }
  }
}

// rate
function tylevuotbac() {
  var grade = getItem("grade");
  var tyle_nc = parseInt(Math.random() * 100) + 1;
  var tyle_nc_2 = parseInt(Math.random() * 100) + 1;

  if (grade == grade_1) {
    if (tyle_nc <= 100) {
      setTimeout(nangcapvuotbac, 0);
    } else {
      setTimeout(thatbai, 0);
    }
  } else if (grade == grade_2) {
    if (tyle_nc <= 90) {
      setTimeout(nangcapvuotbac, 0);
    } else {
      setTimeout(thatbai, 0);
    }
  } else if (grade == grade_3) {
    if (tyle_nc <= 80) {
      setTimeout(nangcapvuotbac, 0);
    } else {
      setTimeout(thatbai, 0);
    }
  } else if (grade == grade_4) {
    if (tyle_nc <= 60) {
      setTimeout(nangcapvuotbac, 0);
    } else {
      setTimeout(thatbai, 0);
    }
  } else if (grade == grade_5) {
    if (tyle_nc <= 40) {
      setTimeout(nangcapvuotbac, 0);
    } else {
      setTimeout(thatbai, 0);
    }
  } else if (grade == grade_6) {
    if (tyle_nc <= 30) {
      setTimeout(nangcapvuotbac, 0);
    } else {
      setTimeout(thatbai, 0);
    }
  } else if (grade == grade_7) {
    if (tyle_nc <= 20) {
      setTimeout(nangcapvuotbac, 0);
    } else {
      setTimeout(thatbai, 0);
    }
  } else if (grade == grade_8) {
    if (tyle_nc <= 10) {
      setTimeout(nangcapvuotbac, 0);
    } else {
      setTimeout(thatbai, 0);
    }
  } else if (grade == grade_9) {
    if (tyle_nc <= 5) {
      setTimeout(nangcapvuotbac, 0);
    } else {
      setTimeout(thatbai, 0);
    }
  }
}
function nangcapvuotbac() {
  var ovr_tc = getOtem("ovr_tc");
  var grade = getItem("grade");
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_phu_1 = getItem("ovr_phu_1");
  var ovr_phu_2 = getItem("ovr_phu_2");
  var ovr_phu_3 = getItem("ovr_phu_3");
  var ovr_phu_4 = getItem("ovr_phu_4");
  var ovr_phu_5 = getItem("ovr_phu_5");
  var ovr_phu_6 = getItem("ovr_phu_6");
  var ovr_phu_7 = getItem("ovr_phu_7");
  var ovr_phu_8 = getItem("ovr_phu_8");
  var ovr_phu_9 = getItem("ovr_phu_9");
  var ovr_phu_10 = getItem("ovr_phu_10");
  var ovr_phu_11 = getItem("ovr_phu_11");
  var ovr_phu_12 = getItem("ovr_phu_12");
  var ovr_phu_13 = getItem("ovr_phu_13");
  var ovr_phu_14 = getItem("ovr_phu_14");
  var ovr_phu_15 = getItem("ovr_phu_15");
  var ovr_phu_16 = getItem("ovr_phu_16");
  var ovr_phu_17 = getItem("ovr_phu_17");
  var ovr_phu_18 = getItem("ovr_phu_18");
  var ovr_phu_19 = getItem("ovr_phu_19");
  var ovr_phu_20 = getItem("ovr_phu_20");
  var ovr_phu_21 = getItem("ovr_phu_21");
  var ovr_phu_22 = getItem("ovr_phu_22");
  var ovr_phu_23 = getItem("ovr_phu_23");
  var ovr_phu_24 = getItem("ovr_phu_24");
  var ovr_phu_25 = getItem("ovr_phu_25");
  var ovr_phu_26 = getItem("ovr_phu_26");
  var ovr_phu_27 = getItem("ovr_phu_27");
  var ovr_phu_28 = getItem("ovr_phu_28");
  var ovr_phu_29 = getItem("ovr_phu_29");
  var ovr_phu_30 = getItem("ovr_phu_30");
  var ovr_phu_31 = getItem("ovr_phu_31");
  var ovr_phu_32 = getItem("ovr_phu_32");
  var ovr_phu_33 = getItem("ovr_phu_33");
  var ovr_phu_34 = getItem("ovr_phu_34");
  ovr = parseInt(ovr) + parseInt(ovr_tc);
  setItem("ovr", ovr);
  var thenangcap = getItem("thenangcap");
  ovr_phu_1 = parseInt(ovr_phu_1) + parseInt(ovr_tc);
  setItem("ovr_phu_1", ovr_phu_1);
  ovr_phu_2 = parseInt(ovr_phu_2) + parseInt(ovr_tc);
  setItem("ovr_phu_2", ovr_phu_2);
  ovr_phu_3 = parseInt(ovr_phu_3) + parseInt(ovr_tc);
  setItem("ovr_phu_3", ovr_phu_3);
  ovr_phu_4 = parseInt(ovr_phu_4) + parseInt(ovr_tc);
  setItem("ovr_phu_4", ovr_phu_4);
  ovr_phu_5 = parseInt(ovr_phu_5) + parseInt(ovr_tc);
  setItem("ovr_phu_5", ovr_phu_5);
  ovr_phu_6 = parseInt(ovr_phu_6) + parseInt(ovr_tc);
  setItem("ovr_phu_6", ovr_phu_6);
  ovr_phu_7 = parseInt(ovr_phu_7) + parseInt(ovr_tc);
  setItem("ovr_phu_7", ovr_phu_7);
  ovr_phu_8 = parseInt(ovr_phu_8) + parseInt(ovr_tc);
  setItem("ovr_phu_8", ovr_phu_8);
  ovr_phu_9 = parseInt(ovr_phu_9) + parseInt(ovr_tc);
  setItem("ovr_phu_9", ovr_phu_9);
  ovr_phu_10 = parseInt(ovr_phu_10) + parseInt(ovr_tc);
  setItem("ovr_phu_10", ovr_phu_10);
  ovr_phu_11 = parseInt(ovr_phu_11) + parseInt(ovr_tc);
  setItem("ovr_phu_11", ovr_phu_11);
  ovr_phu_12 = parseInt(ovr_phu_12) + parseInt(ovr_tc);
  setItem("ovr_phu_12", ovr_phu_12);
  ovr_phu_13 = parseInt(ovr_phu_13) + parseInt(ovr_tc);
  setItem("ovr_phu_13", ovr_phu_13);
  ovr_phu_14 = parseInt(ovr_phu_14) + parseInt(ovr_tc);
  setItem("ovr_phu_14", ovr_phu_14);
  ovr_phu_15 = parseInt(ovr_phu_15) + parseInt(ovr_tc);
  setItem("ovr_phu_15", ovr_phu_15);
  ovr_phu_16 = parseInt(ovr_phu_16) + parseInt(ovr_tc);
  setItem("ovr_phu_16", ovr_phu_16);
  ovr_phu_17 = parseInt(ovr_phu_17) + parseInt(ovr_tc);
  setItem("ovr_phu_17", ovr_phu_17);
  ovr_phu_18 = parseInt(ovr_phu_18) + parseInt(ovr_tc);
  setItem("ovr_phu_18", ovr_phu_18);
  ovr_phu_19 = parseInt(ovr_phu_19) + parseInt(ovr_tc);
  setItem("ovr_phu_19", ovr_phu_19);
  ovr_phu_20 = parseInt(ovr_phu_20) + parseInt(ovr_tc);
  setItem("ovr_phu_20", ovr_phu_20);
  ovr_phu_21 = parseInt(ovr_phu_21) + parseInt(ovr_tc);
  setItem("ovr_phu_21", ovr_phu_21);
  ovr_phu_22 = parseInt(ovr_phu_22) + parseInt(ovr_tc);
  setItem("ovr_phu_22", ovr_phu_22);
  ovr_phu_23 = parseInt(ovr_phu_23) + parseInt(ovr_tc);
  setItem("ovr_phu_23", ovr_phu_23);
  ovr_phu_24 = parseInt(ovr_phu_24) + parseInt(ovr_tc);
  setItem("ovr_phu_24", ovr_phu_24);
  ovr_phu_25 = parseInt(ovr_phu_25) + parseInt(ovr_tc);
  setItem("ovr_phu_25", ovr_phu_25);
  ovr_phu_26 = parseInt(ovr_phu_26) + parseInt(ovr_tc);
  setItem("ovr_phu_26", ovr_phu_26);
  ovr_phu_27 = parseInt(ovr_phu_27) + parseInt(ovr_tc);
  setItem("ovr_phu_27", ovr_phu_27);
  ovr_phu_28 = parseInt(ovr_phu_28) + parseInt(ovr_tc);
  setItem("ovr_phu_28", ovr_phu_28);
  ovr_phu_29 = parseInt(ovr_phu_29) + parseInt(ovr_tc);
  setItem("ovr_phu_29", ovr_phu_29);
  ovr_phu_30 = parseInt(ovr_phu_30) + parseInt(ovr_tc);
  setItem("ovr_phu_30", ovr_phu_30);
  ovr_phu_31 = parseInt(ovr_phu_31) + parseInt(ovr_tc);
  setItem("ovr_phu_31", ovr_phu_31);
  ovr_phu_32 = parseInt(ovr_phu_32) + parseInt(ovr_tc);
  setItem("ovr_phu_32", ovr_phu_32);
  ovr_phu_33 = parseInt(ovr_phu_33) + parseInt(ovr_tc);
  setItem("ovr_phu_33", ovr_phu_33);
  ovr_phu_34 = parseInt(ovr_phu_34) + parseInt(ovr_tc);
  setItem("ovr_phu_34", ovr_phu_34);
  $(".txt_status").html("Nâng Cấp Vượt Bậc Thành Công");
  setTimeout(function () {
    $("#confetti").css("display", "block");
    setTimeout(start_confetti, 0);
    $(".txt_updown").html(
      "<font style='font-size:2.5vh'><font color='green'>▲</font>+" +
        ovr_tc +
        "</font>"
    );
  }, 2200);
  setTimeout(load_info_nc, 2200);
  setTimeout(function () {
    $(".btn_nangcap").css("display", "none");
    $(".btn_hoantat").css("display", "block").removeAttr("disabled");
  }, 3700);
  var tylethenangcap = parseInt(Math.random() * 100) + 1;
  var tylethebaove = parseInt(Math.random() * 100) + 1;
  if (grade == grade_1) {
    grade = grade_2;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 0.3;
    setItem("price", price);
    if (tylethenangcap <= 1) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 1) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_2) {
    grade = grade_3;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 0.6;
    setItem("price", price);
    if (tylethenangcap <= 1) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 1) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_3) {
    grade = grade_4;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 1.2;
    setItem("price", price);
    if (tylethenangcap <= 2) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 5) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_4) {
    grade = grade_5;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 1.6;
    setItem("price", price);
    if (tylethenangcap <= 2) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 5) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_5) {
    grade = grade_6;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 2;
    setItem("price", price);
    if (tylethenangcap <= 10) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
  } else if (grade == grade_6) {
    grade = grade_7;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 2.5;
    setItem("price", price);
    if (tylethenangcap <= 15) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 10) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_7) {
    grade = grade_8;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 3;
    setItem("price", price);
    thenangcap = parseInt(thenangcap) + parseInt("1");
    setItem("thenangcap", thenangcap);
    if (tylethebaove <= 80) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_8) {
    grade = grade_9;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 3.5;
    setItem("price", price);
    thenangcap = parseInt(thenangcap) + parseInt("1");
    setItem("thenangcap", thenangcap);
    if (tylethebaove <= 80) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_9) {
    grade = grade_10;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 5;
    setItem("price", price);
  }
}
//
function xuly_nc_thanhcong() {
  var ovr_tc = getOtem("ovr_tc");
  var grade = getItem("grade");
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_phu_1 = getItem("ovr_phu_1");
  var ovr_phu_2 = getItem("ovr_phu_2");
  var ovr_phu_3 = getItem("ovr_phu_3");
  var ovr_phu_4 = getItem("ovr_phu_4");
  var ovr_phu_5 = getItem("ovr_phu_5");
  var ovr_phu_6 = getItem("ovr_phu_6");
  var ovr_phu_7 = getItem("ovr_phu_7");
  var ovr_phu_8 = getItem("ovr_phu_8");
  var ovr_phu_9 = getItem("ovr_phu_9");
  var ovr_phu_10 = getItem("ovr_phu_10");
  var ovr_phu_11 = getItem("ovr_phu_11");
  var ovr_phu_12 = getItem("ovr_phu_12");
  var ovr_phu_13 = getItem("ovr_phu_13");
  var ovr_phu_14 = getItem("ovr_phu_14");
  var ovr_phu_15 = getItem("ovr_phu_15");
  var ovr_phu_16 = getItem("ovr_phu_16");
  var ovr_phu_17 = getItem("ovr_phu_17");
  var ovr_phu_18 = getItem("ovr_phu_18");
  var ovr_phu_19 = getItem("ovr_phu_19");
  var ovr_phu_20 = getItem("ovr_phu_20");
  var ovr_phu_21 = getItem("ovr_phu_21");
  var ovr_phu_22 = getItem("ovr_phu_22");
  var ovr_phu_23 = getItem("ovr_phu_23");
  var ovr_phu_24 = getItem("ovr_phu_24");
  var ovr_phu_25 = getItem("ovr_phu_25");
  var ovr_phu_26 = getItem("ovr_phu_26");
  var ovr_phu_27 = getItem("ovr_phu_27");
  var ovr_phu_28 = getItem("ovr_phu_28");
  var ovr_phu_29 = getItem("ovr_phu_29");
  var ovr_phu_30 = getItem("ovr_phu_30");
  var ovr_phu_31 = getItem("ovr_phu_31");
  var ovr_phu_32 = getItem("ovr_phu_32");
  var ovr_phu_33 = getItem("ovr_phu_33");
  var ovr_phu_34 = getItem("ovr_phu_34");
  ovr = parseInt(ovr) + parseInt(ovr_tc);
  setItem("ovr", ovr);
  var thenangcap = getItem("thenangcap");
  ovr_phu_1 = parseInt(ovr_phu_1) + parseInt(ovr_tc);
  setItem("ovr_phu_1", ovr_phu_1);
  ovr_phu_2 = parseInt(ovr_phu_2) + parseInt(ovr_tc);
  setItem("ovr_phu_2", ovr_phu_2);
  ovr_phu_3 = parseInt(ovr_phu_3) + parseInt(ovr_tc);
  setItem("ovr_phu_3", ovr_phu_3);
  ovr_phu_4 = parseInt(ovr_phu_4) + parseInt(ovr_tc);
  setItem("ovr_phu_4", ovr_phu_4);
  ovr_phu_5 = parseInt(ovr_phu_5) + parseInt(ovr_tc);
  setItem("ovr_phu_5", ovr_phu_5);
  ovr_phu_6 = parseInt(ovr_phu_6) + parseInt(ovr_tc);
  setItem("ovr_phu_6", ovr_phu_6);
  ovr_phu_7 = parseInt(ovr_phu_7) + parseInt(ovr_tc);
  setItem("ovr_phu_7", ovr_phu_7);
  ovr_phu_8 = parseInt(ovr_phu_8) + parseInt(ovr_tc);
  setItem("ovr_phu_8", ovr_phu_8);
  ovr_phu_9 = parseInt(ovr_phu_9) + parseInt(ovr_tc);
  setItem("ovr_phu_9", ovr_phu_9);
  ovr_phu_10 = parseInt(ovr_phu_10) + parseInt(ovr_tc);
  setItem("ovr_phu_10", ovr_phu_10);
  ovr_phu_11 = parseInt(ovr_phu_11) + parseInt(ovr_tc);
  setItem("ovr_phu_11", ovr_phu_11);
  ovr_phu_12 = parseInt(ovr_phu_12) + parseInt(ovr_tc);
  setItem("ovr_phu_12", ovr_phu_12);
  ovr_phu_13 = parseInt(ovr_phu_13) + parseInt(ovr_tc);
  setItem("ovr_phu_13", ovr_phu_13);
  ovr_phu_14 = parseInt(ovr_phu_14) + parseInt(ovr_tc);
  setItem("ovr_phu_14", ovr_phu_14);
  ovr_phu_15 = parseInt(ovr_phu_15) + parseInt(ovr_tc);
  setItem("ovr_phu_15", ovr_phu_15);
  ovr_phu_16 = parseInt(ovr_phu_16) + parseInt(ovr_tc);
  setItem("ovr_phu_16", ovr_phu_16);
  ovr_phu_17 = parseInt(ovr_phu_17) + parseInt(ovr_tc);
  setItem("ovr_phu_17", ovr_phu_17);
  ovr_phu_18 = parseInt(ovr_phu_18) + parseInt(ovr_tc);
  setItem("ovr_phu_18", ovr_phu_18);
  ovr_phu_19 = parseInt(ovr_phu_19) + parseInt(ovr_tc);
  setItem("ovr_phu_19", ovr_phu_19);
  ovr_phu_20 = parseInt(ovr_phu_20) + parseInt(ovr_tc);
  setItem("ovr_phu_20", ovr_phu_20);
  ovr_phu_21 = parseInt(ovr_phu_21) + parseInt(ovr_tc);
  setItem("ovr_phu_21", ovr_phu_21);
  ovr_phu_22 = parseInt(ovr_phu_22) + parseInt(ovr_tc);
  setItem("ovr_phu_22", ovr_phu_22);
  ovr_phu_23 = parseInt(ovr_phu_23) + parseInt(ovr_tc);
  setItem("ovr_phu_23", ovr_phu_23);
  ovr_phu_24 = parseInt(ovr_phu_24) + parseInt(ovr_tc);
  setItem("ovr_phu_24", ovr_phu_24);
  ovr_phu_25 = parseInt(ovr_phu_25) + parseInt(ovr_tc);
  setItem("ovr_phu_25", ovr_phu_25);
  ovr_phu_26 = parseInt(ovr_phu_26) + parseInt(ovr_tc);
  setItem("ovr_phu_26", ovr_phu_26);
  ovr_phu_27 = parseInt(ovr_phu_27) + parseInt(ovr_tc);
  setItem("ovr_phu_27", ovr_phu_27);
  ovr_phu_28 = parseInt(ovr_phu_28) + parseInt(ovr_tc);
  setItem("ovr_phu_28", ovr_phu_28);
  ovr_phu_29 = parseInt(ovr_phu_29) + parseInt(ovr_tc);
  setItem("ovr_phu_29", ovr_phu_29);
  ovr_phu_30 = parseInt(ovr_phu_30) + parseInt(ovr_tc);
  setItem("ovr_phu_30", ovr_phu_30);
  ovr_phu_31 = parseInt(ovr_phu_31) + parseInt(ovr_tc);
  setItem("ovr_phu_31", ovr_phu_31);
  ovr_phu_32 = parseInt(ovr_phu_32) + parseInt(ovr_tc);
  setItem("ovr_phu_32", ovr_phu_32);
  ovr_phu_33 = parseInt(ovr_phu_33) + parseInt(ovr_tc);
  setItem("ovr_phu_33", ovr_phu_33);
  ovr_phu_34 = parseInt(ovr_phu_34) + parseInt(ovr_tc);
  setItem("ovr_phu_34", ovr_phu_34);
  $(".txt_status").html("Nâng Cấp Thành Công");
  setTimeout(function () {
    $("#confetti").css("display", "block");
    setTimeout(start_confetti, 0);
    $(".txt_updown").html(
      "<font style='font-size:2.5vh'><font color='green'>▲</font>+" +
        ovr_tc +
        "</font>"
    );
  }, 2200);
  setTimeout(load_info_nc, 2200);
  setTimeout(function () {
    $(".btn_nangcap").css("display", "none");
    $(".btn_hoantat").css("display", "block").removeAttr("disabled");
  }, 3700);
  var tylethenangcap = parseInt(Math.random() * 100) + 1;
  var tylethebaove = parseInt(Math.random() * 100) + 1;
  var tyle_c = parseInt(Math.random() * 100) + 1;
  var sudungthebaove = getItem("sudungthebaove");
  var thenangcap = getItem("thenangcap");
  var thebaove = getItem("thebaove");
  if (sudungthebaove == "1") {
    sudungthebaove = 0;
    setItem("sudungthebaove", sudungthebaove);
  }
  if (tyle_c <= 22) {
    setTimeout(hieuungnangcap, 3900);
    setTimeout(tylevuotbac, 4200);
  }
  var tylethenangcap = parseInt(Math.random() * 100) + 1;
  var tylethebaove = parseInt(Math.random() * 100) + 1;
  if (grade == grade_1) {
    grade = grade_2;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 0.3;
    setItem("price", price);
    if (tylethenangcap <= 1) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 1) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_2) {
    grade = grade_3;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 0.6;
    setItem("price", price);
    if (tylethenangcap <= 1) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 100) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_3) {
    grade = grade_4;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 1.2;
    setItem("price", price);
    if (tylethenangcap <= 2) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 5) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_4) {
    grade = grade_5;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 1.6;
    setItem("price", price);
    if (tylethenangcap <= 2) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 5) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_5) {
    grade = grade_6;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 2;
    setItem("price", price);
    if (tylethenangcap <= 4) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 10) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_6) {
    grade = grade_7;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 2.5;
    setItem("price", price);
    if (tylethenangcap <= 15) {
      thenangcap = parseInt(thenangcap) + parseInt("1");
      setItem("thenangcap", thenangcap);
    }
    if (tylethebaove <= 10) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_7) {
    grade = grade_8;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 3;
    setItem("price", price);
    thenangcap = parseInt(thenangcap) + parseInt("1");
    setItem("thenangcap", thenangcap);
    if (tylethebaove <= 80) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_8) {
    grade = grade_9;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 3.5;
    setItem("price", price);
    thenangcap = parseInt(thenangcap) + parseInt("1");
    setItem("thenangcap", thenangcap);
    if (tylethebaove <= 80) {
      thebaove = parseInt(thebaove) + parseInt("1");
      setItem("thebaove", thebaove);
    }
  } else if (grade == grade_9) {
    grade = grade_10;
    setItem("grade", grade);
    price = parseInt(price) + parseInt(price) * 5;
    setItem("price", price);
  }
}

function sudungthebaove_check() {
  $(".btn_nangcap, .btn_hoantat").attr("disabled", true);
  var sudungthebaove = getItem("sudungthebaove");
  if (sudungthebaove == "1") {
    sudungthebaove = 0;
    setItem("sudungthebaove", sudungthebaove);
  }
  grade_bandau = getItem("grade_bandau");
  var random = parseInt(Math.random() * 100) + 1;
  if (random <= 20) {
    ph_thanhcong_4();
  } else if (random <= 40) {
    ph_thanhcong_3();
  } else if (random <= 80) {
    ph_thanhcong_2();
  } else {
    xuly_nc_thatbai();
  }
  setTimeout(hieuungnangcap, 4000);
  if (grade_bandau == grade_5) {
    setTimeout(ph_thanhcong_5, 4800);
    var the = "+5";
  } else if (grade_bandau == grade_6) {
    setTimeout(ph_thanhcong_6, 4800);
    var the = "+6";
  } else if (grade_bandau == grade_7) {
    setTimeout(ph_thanhcong_7, 4800);
    var the = "+7";
  } else if (grade_bandau == grade_8) {
    var the = "+8";
    setTimeout(ph_thanhcong_8, 4800);
  } else if (grade_bandau == grade_9) {
    var the = "+9";
    setTimeout(ph_thanhcong_9, 4800);
  }
  var chisotru = 0;

  setTimeout(function () {
    $(".txt_status").html("Phục Hồi Thành Công " + the);
    $(".txt_updown").html(
      "<font style='font-size:2.5vh'><font color='red'>▼</font>-" +
        chisotru +
        "</font>"
    );
  }, 4800);
}
function xuly_nc_thatbai() {
  var ovr_tb = getOtem("ovr_tb");
  var grade = getItem("grade");
  var price = getItem("price");
  var grade_max = getOtem("grade_max");
  var price_bandau = getItem("price_bandau");
  var ovr = getItem("ovr");
  var ovr_phu_1 = getItem("ovr_phu_1");
  var ovr_phu_2 = getItem("ovr_phu_2");
  var ovr_phu_3 = getItem("ovr_phu_3");
  var ovr_phu_4 = getItem("ovr_phu_4");
  var ovr_phu_5 = getItem("ovr_phu_5");
  var ovr_phu_6 = getItem("ovr_phu_6");
  var ovr_phu_7 = getItem("ovr_phu_7");
  var ovr_phu_8 = getItem("ovr_phu_8");
  var ovr_phu_9 = getItem("ovr_phu_9");
  var ovr_phu_10 = getItem("ovr_phu_10");
  var ovr_phu_11 = getItem("ovr_phu_11");
  var ovr_phu_12 = getItem("ovr_phu_12");
  var ovr_phu_13 = getItem("ovr_phu_13");
  var ovr_phu_14 = getItem("ovr_phu_14");
  var ovr_phu_15 = getItem("ovr_phu_15");
  var ovr_phu_16 = getItem("ovr_phu_16");
  var ovr_phu_17 = getItem("ovr_phu_17");
  var ovr_phu_18 = getItem("ovr_phu_18");
  var ovr_phu_19 = getItem("ovr_phu_19");
  var ovr_phu_20 = getItem("ovr_phu_20");
  var ovr_phu_21 = getItem("ovr_phu_21");
  var ovr_phu_22 = getItem("ovr_phu_22");
  var ovr_phu_23 = getItem("ovr_phu_23");
  var ovr_phu_24 = getItem("ovr_phu_24");
  var ovr_phu_25 = getItem("ovr_phu_25");
  var ovr_phu_26 = getItem("ovr_phu_26");
  var ovr_phu_27 = getItem("ovr_phu_27");
  var ovr_phu_28 = getItem("ovr_phu_28");
  var ovr_phu_29 = getItem("ovr_phu_29");
  var ovr_phu_30 = getItem("ovr_phu_30");
  var ovr_phu_31 = getItem("ovr_phu_31");
  var ovr_phu_32 = getItem("ovr_phu_32");
  var ovr_phu_33 = getItem("ovr_phu_33");
  var ovr_phu_34 = getItem("ovr_phu_34");
  ovr = parseInt(ovr) + parseInt(ovr_tb);
  setItem("ovr", ovr);
  ovr_phu_1 = parseInt(ovr_phu_1) + parseInt(ovr_tb);
  setItem("ovr_phu_1", ovr_phu_1);
  ovr_phu_2 = parseInt(ovr_phu_2) + parseInt(ovr_tb);
  setItem("ovr_phu_2", ovr_phu_2);
  ovr_phu_3 = parseInt(ovr_phu_3) + parseInt(ovr_tb);
  setItem("ovr_phu_3", ovr_phu_3);
  ovr_phu_4 = parseInt(ovr_phu_4) + parseInt(ovr_tb);
  setItem("ovr_phu_4", ovr_phu_4);
  ovr_phu_5 = parseInt(ovr_phu_5) + parseInt(ovr_tb);
  setItem("ovr_phu_5", ovr_phu_5);
  ovr_phu_6 = parseInt(ovr_phu_6) + parseInt(ovr_tb);
  setItem("ovr_phu_6", ovr_phu_6);
  ovr_phu_7 = parseInt(ovr_phu_7) + parseInt(ovr_tb);
  setItem("ovr_phu_7", ovr_phu_7);
  ovr_phu_8 = parseInt(ovr_phu_8) + parseInt(ovr_tb);
  setItem("ovr_phu_8", ovr_phu_8);
  ovr_phu_9 = parseInt(ovr_phu_9) + parseInt(ovr_tb);
  setItem("ovr_phu_9", ovr_phu_9);
  ovr_phu_10 = parseInt(ovr_phu_10) + parseInt(ovr_tb);
  setItem("ovr_phu_10", ovr_phu_10);
  ovr_phu_11 = parseInt(ovr_phu_11) + parseInt(ovr_tb);
  setItem("ovr_phu_11", ovr_phu_11);
  ovr_phu_12 = parseInt(ovr_phu_12) + parseInt(ovr_tb);
  setItem("ovr_phu_12", ovr_phu_12);
  ovr_phu_13 = parseInt(ovr_phu_13) + parseInt(ovr_tb);
  setItem("ovr_phu_13", ovr_phu_13);
  ovr_phu_14 = parseInt(ovr_phu_14) + parseInt(ovr_tb);
  setItem("ovr_phu_14", ovr_phu_14);
  ovr_phu_15 = parseInt(ovr_phu_15) + parseInt(ovr_tb);
  setItem("ovr_phu_15", ovr_phu_15);
  ovr_phu_16 = parseInt(ovr_phu_16) + parseInt(ovr_tb);
  setItem("ovr_phu_16", ovr_phu_16);
  ovr_phu_17 = parseInt(ovr_phu_17) + parseInt(ovr_tb);
  setItem("ovr_phu_17", ovr_phu_17);
  ovr_phu_18 = parseInt(ovr_phu_18) + parseInt(ovr_tb);
  setItem("ovr_phu_18", ovr_phu_18);
  ovr_phu_19 = parseInt(ovr_phu_19) + parseInt(ovr_tb);
  setItem("ovr_phu_19", ovr_phu_19);
  ovr_phu_20 = parseInt(ovr_phu_20) + parseInt(ovr_tb);
  setItem("ovr_phu_20", ovr_phu_20);
  ovr_phu_21 = parseInt(ovr_phu_21) + parseInt(ovr_tb);
  setItem("ovr_phu_21", ovr_phu_21);
  ovr_phu_22 = parseInt(ovr_phu_22) + parseInt(ovr_tb);
  setItem("ovr_phu_22", ovr_phu_22);
  ovr_phu_23 = parseInt(ovr_phu_23) + parseInt(ovr_tb);
  setItem("ovr_phu_23", ovr_phu_23);
  ovr_phu_24 = parseInt(ovr_phu_24) + parseInt(ovr_tb);
  setItem("ovr_phu_24", ovr_phu_24);
  ovr_phu_25 = parseInt(ovr_phu_25) + parseInt(ovr_tb);
  setItem("ovr_phu_25", ovr_phu_25);
  ovr_phu_26 = parseInt(ovr_phu_26) + parseInt(ovr_tb);
  setItem("ovr_phu_26", ovr_phu_26);
  ovr_phu_27 = parseInt(ovr_phu_27) + parseInt(ovr_tb);
  setItem("ovr_phu_27", ovr_phu_27);
  ovr_phu_28 = parseInt(ovr_phu_28) + parseInt(ovr_tb);
  setItem("ovr_phu_28", ovr_phu_28);
  ovr_phu_29 = parseInt(ovr_phu_29) + parseInt(ovr_tb);
  setItem("ovr_phu_29", ovr_phu_29);
  ovr_phu_30 = parseInt(ovr_phu_30) + parseInt(ovr_tb);
  setItem("ovr_phu_30", ovr_phu_30);
  ovr_phu_31 = parseInt(ovr_phu_31) + parseInt(ovr_tb);
  setItem("ovr_phu_31", ovr_phu_31);
  ovr_phu_32 = parseInt(ovr_phu_32) + parseInt(ovr_tb);
  setItem("ovr_phu_32", ovr_phu_32);
  ovr_phu_33 = parseInt(ovr_phu_33) + parseInt(ovr_tb);
  setItem("ovr_phu_33", ovr_phu_33);
  ovr_phu_34 = parseInt(ovr_phu_34) + parseInt(ovr_tb);
  setItem("ovr_phu_34", ovr_phu_34);
  $(".txt_status").html("Nâng Cấp Thất Bại");
  var sudungthebaove = getItem("sudungthebaove");
  if (sudungthebaove == "1") {
    sudungthebaove = 0;
    setItem("sudungthebaove", sudungthebaove);
  }
  setTimeout(load_info_nc, 2500);
  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2550);
  setTimeout(function () {
    $(".main_nc_in").removeClass("nc_thatbai");
  }, 3600);
  setTimeout(function () {
    $(".btn_nangcap").css("display", "none");
    $(".btn_hoantat").css("display", "block").removeAttr("disabled");
  }, 3700);
  grade_bandau = grade;
  setItem("grade_bandau", grade);
  if (grade_bandau == grade_1) {
    chisotru = -0;
    setOtem("ovr_review", chisotru);
    capthetru = 0;
  }
  if (grade_bandau == grade_2) {
    chisotru = -1;
    setOtem("ovr_review", chisotru);
    capthetru = 1;
  } else if (grade_bandau == grade_3) {
    chisotru = -2;
    setOtem("ovr_review", chisotru);
    capthetru = 2;
  } else if (grade_bandau == grade_4) {
    chisotru = -4;
    setOtem("ovr_review", chisotru);
    capthetru = 3;
  } else if (grade_bandau == grade_5) {
    chisotru = -6;
    setOtem("ovr_review", chisotru);
    capthetru = 4;
  } else if (grade_bandau == grade_6) {
    chisotru = -8;
    setOtem("ovr_review", chisotru);
    capthetru = 5;
  } else if (grade_bandau == grade_7) {
    chisotru = -11;
    setOtem("ovr_review", chisotru);
    capthetru = 6;
  } else if (grade_bandau == grade_8) {
    chisotru = -15;
    setOtem("ovr_review", chisotru);
    capthetru = 7;
  } else if (grade_bandau == grade_9) {
    chisotru = -19;
    setOtem("ovr_review", chisotru);
    capthetru = 8;
  } else if (grade_bandau == grade_10) {
    chisotru = -24;
    setOtem("ovr_review", chisotru);
    capthetru = 9;
  }
  grade_max = grade;
  setOtem("grade_max", grade_max);
  price = price_bandau;
  setItem("price", price);
  grade = grade_1;
  setItem("grade", grade);
  if (grade == grade_1) {
    $(".txt_grade_2").html(
      "<font style='font-size:2.5vh'>-" + capthetru + "</font>"
    );
    $(".txt_updown").html(
      "<font style='font-size:2.5vh'>" + chisotru + "</font>"
    );
  }
}

function thatbai() {
  $(".txt_status").html("Nâng Cấp Vượt Bậc Thất Bại");

  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2550);

  setTimeout(function () {
    $(".btn_nangcap").css("display", "none");
    $(".btn_hoantat").css("display", "block").removeAttr("disabled");
    $(".main_nc_in").removeClass("nc_thatbai");
  }, 3600);
}

function ph_thanhcong_2() {
  xuly_nc_thatbai();
  var grade_bandau = getItem("grade_bandau");
  if (grade_bandau == grade_3) {
    chisotru = -1;
    setItem("chisotru", chisotru);
    capthetru = 2;
  } else if (grade_bandau == grade_4) {
    chisotru = -3;
    setItem("chisotru", chisotru);
    capthetru = 3;
  } else if (grade_bandau == grade_5) {
    chisotru = -5;
    setItem("chisotru", chisotru);
    capthetru = 4;
  } else if (grade_bandau == grade_6) {
    chisotru = -7;
    setItem("chisotru", chisotru);
    capthetru = 5;
  } else if (grade_bandau == grade_7) {
    chisotru = -10;
    setItem("chisotru", chisotru);
    capthetru = 6;
  } else if (grade_bandau == grade_8) {
    chisotru = -14;
    setItem("chisotru", chisotru);
    capthetru = 7;
  } else if (grade_bandau == grade_9) {
    chisotru = -18;
    setItem("chisotru", chisotru);
    capthetru = 8;
  } else if (grade_bandau == grade_10) {
    chisotru = -23;
    setOtem("chisotru", ovr_review);
    capthetru = 9;
  }
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_tc = getOtem("ovr_tc");
  var price_bandau = getItem("price_bandau");
  ovr_tc = 1;
  setOtem("ovr_tc", ovr_tc);
  ovr = parseInt(ovr) + parseInt(ovr_tc);
  setItem("ovr", ovr);
  grade = grade_2;
  setItem("grade", grade);
  var q = parseInt(price_bandau) + parseInt(price_bandau) * 0.3;
  setItem("price", q);
  $(".txt_status").html("Nâng Cấp Thất Bại");
  $(".txt_grade_2").html(
    "<font style='font-size:2.5vh'>-" + capthetru + "</font>"
  );
  $(".txt_updown").html(
    "<font style='font-size:2.5vh'>" + chisotru + "</font>"
  );
  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2000);
  $(".face_div").animate({ paddingLeft: "1.5vh" }, 0);
  $(".grade_div").animate({ paddingLeft: "13vh" }, 0);
  setTimeout(load_info_nc, 2200);
  setTimeout(congchiso, 0);
}
function ph_thanhcong_3() {
  xuly_nc_thatbai();
  var grade_bandau = getItem("grade_bandau");
  if (grade_bandau == grade_4) {
    chisotru = -2;
    setItem("chisotru", chisotru);
    capthetru = 3;
  } else if (grade_bandau == grade_5) {
    chisotru = -4;
    setItem("chisotru", chisotru);
    capthetru = 4;
  } else if (grade_bandau == grade_6) {
    chisotru = -6;
    setItem("chisotru", chisotru);
    capthetru = 5;
  } else if (grade_bandau == grade_7) {
    chisotru = -9;
    setItem("chisotru", chisotru);
    capthetru = 6;
  } else if (grade_bandau == grade_8) {
    chisotru = -13;
    setItem("chisotru", chisotru);
    capthetru = 7;
  } else if (grade_bandau == grade_9) {
    chisotru = -17;
    setItem("chisotru", chisotru);
    capthetru = 8;
  } else if (grade_bandau == grade_10) {
    chisotru = -12;
    setItem("chisotru", chisotru);
    capthetru = 9;
  }
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_tc = getOtem("ovr_tc");
  var price_bandau = getItem("price_bandau");
  ovr_tc = 2;
  setOtem("ovr_tc", ovr_tc);
  ovr = parseInt(ovr) + parseInt(ovr_tc);
  setItem("ovr", ovr);
  grade = grade_3;
  setItem("grade", grade);
  var q = parseInt(price_bandau) + parseInt(price_bandau) * 0.3;
  var w = parseInt(q) + parseInt(q) * 0.6;
  setItem("price", w);
  $(".txt_status").html("Nâng Cấp Thất Bại");
  $(".txt_grade_2").html(
    "<font style='font-size:2.5vh'>-" + capthetru + "</font>"
  );
  $(".txt_updown").html(
    "<font style='font-size:2.5vh'>" + chisotru + "</font>"
  );
  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2000);
  $(".face_div").animate({ paddingLeft: "1.5vh" }, 0);
  $(".grade_div").animate({ paddingLeft: "13vh" }, 0);
  setTimeout(load_info_nc, 2200);
  setTimeout(congchiso, 0);
}
function ph_thanhcong_4() {
  xuly_nc_thatbai();
  var grade_bandau = getItem("grade_bandau");
  if (grade_bandau == grade_5) {
    chisotru = -2;
    setItem("chisotru", chisotru);
    capthetru = 4;
  } else if (grade_bandau == grade_6) {
    chisotru = -4;
    setItem("chisotru", chisotru);
    capthetru = 5;
  } else if (grade_bandau == grade_7) {
    chisotru = -7;
    setItem("chisotru", chisotru);
    capthetru = 6;
  } else if (grade_bandau == grade_8) {
    chisotru = -11;
    setItem("chisotru", chisotru);
    capthetru = 7;
  } else if (grade_bandau == grade_9) {
    chisotru = -15;
    setItem("chisotru", chisotru);
    capthetru = 8;
  } else if (grade_bandau == grade_10) {
    chisotru = -20;
    setItem("chisotru", chisotru);
    capthetru = 9;
  }
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_tc = getOtem("ovr_tc");
  var price_bandau = getItem("price_bandau");
  ovr_tc = 4;
  setOtem("ovr_tc", ovr_tc);
  ovr = parseInt(ovr) + parseInt(ovr_tc);
  setItem("ovr", ovr);
  grade = grade_4;
  setItem("grade", grade);
  var q = parseInt(price_bandau) + parseInt(price_bandau) * 0.3;
  var w = parseInt(q) + parseInt(q) * 0.6;
  var e = parseInt(w) + parseInt(w) * 1.2;
  setItem("price", e);
  $(".txt_status").html("Nâng Cấp Thất Bại");
  $(".txt_grade_2").html(
    "<font style='font-size:2.5vh'>-" + capthetru + "</font>"
  );
  $(".txt_updown").html(
    "<font style='font-size:2.5vh'>" + chisotru + "</font>"
  );
  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2000);
  $(".face_div").animate({ paddingLeft: "1.5vh" }, 0);
  $(".grade_div").animate({ paddingLeft: "13vh" }, 0);
  setTimeout(load_info_nc, 2200);
  setTimeout(congchiso, 0);
}
function ph_thanhcong_5() {
  xuly_nc_thatbai();
  var grade_bandau = getItem("grade_bandau");
  if (grade_bandau == grade_6) {
    chisotru = -2;
    setItem("chisotru", chisotru);
    capthetru = 5;
  } else if (grade_bandau == grade_7) {
    chisotru = -5;
    setItem("chisotru", chisotru);
    capthetru = 6;
  } else if (grade_bandau == grade_8) {
    chisotru = -9;
    setItem("chisotru", chisotru);
    capthetru = 7;
  } else if (grade_bandau == grade_9) {
    chisotru = -13;
    setItem("chisotru", chisotru);
    capthetru = 8;
  } else if (grade_bandau == grade_10) {
    chisotru = -18;
    setItem("chisotru", chisotru);
    capthetru = 9;
  }
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_tc = getOtem("ovr_tc");
  var price_bandau = getItem("price_bandau");
  ovr_tc = 6;
  setOtem("ovr_tc", ovr_tc);
  ovr = parseInt(ovr) + parseInt(ovr_tc);
  setItem("ovr", ovr);
  grade = grade_5;
  setItem("grade", grade);
  var q = parseInt(price_bandau) + parseInt(price_bandau) * 0.3;
  var w = parseInt(q) + parseInt(q) * 0.6;
  var e = parseInt(w) + parseInt(w) * 1.2;
  var r = parseInt(e) + parseInt(e) * 1.6;
  var t = parseInt(r) + parseInt(r) * 2;
  var y = parseInt(t) + parseInt(t) * 2.5;
  setItem("price", y);
  $(".txt_status").html("Nâng Cấp Thất Bại");
  $(".txt_grade_2").html(
    "<font style='font-size:2.5vh'>-" + capthetru + "</font>"
  );
  $(".txt_updown").html(
    "<font style='font-size:2.5vh'>" + chisotru + "</font>"
  );
  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2000);
  $(".face_div").animate({ paddingLeft: "1.5vh" }, 0);
  $(".grade_div").animate({ paddingLeft: "13vh" }, 0);
  setTimeout(load_info_nc, 2200);
  setTimeout(congchiso, 0);
}
function ph_thanhcong_6() {
  xuly_nc_thatbai();
  var grade_bandau = getItem("grade_bandau");
  if (grade_bandau == grade_7) {
    chisotru = -3;
    setItem("chisotru", chisotru);
    capthetru = 6;
  } else if (grade_bandau == grade_8) {
    chisotru = -7;
    setItem("chisotru", chisotru);
    capthetru = 7;
  } else if (grade_bandau == grade_9) {
    chisotru = -11;
    setItem("chisotru", chisotru);
    capthetru = 8;
  } else if (grade_bandau == grade_10) {
    chisotru = -16;
    setItem("chisotru", chisotru);
    capthetru = 9;
  }
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_tc = getOtem("ovr_tc");
  var price_bandau = getItem("price_bandau");
  ovr_tc = 8;
  setOtem("ovr_tc", ovr_tc);
  ovr = parseInt(ovr) + parseInt(ovr_tc);
  setItem("ovr", ovr);
  grade = grade_6;
  setItem("grade", grade);
  var q = parseInt(price_bandau) + parseInt(price_bandau) * 0.3;
  var w = parseInt(q) + parseInt(q) * 0.6;
  var e = parseInt(w) + parseInt(w) * 1.2;
  var r = parseInt(e) + parseInt(e) * 1.6;
  var t = parseInt(r) + parseInt(r) * 2;
  setItem("price", t);
  $(".txt_status").html("Nâng Cấp Thất Bại");
  $(".txt_grade_2").html(
    "<font style='font-size:2.5vh'>-" + capthetru + "</font>"
  );
  $(".txt_updown").html(
    "<font style='font-size:2.5vh'>" + chisotru + "</font>"
  );
  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2000);
  $(".face_div").animate({ paddingLeft: "1.5vh" }, 0);
  $(".grade_div").animate({ paddingLeft: "13vh" }, 0);
  setTimeout(load_info_nc, 2200);
  setTimeout(congchiso, 0);
}
function ph_thanhcong_7() {
  xuly_nc_thatbai();
  var grade_bandau = getItem("grade_bandau");
  if (grade_bandau == grade_8) {
    chisotru = -4;
    setItem("chisotru", chisotru);
    capthetru = 7;
  } else if (grade_bandau == grade_9) {
    chisotru = -8;
    setItem("chisotru", chisotru);
    capthetru = 8;
  } else if (grade_bandau == grade_10) {
    chisotru = -13;
    setItem("chisotru", chisotru);
    capthetru = 9;
  }
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_tc = getOtem("ovr_tc");
  var price_bandau = getItem("price_bandau");
  ovr_tc = 11;
  setOtem("ovr_tc", ovr_tc);
  ovr = parseInt(ovr) + parseInt(ovr_tc);
  setItem("ovr", ovr);
  grade = grade_7;
  setItem("grade", grade);
  var q = parseInt(price_bandau) + parseInt(price_bandau) * 0.3;
  var w = parseInt(q) + parseInt(q) * 0.6;
  var e = parseInt(w) + parseInt(w) * 1.2;
  var r = parseInt(e) + parseInt(e) * 1.6;
  var t = parseInt(r) + parseInt(r) * 2;
  var y = parseInt(t) + parseInt(t) * 2.5;
  setItem("price", y);
  $(".txt_status").html("Nâng Cấp Thất Bại");
  $(".txt_grade_2").html(
    "<font style='font-size:2.5vh'>-" + capthetru + "</font>"
  );
  $(".txt_updown").html(
    "<font style='font-size:2.5vh'>" + chisotru + "</font>"
  );
  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2000);
  $(".face_div").animate({ paddingLeft: "1.5vh" }, 0);
  $(".grade_div").animate({ paddingLeft: "13vh" }, 0);
  setTimeout(load_info_nc, 2200);
  setTimeout(congchiso, 0);
}
function ph_thanhcong_8() {
  xuly_nc_thatbai();
  var grade_bandau = getItem("grade_bandau");
  if (grade_bandau == grade_9) {
    chisotru = -4;
    setItem("chisotru", chisotru);
    capthetru = 8;
  } else if (grade_bandau == grade_10) {
    chisotru = -9;
    setItem("chisotru", chisotru);
    capthetru = 9;
  }
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_tc = getOtem("ovr_tc");
  var price_bandau = getItem("price_bandau");
  ovr_tc = 15;
  setOtem("ovr_tc", ovr_tc);
  ovr = parseInt(ovr) + parseInt(ovr_tc);
  setItem("ovr", ovr);
  grade = grade_8;
  setItem("grade", grade);
  var q = parseInt(price_bandau) + parseInt(price_bandau) * 0.3;
  var w = parseInt(q) + parseInt(q) * 0.6;
  var e = parseInt(w) + parseInt(w) * 1.2;
  var r = parseInt(e) + parseInt(e) * 1.6;
  var t = parseInt(r) + parseInt(r) * 2;
  var y = parseInt(t) + parseInt(t) * 2.5;
  var u = parseInt(y) + parseInt(y) * 3;
  setItem("price", u);
  $(".txt_status").html("Nâng Cấp Thất Bại");
  $(".txt_grade_2").html(
    "<font style='font-size:2.5vh'>-" + capthetru + "</font>"
  );
  $(".txt_updown").html(
    "<font style='font-size:2.5vh'>" + chisotru + "</font>"
  );
  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2000);
  $(".face_div").animate({ paddingLeft: "1.5vh" }, 0);
  $(".grade_div").animate({ paddingLeft: "13vh" }, 0);
  setTimeout(load_info_nc, 2200);
  setTimeout(congchiso, 0);
}
function ph_thanhcong_9() {
  xuly_nc_thatbai();
  var grade_bandau = getItem("grade_bandau");
  if (grade_bandau == grade_10) {
    chisotru = -5;
    setItem("chisotru", chisotru);
    capthetru = 1;
  }
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_tc = getOtem("ovr_tc");
  var price_bandau = getItem("price_bandau");
  ovr_tc = 19;
  setOtem("ovr_tc", ovr_tc);
  ovr = parseInt(ovr) + parseInt(ovr_tc);
  setItem("ovr", ovr);
  grade = grade_9;
  setItem("grade", grade);
  var q = parseInt(price_bandau) + parseInt(price_bandau) * 0.3;
  var w = parseInt(q) + parseInt(q) * 0.6;
  var e = parseInt(w) + parseInt(w) * 1.2;
  var r = parseInt(e) + parseInt(e) * 1.6;
  var t = parseInt(r) + parseInt(r) * 2;
  var y = parseInt(t) + parseInt(t) * 2.5;
  var u = parseInt(y) + parseInt(y) * 3;
  var i = parseInt(u) + parseInt(u) * 3.5;
  setItem("price", i);
  $(".txt_status").html("Nâng Cấp Thất Bại");
  $(".txt_grade_2").html(
    "<font style='font-size:2.5vh'>-" + capthetru + "</font>"
  );
  $(".txt_updown").html(
    "<font style='font-size:2.5vh'>" + chisotru + "</font>"
  );
  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2000);
  $(".face_div").animate({ paddingLeft: "1.5vh" }, 0);
  $(".grade_div").animate({ paddingLeft: "13vh" }, 0);
  setTimeout(load_info_nc, 2200);
  setTimeout(congchiso, 0);
}
function ph_thatbai() {
  var price = getItem("price");
  var ovr = getItem("ovr");
  var ovr_tc = getOtem("ovr_tc");
  $(".txt_status").html("☹ Failed recovery");
  $(".txt_updown").html(
    "<font style='font-size:2.5vh'><font color='red'>▼</font>-0</font>"
  );
  setTimeout(load_info_nc, 2200);
  setTimeout(function () {
    $(".main_nc_in").addClass("nc_thatbai");
  }, 2550);
  setTimeout(function () {
    $(".main_nc_in").removeClass("nc_thatbai");
  }, 3600);
  setTimeout(function () {
    $(".btn_phuchoi").css("display", "none");
    $(".btn_hoantat").css("display", "block").removeAttr("disabled");
  }, 4000);
}
function congchiso() {
  var ovr_phu_1 = getItem("ovr_phu_1");
  var ovr_phu_2 = getItem("ovr_phu_2");
  var ovr_phu_3 = getItem("ovr_phu_3");
  var ovr_phu_4 = getItem("ovr_phu_4");
  var ovr_phu_5 = getItem("ovr_phu_5");
  var ovr_phu_6 = getItem("ovr_phu_6");
  var ovr_phu_7 = getItem("ovr_phu_7");
  var ovr_phu_8 = getItem("ovr_phu_8");
  var ovr_phu_9 = getItem("ovr_phu_9");
  var ovr_phu_10 = getItem("ovr_phu_10");
  var ovr_phu_11 = getItem("ovr_phu_11");
  var ovr_phu_12 = getItem("ovr_phu_12");
  var ovr_phu_13 = getItem("ovr_phu_13");
  var ovr_phu_14 = getItem("ovr_phu_14");
  var ovr_phu_15 = getItem("ovr_phu_15");
  var ovr_phu_16 = getItem("ovr_phu_16");
  var ovr_phu_17 = getItem("ovr_phu_17");
  var ovr_phu_18 = getItem("ovr_phu_18");
  var ovr_phu_19 = getItem("ovr_phu_19");
  var ovr_phu_20 = getItem("ovr_phu_20");
  var ovr_phu_21 = getItem("ovr_phu_21");
  var ovr_phu_22 = getItem("ovr_phu_22");
  var ovr_phu_23 = getItem("ovr_phu_23");
  var ovr_phu_24 = getItem("ovr_phu_24");
  var ovr_phu_25 = getItem("ovr_phu_25");
  var ovr_phu_26 = getItem("ovr_phu_26");
  var ovr_phu_27 = getItem("ovr_phu_27");
  var ovr_phu_28 = getItem("ovr_phu_28");
  var ovr_phu_29 = getItem("ovr_phu_29");
  var ovr_phu_30 = getItem("ovr_phu_30");
  var ovr_phu_31 = getItem("ovr_phu_31");
  var ovr_phu_32 = getItem("ovr_phu_32");
  var ovr_phu_33 = getItem("ovr_phu_33");
  var ovr_phu_34 = getItem("ovr_phu_34");
  var ovr_tc = getOtem("ovr_tc");
  setTimeout(function () {
    $(".btn_phuchoi").css("display", "none");
    $(".btn_hoantat").css("display", "block").removeAttr("disabled");
  }, 3700);
  ovr_phu_1 = parseInt(ovr_phu_1) + parseInt(ovr_tc);
  setItem("ovr_phu_1", ovr_phu_1);
  ovr_phu_2 = parseInt(ovr_phu_2) + parseInt(ovr_tc);
  setItem("ovr_phu_2", ovr_phu_2);
  ovr_phu_3 = parseInt(ovr_phu_3) + parseInt(ovr_tc);
  setItem("ovr_phu_3", ovr_phu_3);
  ovr_phu_4 = parseInt(ovr_phu_4) + parseInt(ovr_tc);
  setItem("ovr_phu_4", ovr_phu_4);
  ovr_phu_5 = parseInt(ovr_phu_5) + parseInt(ovr_tc);
  setItem("ovr_phu_5", ovr_phu_5);
  ovr_phu_6 = parseInt(ovr_phu_6) + parseInt(ovr_tc);
  setItem("ovr_phu_6", ovr_phu_6);
  ovr_phu_7 = parseInt(ovr_phu_7) + parseInt(ovr_tc);
  setItem("ovr_phu_7", ovr_phu_7);
  ovr_phu_8 = parseInt(ovr_phu_8) + parseInt(ovr_tc);
  setItem("ovr_phu_8", ovr_phu_8);
  ovr_phu_9 = parseInt(ovr_phu_9) + parseInt(ovr_tc);
  setItem("ovr_phu_9", ovr_phu_9);
  ovr_phu_10 = parseInt(ovr_phu_10) + parseInt(ovr_tc);
  setItem("ovr_phu_10", ovr_phu_10);
  ovr_phu_11 = parseInt(ovr_phu_11) + parseInt(ovr_tc);
  setItem("ovr_phu_11", ovr_phu_11);
  ovr_phu_12 = parseInt(ovr_phu_12) + parseInt(ovr_tc);
  setItem("ovr_phu_12", ovr_phu_12);
  ovr_phu_13 = parseInt(ovr_phu_13) + parseInt(ovr_tc);
  setItem("ovr_phu_13", ovr_phu_13);
  ovr_phu_14 = parseInt(ovr_phu_14) + parseInt(ovr_tc);
  setItem("ovr_phu_14", ovr_phu_14);
  ovr_phu_15 = parseInt(ovr_phu_15) + parseInt(ovr_tc);
  setItem("ovr_phu_15", ovr_phu_15);
  ovr_phu_16 = parseInt(ovr_phu_16) + parseInt(ovr_tc);
  setItem("ovr_phu_16", ovr_phu_16);
  ovr_phu_17 = parseInt(ovr_phu_17) + parseInt(ovr_tc);
  setItem("ovr_phu_17", ovr_phu_17);
  ovr_phu_18 = parseInt(ovr_phu_18) + parseInt(ovr_tc);
  setItem("ovr_phu_18", ovr_phu_18);
  ovr_phu_19 = parseInt(ovr_phu_19) + parseInt(ovr_tc);
  setItem("ovr_phu_19", ovr_phu_19);
  ovr_phu_20 = parseInt(ovr_phu_20) + parseInt(ovr_tc);
  setItem("ovr_phu_20", ovr_phu_20);
  ovr_phu_21 = parseInt(ovr_phu_21) + parseInt(ovr_tc);
  setItem("ovr_phu_21", ovr_phu_21);
  ovr_phu_22 = parseInt(ovr_phu_22) + parseInt(ovr_tc);
  setItem("ovr_phu_22", ovr_phu_22);
  ovr_phu_23 = parseInt(ovr_phu_23) + parseInt(ovr_tc);
  setItem("ovr_phu_23", ovr_phu_23);
  ovr_phu_24 = parseInt(ovr_phu_24) + parseInt(ovr_tc);
  setItem("ovr_phu_24", ovr_phu_24);
  ovr_phu_25 = parseInt(ovr_phu_25) + parseInt(ovr_tc);
  setItem("ovr_phu_25", ovr_phu_25);
  ovr_phu_26 = parseInt(ovr_phu_26) + parseInt(ovr_tc);
  setItem("ovr_phu_26", ovr_phu_26);
  ovr_phu_27 = parseInt(ovr_phu_27) + parseInt(ovr_tc);
  setItem("ovr_phu_27", ovr_phu_27);
  ovr_phu_28 = parseInt(ovr_phu_28) + parseInt(ovr_tc);
  setItem("ovr_phu_28", ovr_phu_28);
  ovr_phu_29 = parseInt(ovr_phu_29) + parseInt(ovr_tc);
  setItem("ovr_phu_29", ovr_phu_29);
  ovr_phu_30 = parseInt(ovr_phu_30) + parseInt(ovr_tc);
  setItem("ovr_phu_30", ovr_phu_30);
  ovr_phu_31 = parseInt(ovr_phu_31) + parseInt(ovr_tc);
  setItem("ovr_phu_31", ovr_phu_31);
  ovr_phu_32 = parseInt(ovr_phu_32) + parseInt(ovr_tc);
  setItem("ovr_phu_32", ovr_phu_32);
  ovr_phu_33 = parseInt(ovr_phu_33) + parseInt(ovr_tc);
  setItem("ovr_phu_33", ovr_phu_33);
  ovr_phu_34 = parseInt(ovr_phu_34) + parseInt(ovr_tc);
  setItem("ovr_phu_34", ovr_phu_34);
}
