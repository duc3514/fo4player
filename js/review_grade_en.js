$(function () {
  var thebaove = getItem("thebaove");
  if (thebaove == "") {
    thebaove = 0;
    setItem("thebaove", thebaove);
  }
  var ten = getItem("ten");
  var ovr = getItem("ovr");
  var luong = getItem("luong");
  var ss = getItem("ss");
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
  var face = getItem("face");
  var vt = getItem("vt");
  var qg = getItem("qg");
  var chantrai = getItem("chantrai");
  var chanphai = getItem("chanphai");
  var chieucao = getItem("chieucao");
  var cannang = getItem("cannang");
  var chieucao = getItem("chieucao");
  var th = getItem("th");
  var team = getItem("team");
  var grade = getItem("grade");
  var price = getItem("price");
  var thenangcap = getItem("thenangcap");
  if (grade == "") {
    grade = "./thecong/CARD1.png";
    grade = grade_1;
    setItem("grade", grade);
  }
  $(".img_ss").attr("src", "./anh/anhcauthu/anh_2/" + ss + ".png?v=3");
  $(".txt_ten").html(ten);
  $(".txt_vt").html(vt).addClass(vt);
  $(".txt_cs").html(ovr);
  $(".txt_luong").html(luong);
  $(".txt_qg").html(qg);
  $(".img_face").attr("src", face);
  $(".img_grade").attr("src", grade);
  $(".txt_team").html(team);
  $(".txt_price").html(parseInt(price).toCurrencyString()).addClass(vt);
  if (qg == "Viet Nam") {
    $(".img_qg").attr("src", "./anh/Flag/VN.png");
  } else if (qg == "South Korea") {
    $(".img_qg").attr("src", "./anh/Flag/HQ.png");
  } else if (qg == "Thailand") {
    $(".img_qg").attr("src", "./anh/Flag/THA.png");
  } else if (qg == "China") {
    $(".img_qg").attr("src", "./anh/Flag/TQ.png");
  } else if (qg == "Indonesia") {
    $(".img_qg").attr("src", "./anh/Flag/IND.png");
  }
  $(".txt_luong").html(luong);
  $(".txt_chieucao").html(chieucao);
  $(".txt_cannang").html(cannang);
  $(".txt_th").html(th);
  $(".txt_chantrai").html(chantrai);
  $(".txt_chanphai").html(chanphai);
  if (parseInt(chantrai) > parseInt(chanphai)) {
    $(".bg_chanphai").addClass("no_active");
  } else if (parseInt(chantrai) < parseInt(chanphai)) {
    $(".bg_chantrai").addClass("no_active");
  }
  if (vt == "GK") {
    $(".ovr_nogk").css("display", "none");
    $(".ovr_gk").css("display", "inline-block");
  }
  $(".txt_ovr_phu_1").html(ovr_phu_1).attr("data-color", ovr_phu_1);
  $(".txt_ovr_phu_2").html(ovr_phu_2).attr("data-color", ovr_phu_2);
  $(".txt_ovr_phu_3").html(ovr_phu_3).attr("data-color", ovr_phu_3);
  $(".txt_ovr_phu_4").html(ovr_phu_4).attr("data-color", ovr_phu_4);
  $(".txt_ovr_phu_5").html(ovr_phu_5).attr("data-color", ovr_phu_5);
  $(".txt_ovr_phu_6").html(ovr_phu_6).attr("data-color", ovr_phu_6);
  $(".txt_ovr_phu_7").html(ovr_phu_7).attr("data-color", ovr_phu_7);
  $(".txt_ovr_phu_8").html(ovr_phu_8).attr("data-color", ovr_phu_8);
  $(".txt_ovr_phu_9").html(ovr_phu_9).attr("data-color", ovr_phu_9);
  $(".txt_ovr_phu_10").html(ovr_phu_10).attr("data-color", ovr_phu_10);
  $(".txt_ovr_phu_11").html(ovr_phu_11).attr("data-color", ovr_phu_11);
  $(".txt_ovr_phu_12").html(ovr_phu_12).attr("data-color", ovr_phu_12);
  $(".txt_ovr_phu_13").html(ovr_phu_13).attr("data-color", ovr_phu_13);
  $(".txt_ovr_phu_14").html(ovr_phu_14).attr("data-color", ovr_phu_14);
  $(".txt_ovr_phu_15").html(ovr_phu_15).attr("data-color", ovr_phu_15);
  $(".txt_ovr_phu_16").html(ovr_phu_16).attr("data-color", ovr_phu_16);
  $(".txt_ovr_phu_17").html(ovr_phu_17).attr("data-color", ovr_phu_17);
  $(".txt_ovr_phu_18").html(ovr_phu_18).attr("data-color", ovr_phu_18);
  $(".txt_ovr_phu_19").html(ovr_phu_19).attr("data-color", ovr_phu_19);
  $(".txt_ovr_phu_20").html(ovr_phu_20).attr("data-color", ovr_phu_20);
  $(".txt_ovr_phu_21").html(ovr_phu_21).attr("data-color", ovr_phu_21);
  $(".txt_ovr_phu_22").html(ovr_phu_22).attr("data-color", ovr_phu_22);
  $(".txt_ovr_phu_23").html(ovr_phu_23).attr("data-color", ovr_phu_23);
  $(".txt_ovr_phu_24").html(ovr_phu_24).attr("data-color", ovr_phu_24);
  $(".txt_ovr_phu_25").html(ovr_phu_25).attr("data-color", ovr_phu_25);
  $(".txt_ovr_phu_26").html(ovr_phu_26).attr("data-color", ovr_phu_26);
  $(".txt_ovr_phu_27").html(ovr_phu_27).attr("data-color", ovr_phu_27);
  $(".txt_ovr_phu_28").html(ovr_phu_28).attr("data-color", ovr_phu_28);
  $(".txt_ovr_phu_29").html(ovr_phu_29).attr("data-color", ovr_phu_29);
  $(".txt_ovr_phu_30").html(ovr_phu_30).attr("data-color", ovr_phu_30);
  $(".txt_ovr_phu_31").html(ovr_phu_31).attr("data-color", ovr_phu_31);
  $(".txt_ovr_phu_32").html(ovr_phu_32).attr("data-color", ovr_phu_32);
  $(".txt_ovr_phu_33").html(ovr_phu_33).attr("data-color", ovr_phu_33);
  $(".txt_ovr_phu_34").html(ovr_phu_34).attr("data-color", ovr_phu_34);
  $(".thenangcap").html(thenangcap);
  $(".thebaove").html(thebaove);
  setTimeout(setColor, 0);
});

// sec chi so
function checkchiso() {
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
  grade_max = grade;
  setOtem("grade_max", grade_max);
  price = price_bandau;
  setItem("price", price);
  grade = grade_1;
  setItem("grade", grade);
}
$(".thebaove_check").click(function () {
  var thebaove = getItem("thebaove");
  var grade = getItem("grade");
  if (thebaove == "0") {
    swal(
      "Thông Báo",
      "Bạn không đủ thẻ bảo vệ vui lòng nâng cấp để nhận",
      "error"
    );
  } else if (thebaove == "") {
    swal(
      "Thông Báo",
      "Bạn chưa cấp nhật thẻ bảo vệ để cập nhật bạn vui lòng tạo lại cầu thủ",
      "error"
    );
  } else if (grade == grade_1) {
    swal("Thông Báo", "Không hỗ trợ cấp thẻ +1", "error");
  } else if (grade == grade_2) {
    swal("Thông Báo", "Không hỗ trợ cấp thẻ +2", "error");
  } else if (grade == grade_3) {
    swal("Thông Báo", "Không hỗ trợ cấp thẻ +3", "error");
  } else if (grade == grade_4) {
    swal("Thông Báo", "Không hỗ trợ cấp thẻ +4", "error");
  } else if (grade == grade_10) {
    swal("Thông Báo", "Không hỗ trợ cấp thẻ +10", "error");
  } else {
    var sudungthebaove = getItem("sudungthebaove");
    if (sudungthebaove == "1") {
      swal("Thông Báo", "Bạn đang sử dụng thẻ bảo vệ", "error");
    } else {
      var thebaove = parseInt(thebaove) - parseInt("1");
      setItem("thebaove", thebaove);
      var sudungthebaove = 1;
      setItem("sudungthebaove", sudungthebaove);
      $(".thebaove").html(thebaove);
      swal(
        "Thông Báo",
        "Sử dụng thẻ bảo vệ thành công bạn hãy nâng cấp cầu thủ",
        "success"
      );
    }
  }
});
$(".the1").click(function () {
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
  grade_max = grade;
  setOtem("grade_max", grade_max);
  price = price_bandau;
  setItem("price", price);
  grade = grade_1;
  setItem("grade", grade);

  swal("Thông Báo", "Nâng Cấp Thành Công +1", "success");
});
$(".the2").click(function () {
  var grade = getItem("grade");
  var thenangcap = getItem("thenangcap");
  if (thenangcap == "0") {
    swal("Hệ Thống", "Bạn không đủ thẻ nâng cấp cần 1 thẻ", "error");
  } else if (grade == grade_1) {
    swal("Hệ Thống", "Không hỗ trợ cấp thẻ +2", "error");
  } else {
    checkchiso();
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
    thenangcap = parseInt(thenangcap) - parseInt("1");
    setItem("thenangcap", thenangcap);
    setTimeout(congchiso, 0);
    swal("Thông Báo", "Nâng Cấp Thành Công +2", "success");
  }
});
$(".the3").click(function () {
  var thenangcap = getItem("thenangcap");
  var grade = getItem("grade");
  if (thenangcap == "0") {
    swal("Hệ Thống", "Bạn không đủ thẻ nâng cấp cần 1 thẻ", "error");
  } else if (grade == grade_3) {
    swal("Hệ Thống", "Không hỗ trợ cấp thẻ +3", "error");
  } else {
    checkchiso();
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
    thenangcap = parseInt(thenangcap) - parseInt("1");
    setItem("thenangcap", thenangcap);
    setTimeout(congchiso, 0);
    swal("Thông Báo", "Nâng Cấp Thành Công +3", "success");
  }
});
$(".the4").click(function () {
  var grade = getItem("grade");
  var thenangcap = getItem("thenangcap");
  if (thenangcap == "0") {
    swal("Hệ Thống", "Bạn không đủ thẻ nâng cấp cần 1 thẻ", "error");
  } else if (grade == grade_4) {
    swal("Hệ Thống", "Không hỗ trợ cấp thẻ +4", "error");
  } else {
    checkchiso();
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
    thenangcap = parseInt(thenangcap) - parseInt("1");
    setItem("thenangcap", thenangcap);
    setTimeout(congchiso, 0);
    swal("Thông Báo", "Nâng Cấp Thành Công +4", "success");
  }
});
$(".the5").click(function () {
  var grade = getItem("grade");
  var thenangcap = getItem("thenangcap");
  if (thenangcap == "0") {
    swal("Hệ Thống", "Bạn không đủ thẻ nâng cấp cần 1 thẻ", "error");
  } else if (grade == grade_5) {
    swal("Hệ Thống", "Không hỗ trợ cấp thẻ +5", "error");
  } else {
    checkchiso();
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
    thenangcap = parseInt(thenangcap) - parseInt("1");
    setItem("thenangcap", thenangcap);
    setTimeout(congchiso, 0);
    swal("Thông Báo", "Nâng Cấp Thành Công +5", "success");
  }
});
$(".the6").click(function () {
  var grade = getItem("grade");
  var thenangcap = getItem("thenangcap");
  if (thenangcap == "0") {
    swal("Hệ Thống", "Bạn không đủ thẻ nâng cấp cần 1 thẻ", "error");
  } else if (grade == grade_6) {
    swal("Hệ Thống", "Không hỗ trợ cấp thẻ +6", "error");
  } else {
    checkchiso();
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
    thenangcap = parseInt(thenangcap) - parseInt("1");
    setItem("thenangcap", thenangcap);
    setTimeout(congchiso, 0);
    swal("Thông Báo", "Nâng Cấp Thành Công +6", "success");
  }
});
$(".the7").click(function () {
  var grade = getItem("grade");
  var thenangcap = getItem("thenangcap");
  if (thenangcap == "0") {
    swal("Hệ Thống", "Bạn không đủ thẻ nâng cấp cần 1 thẻ", "error");
  } else if (grade == grade_7) {
    swal("Hệ Thống", "Không hỗ trợ cấp thẻ +7", "error");
  } else {
    checkchiso();
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
    thenangcap = parseInt(thenangcap) - parseInt("1");
    setItem("thenangcap", thenangcap);
    setTimeout(congchiso, 0);
    swal("Thông Báo", "Nâng Cấp Thành Công +7", "success");
  }
});
$(".the8").click(function () {
  var grade = getItem("grade");
  var thenangcap = getItem("thenangcap");
  if (thenangcap == "0") {
    swal("Hệ Thống", "Bạn không đủ thẻ nâng cấp cần 1 thẻ", "error");
  } else if (grade == grade_1) {
    swal("Hệ Thống", "Không hỗ trợ cấp thẻ +8", "error");
  } else {
    checkchiso();
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
    thenangcap = parseInt(thenangcap) - parseInt("1");
    setItem("thenangcap", thenangcap);
    setTimeout(congchiso, 0);
    swal("Thông Báo", "Nâng Cấp Thành Công +8", "success");
  }
});
$(".the9").click(function () {
  var grade = getItem("grade");
  var thenangcap = getItem("thenangcap");
  if (thenangcap == "0") {
    swal("Hệ Thống", "Bạn không đủ thẻ nâng cấp cần 1 thẻ", "error");
  } else if (grade == grade_1) {
    swal("Hệ Thống", "Không hỗ trợ cấp thẻ +9", "error");
  } else {
    checkchiso();
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
    thenangcap = parseInt(thenangcap) - parseInt("1");
    setItem("thenangcap", thenangcap);
    setTimeout(congchiso, 0);
    swal("Thông Báo", "Nâng Cấp Thành Công +9", "success");
  }
});
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

// het

function setColor() {
  var mc = {
    "0-49": "co1",
    "50-79": "co2",
    "80-89": "co3",
    "90-99": "co4",
    "100-109": "co5",
    "110-119": "co6",
    "120-500": "co7",
  };
  function between(x, min, max) {
    return x >= min && x <= max;
  }
  var dc;
  var first;
  var second;
  var th;
  $("font").each(function (index) {
    th = $(this);
    dc = parseInt($(this).attr("data-color"), 10);
    $.each(mc, function (name, value) {
      first = parseInt(name.split("-")[0], 10);
      second = parseInt(name.split("-")[1], 10);
      if (between(dc, first, second)) {
        th.addClass(value);
      } else {
        th.removeClass(value);
      }
    });
  });
}

$(".btn_upgrade").click(function () {
  var ovr = getItem("ovr");
  ovr_nc = ovr;
  setOtem("ovr_nc", ovr_nc);
  location.href = "/nangcap.html" + v_cache;
});
$(".btn_tuychon").click(function () {
  $(".muiten").html($(".muiten").html() == "▲" ? "▼" : "▲");
  $(".detail_ovr").slideToggle(200);
  $(".bangtuychon").slideToggle(200);
});
$(".editinfo").click(function () {
  location.href = "/index.php" + v_cache;
});
$(".xoadata").click(function () {
  if (
    confirm(
      "Deleting data means you will recreate all the information from the beginning\n▬▬▬▬▬▬▬▬▬\nYou want to delete data now?"
    )
  ) {
    localStorage.clear();
    location.href = "/index.php";
  }
});
$(".appinfo").click(function () {
  alert(
    "Application developed for entertainment purposes, absolutely does not violate the copyright of any other organization."
  );
});
$(".phanhoi").click(function () {
  if (
    confirm(
      "Give us feedback to improve the application\n▬▬▬▬▬▬▬▬▬\nOpen Developer link?"
    )
  ) {
    location.href = "/index.php";
  }
});

$(".img_grade").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    $(".review_grade1").css("outline", "2px solid red");
  }
  if (grade == grade_2) {
    $(".review_grade2").css("outline", "2px solid red");
  }
  if (grade == grade_3) {
    $(".review_grade3").css("outline", "2px solid red");
  }
  if (grade == grade_4) {
    $(".review_grade4").css("outline", "2px solid red");
  }
  if (grade == grade_5) {
    $(".review_grade5").css("outline", "2px solid red");
  }
  if (grade == grade_6) {
    $(".review_grade6").css("outline", "2px solid red");
  }
  if (grade == grade_7) {
    $(".review_grade7").css("outline", "2px solid red");
  }
  if (grade == grade_8) {
    $(".review_grade8").css("outline", "2px solid red");
  }
  if (grade == grade_9) {
    $(".review_grade9").css("outline", "2px solid red");
  }
  if (grade == grade_10) {
    $(".review_grade10").css("outline", "2px solid red");
  }
  $(".muiten_grade").html($(".muiten_grade").html() == "▲" ? "▼" : "▲");
  $(".img_grade").addClass("close_grade").removeClass("open_grade");
  $(".div_grade").slideToggle(200);
});
$(".review_grade1").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    ovr_review = 0;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_2) {
    ovr_review = 1;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_3) {
    ovr_review = 2;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_4) {
    ovr_review = 4;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_5) {
    ovr_review = 6;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_6) {
    ovr_review = 8;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_7) {
    ovr_review = 11;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_8) {
    ovr_review = 15;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_9) {
    ovr_review = 19;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_10) {
    ovr_review = 24;
    setOtem("ovr_review", ovr_review);
  }
  setTimeout(show_ovr_review, 0);
  $(".img_grade").attr("src", grade_1);
});
$(".review_grade2").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    ovr_review = -1;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_2) {
    ovr_review = 0;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_3) {
    ovr_review = 1;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_4) {
    ovr_review = 3;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_5) {
    ovr_review = 5;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_6) {
    ovr_review = 7;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_7) {
    ovr_review = 10;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_8) {
    ovr_review = 14;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_9) {
    ovr_review = 18;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_10) {
    ovr_review = 23;
    setOtem("ovr_review", ovr_review);
  }
  setTimeout(show_ovr_review, 0);
  $(".img_grade").attr("src", grade_2);
});
$(".review_grade3").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    ovr_review = -2;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_2) {
    ovr_review = -1;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_3) {
    ovr_review = 0;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_4) {
    ovr_review = 2;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_5) {
    ovr_review = 4;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_6) {
    ovr_review = 6;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_7) {
    ovr_review = 9;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_8) {
    ovr_review = 13;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_9) {
    ovr_review = 17;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_10) {
    ovr_review = 22;
    setOtem("ovr_review", ovr_review);
  }
  setTimeout(show_ovr_review, 0);
  $(".img_grade").attr("src", grade_3);
});
$(".review_grade4").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    ovr_review = -4;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_2) {
    ovr_review = -3;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_3) {
    ovr_review = -2;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_4) {
    ovr_review = 0;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_5) {
    ovr_review = 2;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_6) {
    ovr_review = 4;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_7) {
    ovr_review = 7;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_8) {
    ovr_review = 11;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_9) {
    ovr_review = 15;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_10) {
    ovr_review = 20;
    setOtem("ovr_review", ovr_review);
  }
  setTimeout(show_ovr_review, 0);
  $(".img_grade").attr("src", grade_4);
});
$(".review_grade5").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    ovr_review = -6;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_2) {
    ovr_review = -5;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_3) {
    ovr_review = -4;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_4) {
    ovr_review = -2;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_5) {
    ovr_review = 0;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_6) {
    ovr_review = 2;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_7) {
    ovr_review = 5;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_8) {
    ovr_review = 9;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_9) {
    ovr_review = 13;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_10) {
    ovr_review = 18;
    setOtem("ovr_review", ovr_review);
  }
  setTimeout(show_ovr_review, 0);
  $(".img_grade").attr("src", grade_5);
});
$(".review_grade6").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    ovr_review = -8;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_2) {
    ovr_review = -7;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_3) {
    ovr_review = -6;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_4) {
    ovr_review = -4;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_5) {
    ovr_review = -2;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_6) {
    ovr_review = 0;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_7) {
    ovr_review = 3;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_8) {
    ovr_review = 7;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_9) {
    ovr_review = 11;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_10) {
    ovr_review = 16;
    setOtem("ovr_review", ovr_review);
  }
  setTimeout(show_ovr_review, 0);
  $(".img_grade").attr("src", grade_6);
});
$(".review_grade7").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    ovr_review = -11;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_2) {
    ovr_review = -10;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_3) {
    ovr_review = -9;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_4) {
    ovr_review = -7;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_5) {
    ovr_review = -5;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_6) {
    ovr_review = -3;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_7) {
    ovr_review = 0;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_8) {
    ovr_review = 4;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_9) {
    ovr_review = 8;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_10) {
    ovr_review = 13;
    setOtem("ovr_review", ovr_review);
  }
  setTimeout(show_ovr_review, 0);
  $(".img_grade").attr("src", grade_7);
});
$(".review_grade8").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    ovr_review = -15;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_2) {
    ovr_review = -14;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_3) {
    ovr_review = -13;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_4) {
    ovr_review = -11;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_5) {
    ovr_review = -9;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_6) {
    ovr_review = -7;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_7) {
    ovr_review = -4;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_8) {
    ovr_review = 0;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_9) {
    ovr_review = 4;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_10) {
    ovr_review = 9;
    setOtem("ovr_review", ovr_review);
  }
  setTimeout(show_ovr_review, 0);
  $(".img_grade").attr("src", grade_8);
});
$(".review_grade9").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    ovr_review = -19;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_2) {
    ovr_review = -18;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_3) {
    ovr_review = -17;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_4) {
    ovr_review = -15;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_5) {
    ovr_review = -13;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_6) {
    ovr_review = -11;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_7) {
    ovr_review = -8;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_8) {
    ovr_review = -4;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_9) {
    ovr_review = 0;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_10) {
    ovr_review = 5;
    setOtem("ovr_review", ovr_review);
  }
  setTimeout(show_ovr_review, 0);
  $(".img_grade").attr("src", grade_9);
});
$(".review_grade10").click(function () {
  var grade = getItem("grade");
  if (grade == grade_1) {
    ovr_review = -24;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_2) {
    ovr_review = -23;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_3) {
    ovr_review = -22;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_4) {
    ovr_review = -20;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_5) {
    ovr_review = -18;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_6) {
    ovr_review = -16;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_7) {
    ovr_review = -13;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_8) {
    ovr_review = -9;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_9) {
    ovr_review = -5;
    setOtem("ovr_review", ovr_review);
  } else if (grade == grade_10) {
    ovr_review = 0;
    setOtem("ovr_review", ovr_review);
  }
  setTimeout(show_ovr_review, 0);
  $(".img_grade").attr("src", grade_10);
});
function show_ovr_review() {
  var ovr_review = getOtem("ovr_review");
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
  if (parseInt(ovr_review) > 0) {
    $(".txt_ovr_review").html(
      "<font color='red'>▼</font>" + Math.abs(ovr_review)
    );
  } else if (parseInt(ovr_review) < 0) {
    $(".txt_ovr_review").html(
      "<font color='green'>▲</font>" + Math.abs(ovr_review)
    );
  } else {
    $(".txt_ovr_review").html("");
  }
  $(".txt_cs").html(parseInt(ovr) - parseInt(ovr_review));
  $(".txt_ovr_phu_1")
    .html(parseInt(ovr_phu_1) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_1 - parseInt(ovr_review));
  $(".txt_ovr_phu_2")
    .html(parseInt(ovr_phu_2) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_2 - parseInt(ovr_review));
  $(".txt_ovr_phu_3")
    .html(parseInt(ovr_phu_3) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_3 - parseInt(ovr_review));
  $(".txt_ovr_phu_4")
    .html(parseInt(ovr_phu_4) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_4 - parseInt(ovr_review));
  $(".txt_ovr_phu_5")
    .html(parseInt(ovr_phu_5) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_5 - parseInt(ovr_review));
  $(".txt_ovr_phu_6")
    .html(parseInt(ovr_phu_6) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_6 - parseInt(ovr_review));
  $(".txt_ovr_phu_7")
    .html(parseInt(ovr_phu_7) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_7 - parseInt(ovr_review));
  $(".txt_ovr_phu_8")
    .html(parseInt(ovr_phu_8) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_8 - parseInt(ovr_review));
  $(".txt_ovr_phu_9")
    .html(parseInt(ovr_phu_9) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_9 - parseInt(ovr_review));
  $(".txt_ovr_phu_10")
    .html(parseInt(ovr_phu_10) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_10 - parseInt(ovr_review));
  $(".txt_ovr_phu_11")
    .html(parseInt(ovr_phu_11) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_11 - parseInt(ovr_review));
  $(".txt_ovr_phu_12")
    .html(parseInt(ovr_phu_12) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_12 - parseInt(ovr_review));
  $(".txt_ovr_phu_13")
    .html(parseInt(ovr_phu_13) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_13 - parseInt(ovr_review));
  $(".txt_ovr_phu_14")
    .html(parseInt(ovr_phu_14) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_14 - parseInt(ovr_review));
  $(".txt_ovr_phu_15")
    .html(parseInt(ovr_phu_15) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_15 - parseInt(ovr_review));
  $(".txt_ovr_phu_16")
    .html(parseInt(ovr_phu_16) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_16 - parseInt(ovr_review));
  $(".txt_ovr_phu_17")
    .html(parseInt(ovr_phu_17) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_17 - parseInt(ovr_review));
  $(".txt_ovr_phu_18")
    .html(parseInt(ovr_phu_18) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_18 - parseInt(ovr_review));
  $(".txt_ovr_phu_19")
    .html(parseInt(ovr_phu_19) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_19 - parseInt(ovr_review));
  $(".txt_ovr_phu_20")
    .html(parseInt(ovr_phu_20) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_20 - parseInt(ovr_review));
  $(".txt_ovr_phu_21")
    .html(parseInt(ovr_phu_21) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_21 - parseInt(ovr_review));
  $(".txt_ovr_phu_22")
    .html(parseInt(ovr_phu_22) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_22 - parseInt(ovr_review));
  $(".txt_ovr_phu_23")
    .html(parseInt(ovr_phu_23) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_23 - parseInt(ovr_review));
  $(".txt_ovr_phu_24")
    .html(parseInt(ovr_phu_24) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_24 - parseInt(ovr_review));
  $(".txt_ovr_phu_25")
    .html(parseInt(ovr_phu_25) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_25 - parseInt(ovr_review));
  $(".txt_ovr_phu_26")
    .html(parseInt(ovr_phu_26) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_26 - parseInt(ovr_review));
  $(".txt_ovr_phu_27")
    .html(parseInt(ovr_phu_27) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_27 - parseInt(ovr_review));
  $(".txt_ovr_phu_28")
    .html(parseInt(ovr_phu_28) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_28 - parseInt(ovr_review));
  $(".txt_ovr_phu_29")
    .html(parseInt(ovr_phu_29) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_29 - parseInt(ovr_review));
  $(".txt_ovr_phu_30")
    .html(parseInt(ovr_phu_30) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_30 - parseInt(ovr_review));
  $(".txt_ovr_phu_31")
    .html(parseInt(ovr_phu_31) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_31 - parseInt(ovr_review));
  $(".txt_ovr_phu_32")
    .html(parseInt(ovr_phu_32) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_32 - parseInt(ovr_review));
  $(".txt_ovr_phu_33")
    .html(parseInt(ovr_phu_33) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_33 - parseInt(ovr_review));
  $(".txt_ovr_phu_34")
    .html(parseInt(ovr_phu_34) - parseInt(ovr_review))
    .attr("data-color", ovr_phu_34 - parseInt(ovr_review));
  setTimeout(setColor, 0);
  $(".muiten_grade").html($(".muiten_grade").html() == "▲" ? "▼" : "▲");
  $(".div_grade").slideToggle(200);
}
