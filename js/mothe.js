function loi()
{
    localStorage.clear();
}
function hieuungnangcap()
{
	$(".btn_nangcap, .btn_hoantat").attr("disabled", true);
	$(".main_nc_info").addClass("fadeOutDownBig");
    setTimeout(function(){$(".main_nc_info").css("display", "none")}, 100);
    setTimeout(function(){$(".main_nc_status").addClass("fadeOutDownBig")}, 100);
    setTimeout(function(){$(".main_nc_status").css("display", "none")}, 100);
    
    setTimeout(function(){
        $(".main_nc").addClass("blur");

        $(".card_nc, .face_div, .ssname_div, .grade_div, .luong_div").addClass("whitescale").addClass("zoom");
    }, 100);
    setTimeout(function(){

        $(".main_nc").removeClass("blur");
        $(".main_nc_info").removeClass("fadeOutDownBig");
        $(".main_nc_status").removeClass("fadeOutDownBig");
        $(".card_nc").removeClass("rung");
        $(".card_nc, .face_div, .ssname_div, .grade_div, .luong_div").removeClass("whitescale zoom");
        $(".main_nc_in").addClass("bounceIn");
        $(".btn_nangcap").css("display", "none");
        $(".btn_hoantat").css("display", "block").removeAttr("disabled");
        $(".btn_dapthe").css("display", "block").removeAttr("disabled");
        $(".main_nc_info").addClass("fadeInUpBig").css("display", "block");
        $(".gradeprice").html("");
    }, 500);
    
}
$(".btn_dapthe").click(function(){
    var ovr=getItem("ovr");
    ovr_nc = ovr; setOtem("ovr_nc", ovr_nc);
    location.href = "/profile.php" + v_cache;
})
function xyly_nc()
{
	$.ajax({
		type:"POST",
		data:{

		},
		url:"../api/taocauthu.php",
		success:function(taocauthu)
		{
         thenangcap = 1;setItem("thenangcap", thenangcap)
         cauthu = JSON.parse(taocauthu);
         face = cauthu.face;setItem("face", face);
         ovr = cauthu.chiso;setItem("ovr", ovr);
         ss = cauthu.ss;setItem("ss", ss);
         ten = cauthu.name;setItem("ten" , ten);
         qg = cauthu.quocgia;setItem("qg", qg);
         vt = cauthu.vitri;setItem("vt", vt);
         luong = cauthu.luong;setItem("luong", luong);
         price = cauthu.price;setItem("price", price);
         chantrai = '5';setItem("chantrai" , chantrai);
         chanphai = '5';setItem("chanphai", chanphai);
         chieucao = '180';setItem("chieucao", chieucao);
         cannang = '80';setItem("cannang", cannang);
         grade = grade_5;setItem("grade",grade)
         th = 'Large';setItem("th",th);
         team = 'HuuducTeam';setItem("team", team);
         ovr_phu_1 = cauthu.ovr_phu_1; setItem("ovr_phu_1", ovr_phu_1);
         ovr_phu_2 = cauthu.ovr_phu_2; setItem("ovr_phu_2", ovr_phu_2);
         ovr_phu_3 = cauthu.ovr_phu_3; setItem("ovr_phu_3", ovr_phu_3);
         ovr_phu_4 = cauthu.ovr_phu_4; setItem("ovr_phu_4", ovr_phu_4);
         ovr_phu_5 = cauthu.ovr_phu_5; setItem("ovr_phu_5", ovr_phu_5);
         ovr_phu_6 = cauthu.ovr_phu_6; setItem("ovr_phu_6", ovr_phu_6);
         ovr_phu_7 = cauthu.ovr_phu_7; setItem("ovr_phu_7", ovr_phu_7);
         ovr_phu_8 = cauthu.ovr_phu_8; setItem("ovr_phu_8", ovr_phu_8);
         ovr_phu_9 = cauthu.ovr_phu_9; setItem("ovr_phu_9", ovr_phu_9);
         ovr_phu_10 = cauthu.ovr_phu_10; setItem("ovr_phu_10", ovr_phu_10);
         ovr_phu_11 = cauthu.ovr_phu_11; setItem("ovr_phu_11", ovr_phu_11);
         ovr_phu_12 = cauthu.ovr_phu_12; setItem("ovr_phu_12", ovr_phu_12);
         ovr_phu_13 = cauthu.ovr_phu_13; setItem("ovr_phu_13", ovr_phu_13);
         ovr_phu_14 = cauthu.ovr_phu_14; setItem("ovr_phu_14", ovr_phu_14);
         ovr_phu_15 = cauthu.ovr_phu_15; setItem("ovr_phu_15", ovr_phu_15);
         ovr_phu_16 = cauthu.ovr_phu_16; setItem("ovr_phu_16", ovr_phu_16);
         ovr_phu_17 = cauthu.ovr_phu_17; setItem("ovr_phu_17", ovr_phu_17);
         ovr_phu_18 = cauthu.ovr_phu_18; setItem("ovr_phu_18", ovr_phu_18);
         ovr_phu_19 = cauthu.ovr_phu_19; setItem("ovr_phu_19", ovr_phu_19);
         ovr_phu_20 = cauthu.ovr_phu_20; setItem("ovr_phu_20", ovr_phu_20);
         ovr_phu_21 = cauthu.ovr_phu_21; setItem("ovr_phu_21", ovr_phu_21);
         ovr_phu_22 = cauthu.ovr_phu_22; setItem("ovr_phu_22", ovr_phu_22);
         ovr_phu_23 = cauthu.ovr_phu_23; setItem("ovr_phu_23", ovr_phu_23);
         ovr_phu_24 = cauthu.ovr_phu_24; setItem("ovr_phu_24", ovr_phu_24);
         ovr_phu_25 = cauthu.ovr_phu_25; setItem("ovr_phu_25", ovr_phu_25);
         ovr_phu_26 = cauthu.ovr_phu_26; setItem("ovr_phu_26", ovr_phu_26);
         ovr_phu_27 = cauthu.ovr_phu_27; setItem("ovr_phu_27", ovr_phu_27);
         ovr_phu_28 = cauthu.ovr_phu_28; setItem("ovr_phu_28", ovr_phu_28);
         ovr_phu_29 = cauthu.ovr_phu_29; setItem("ovr_phu_29", ovr_phu_29);
         ovr_phu_30 = cauthu.ovr_phu_30; setItem("ovr_phu_30", ovr_phu_30);
         ovr_phu_31 = cauthu.ovr_phu_31; setItem("ovr_phu_31", ovr_phu_31);
         ovr_phu_32 = cauthu.ovr_phu_32; setItem("ovr_phu_32", ovr_phu_32);
         ovr_phu_33 = cauthu.ovr_phu_33; setItem("ovr_phu_33", ovr_phu_33);
         ovr_phu_34 = cauthu.ovr_phu_34; setItem("ovr_phu_34", ovr_phu_34);
         var ovr = getItem("ovr");
         ovr_nc = ovr; setOtem("ovr_nc", ovr_nc);
         var price=getItem("price");
         var mp_start = parseInt(Math.random() * 1000) + 100;
         var mp_end = "000";
         if (mp_start<=500){mp_start = 700}else if(mp_start >= 1000){mp_start = 700}
            mp_open = mp_start + mp_end;
        price = parseInt(mp_open); setItem("price", price);
        var price_bandau = getItem("price_bandau");
        var ss = getItem("ss");
        if(ss == "ss14"){
            var price=getItem("price");
            var mp_start = parseInt(Math.random() * 1000) + 100;
            var mp_end = "000";
            if (mp_start<=500){mp_start = 700}else if(mp_start >= 20000){mp_start = 700}
                mp_open = mp_start + mp_end;
            price = parseInt(mp_open); setItem("price", price);
            var price_bandau = getItem("price_bandau");
        }
        if (price_bandau==""){price_bandau = price; setItem("price_bandau", price_bandau)}
        if(ovr <= 88){
            grade = grade_1;setItem("grade", grade);
        }else{
            var tyle_n = parseInt(Math.random() * 100) + 1;
                if(tyle_n <= 10) // check tỉ lệ
                {
                    grade = grade_8;setItem("grade", grade)
                    var q = parseInt(price) + parseInt(price) * 0.3;
                    var w = parseInt(q) + parseInt(q) * 0.6;
                    var e = parseInt(w) + parseInt(w) * 1.2;
                    var r = parseInt(e) + parseInt(e) * 1.6;
                    var t = parseInt(r) + parseInt(r) * 2;
                    var y = parseInt(t) + parseInt(t) * 2.5;
                    var u = parseInt(y) + parseInt(y) * 3;setItem("price" , u);
                    var ovr_tc = 15; setOtem("ovr_tc" , ovr_tc);
                    check_xyly();
                    
                }else if(tyle_n <= 20)
                {
                    grade = grade_7;setItem("grade", grade)
                    var q = parseInt(price) + parseInt(price) * 0.3;
                    var w = parseInt(q) + parseInt(q) * 0.6;
                    var e = parseInt(w) + parseInt(w) * 1.2;
                    var r = parseInt(e) + parseInt(e) * 1.6;
                    var t = parseInt(r) + parseInt(r) * 2;
                    var y = parseInt(t) + parseInt(t) * 2.5;setItem("price" , y);
                    ovr_tc = 11; setOtem("ovr_tc" , ovr_tc);
                    check_xyly();
                }else if(tyle_n <= 30)
                {
                    grade = grade_6;setItem("grade", grade) 
                    var q = parseInt(price) + parseInt(price) * 0.3;
                    var w = parseInt(q) + parseInt(q) * 0.6;
                    var e = parseInt(w) + parseInt(w) * 1.2;
                    var r = parseInt(e) + parseInt(e) * 1.6;
                    var t = parseInt(r) + parseInt(r) * 2;setItem("price" , t);
                    ovr_tc = 8; setOtem("ovr_tc" , ovr_tc);
                    check_xyly();
                }else if(tyle_n <= 50)
                {
                    grade = grade_5;setItem("grade", grade) 
                    var q = parseInt(price) + parseInt(price) * 0.3;
                    var w = parseInt(q) + parseInt(q) * 0.6;
                    var e = parseInt(w) + parseInt(w) * 1.2;
                    var r = parseInt(e) + parseInt(e) * 1.6;setItem("price" , r);
                    ovr_tc = 6; setOtem("ovr_tc" , ovr_tc);
                    check_xyly();
                }else if(tyle_n <= 60)
                {
                    grade = grade_4;setItem("grade", grade)
                    var q = parseInt(price) + parseInt(price) * 0.3;
                    var w = parseInt(q) + parseInt(q) * 0.6;
                    var e = parseInt(w) + parseInt(w) * 1.2;setItem("price" , e);
                    ovr_tc = 4; setOtem("ovr_tc" , ovr_tc);
                    check_xyly();
                }else if(tyle_n <= 78)
                {
                    grade = grade_3;setItem("grade", grade)
                    var q = parseInt(price) + parseInt(price) * 0.3;
                    var w = parseInt(q) + parseInt(q) * 0.6;setItem("price" , w);
                    ovr_tc = 2; setOtem("ovr_tc" , ovr_tc);
                    check_xyly();
                }else if(tyle_n <= 89)
                {
                    grade = grade_2;setItem("grade", grade)
                    var q = parseInt(price) + parseInt(price) * 0.3;setItem("price" , q);
                    ovr_tc = 1; setOtem("ovr_tc" , ovr_tc);
                    check_xyly();
                }else{
                    grade = grade_1;setItem("grade", grade)
                    check_xyly();
                }
            }
            

        },
        error:function()
        {
            alert("error");
        }
        
    })
setTimeout(function(){
	var thenangcap = getItem("thenangcap");
	var ten=getItem("ten"); var ovr=getItem("ovr"); var luong=getItem("luong"); var ss=getItem("ss");
    var face=getItem("face"); var vt=getItem("vt"); var qg=getItem("qg"); var price=getItem("price"); var price_bandau=getItem("price_bandau");
    var ovr_nc=getOtem("ovr_nc");
    var grade=getItem("grade"); var price=getItem("price");
    $(".card_img").attr("src", "/anh/anhcauthu/anh_1/" + ss + ".png?v=3");
    $(".txt_ovr").html(ovr); $(".txt_ten").html(ten); $(".txt_luong").html(luong); $(".txt_vt").html(vt); $(".txt_price").html(parseInt(price).toCurrencyString());
    if (qg=="Viet Nam"){$(".img_qg").attr("src", "/anh/Flag/VN.png")}
        else if (qg=="South Korea"){$(".img_qg").attr("src", "/anh/Flag/HQ.png")}
            else if (qg=="Thailand"){$(".img_qg").attr("src", "/anh/Flag/THA.png")}
                else if (qg=="China"){$(".img_qg").attr("src", "/anh/Flag/TQ.png")}
                    else if (qg=="Indonesia"){$(".img_qg").attr("src", "/anh/Flag/IND.png")}
                        $(".img_grade").attr("src", grade);
                    $(".img_ss, .img_ss_info").attr("src", "/anh/anhcauthu/anh_2/" + ss + ".png?v=3");
                    $(".img_face").attr("src", face);
                    if (grade==grade_1){$(".img_grade_next").attr("src", grade_2); $(".txt_ovr_next").html(parseInt(ovr)+1); $(".txt_price_next").html(parseInt(parseInt(price)+parseInt(price)*0.3).toCurrencyString()); ovr_tc=1; setOtem("ovr_tc", ovr_tc); ovr_tb=0; setOtem("ovr_tb", ovr_tb)}
                    else if (grade==grade_2){$(".img_grade_next").attr("src", grade_3); $(".txt_ovr_next").html(parseInt(ovr)+1); $(".txt_price_next").html(parseInt(parseInt(price)+parseInt(price)*0.6).toCurrencyString()); ovr_tc=1; setOtem("ovr_tc", ovr_tc); ovr_tb=-1; setOtem("ovr_tb", ovr_tb)}
                    else if (grade==grade_3){$(".img_grade_next").attr("src", grade_4); $(".txt_ovr_next").html(parseInt(ovr)+2); $(".txt_price_next").html(parseInt(parseInt(price)+parseInt(price)*1.2).toCurrencyString()); ovr_tc=2; setOtem("ovr_tc", ovr_tc); ovr_tb=-2; setOtem("ovr_tb", ovr_tb)}
                    else if (grade==grade_4){$(".img_grade_next").attr("src", grade_5); $(".txt_ovr_next").html(parseInt(ovr)+2); $(".txt_price_next").html(parseInt(parseInt(price)+parseInt(price)*1.6).toCurrencyString()); ovr_tc=2; setOtem("ovr_tc", ovr_tc); ovr_tb=-4; setOtem("ovr_tb", ovr_tb)}
                    else if (grade==grade_5){$(".img_grade_next").attr("src", grade_6); $(".txt_ovr_next").html(parseInt(ovr)+2); $(".txt_price_next").html(parseInt(parseInt(price)+parseInt(price)*2).toCurrencyString()); ovr_tc=2; setOtem("ovr_tc", ovr_tc); ovr_tb=-6; setOtem("ovr_tb", ovr_tb)}
                    else if (grade==grade_6){$(".img_grade_next").attr("src", grade_7); $(".txt_ovr_next").html(parseInt(ovr)+3); $(".txt_price_next").html(parseInt(parseInt(price)+parseInt(price)*2.5).toCurrencyString()); ovr_tc=3; setOtem("ovr_tc", ovr_tc); ovr_tb=-8; setOtem("ovr_tb", ovr_tb)}
                    else if (grade==grade_7){$(".img_grade_next").attr("src", grade_8); $(".txt_ovr_next").html(parseInt(ovr)+4); $(".txt_price_next").html(parseInt(parseInt(price)+parseInt(price)*3).toCurrencyString()); ovr_tc=4; setOtem("ovr_tc", ovr_tc); ovr_tb=-11; setOtem("ovr_tb", ovr_tb)}
                    else if (grade==grade_8){$(".img_grade_next").attr("src", grade_9); $(".txt_ovr_next").html(parseInt(ovr)+4); $(".txt_price_next").html(parseInt(parseInt(price)+parseInt(price)*3.5).toCurrencyString()); ovr_tc=4; setOtem("ovr_tc", ovr_tc); ovr_tb=-15; setOtem("ovr_tb", ovr_tb)}
                    else if (grade==grade_9){$(".img_grade_next").attr("src", grade_10); $(".txt_ovr_next").html(parseInt(ovr)+5); $(".txt_price_next").html(parseInt(parseInt(price)+parseInt(price)*5).toCurrencyString()); ovr_tc=5; setOtem("ovr_tc", ovr_tc); ovr_tb=-19; setOtem("ovr_tb", ovr_tb)}
                    else if (grade==grade_10){$(".gradeprice, .txt_updown").html(""); $(".txt_status").html("Grade has been maximum")}
                    if (price_bandau==""){price_bandau = price; setItem("price_bandau", price_bandau)}
                    $('.txt_ovr').addClass(ss);
                    $('.txt_vt').addClass(ss);
                    setTimeout(function(){
                        $(".mothe").attr("style", "display:block")}, 100);
                }, 200);
}
// phần button chuyển trang
$(".btn_nangcap").click(function(){
	setTimeout(hieuungnangcap, 0);
	setTimeout(xyly_nc, 200);
})
$(".btn_comeback").click(function(){
	location.href = "/profile.php" + v_cache;
})
$(".btn_hoantat").click(function(){
	location.reload();
})
// kết thúc


// cộng chỉ số cấp thẻ
function check_xyly(){ 
    var ovr_tc=getOtem("ovr_tc"); var grade=getItem("grade"); var price=getItem("price");
    var ovr=getItem("ovr"); var ovr_phu_1=getItem("ovr_phu_1"); var ovr_phu_2=getItem("ovr_phu_2"); var ovr_phu_3=getItem("ovr_phu_3"); var ovr_phu_4=getItem("ovr_phu_4"); var ovr_phu_5=getItem("ovr_phu_5"); var ovr_phu_6=getItem("ovr_phu_6"); var ovr_phu_7=getItem("ovr_phu_7"); var ovr_phu_8=getItem("ovr_phu_8"); var ovr_phu_9=getItem("ovr_phu_9"); var ovr_phu_10=getItem("ovr_phu_10"); var ovr_phu_11=getItem("ovr_phu_11"); var ovr_phu_12=getItem("ovr_phu_12"); var ovr_phu_13=getItem("ovr_phu_13"); var ovr_phu_14=getItem("ovr_phu_14"); var ovr_phu_15=getItem("ovr_phu_15"); var ovr_phu_16=getItem("ovr_phu_16"); var ovr_phu_17=getItem("ovr_phu_17"); var ovr_phu_18=getItem("ovr_phu_18"); var ovr_phu_19=getItem("ovr_phu_19"); var ovr_phu_20=getItem("ovr_phu_20"); var ovr_phu_21=getItem("ovr_phu_21"); var ovr_phu_22=getItem("ovr_phu_22"); var ovr_phu_23=getItem("ovr_phu_23"); var ovr_phu_24=getItem("ovr_phu_24"); var ovr_phu_25=getItem("ovr_phu_25"); var ovr_phu_26=getItem("ovr_phu_26"); var ovr_phu_27=getItem("ovr_phu_27"); var ovr_phu_28=getItem("ovr_phu_28"); var ovr_phu_29=getItem("ovr_phu_29"); var ovr_phu_30=getItem("ovr_phu_30"); var ovr_phu_31=getItem("ovr_phu_31"); var ovr_phu_32=getItem("ovr_phu_32"); var ovr_phu_33=getItem("ovr_phu_33"); var ovr_phu_34=getItem("ovr_phu_34");
    ovr = parseInt(ovr) + parseInt(ovr_tc); setItem("ovr", ovr);
    ovr_phu_1 = parseInt(ovr_phu_1) + parseInt(ovr_tc); setItem("ovr_phu_1", ovr_phu_1);
    ovr_phu_2 = parseInt(ovr_phu_2) + parseInt(ovr_tc); setItem("ovr_phu_2", ovr_phu_2);
    ovr_phu_3 = parseInt(ovr_phu_3) + parseInt(ovr_tc); setItem("ovr_phu_3", ovr_phu_3);
    ovr_phu_4 = parseInt(ovr_phu_4) + parseInt(ovr_tc); setItem("ovr_phu_4", ovr_phu_4);
    ovr_phu_5 = parseInt(ovr_phu_5) + parseInt(ovr_tc); setItem("ovr_phu_5", ovr_phu_5);
    ovr_phu_6 = parseInt(ovr_phu_6) + parseInt(ovr_tc); setItem("ovr_phu_6", ovr_phu_6);
    ovr_phu_7 = parseInt(ovr_phu_7) + parseInt(ovr_tc); setItem("ovr_phu_7", ovr_phu_7);
    ovr_phu_8 = parseInt(ovr_phu_8) + parseInt(ovr_tc); setItem("ovr_phu_8", ovr_phu_8);
    ovr_phu_9 = parseInt(ovr_phu_9) + parseInt(ovr_tc); setItem("ovr_phu_9", ovr_phu_9);
    ovr_phu_10 = parseInt(ovr_phu_10) + parseInt(ovr_tc); setItem("ovr_phu_10", ovr_phu_10);
    ovr_phu_11 = parseInt(ovr_phu_11) + parseInt(ovr_tc); setItem("ovr_phu_11", ovr_phu_11);
    ovr_phu_12 = parseInt(ovr_phu_12) + parseInt(ovr_tc); setItem("ovr_phu_12", ovr_phu_12);
    ovr_phu_13 = parseInt(ovr_phu_13) + parseInt(ovr_tc); setItem("ovr_phu_13", ovr_phu_13);
    ovr_phu_14 = parseInt(ovr_phu_14) + parseInt(ovr_tc); setItem("ovr_phu_14", ovr_phu_14);
    ovr_phu_15 = parseInt(ovr_phu_15) + parseInt(ovr_tc); setItem("ovr_phu_15", ovr_phu_15);
    ovr_phu_16 = parseInt(ovr_phu_16) + parseInt(ovr_tc); setItem("ovr_phu_16", ovr_phu_16);
    ovr_phu_17 = parseInt(ovr_phu_17) + parseInt(ovr_tc); setItem("ovr_phu_17", ovr_phu_17);
    ovr_phu_18 = parseInt(ovr_phu_18) + parseInt(ovr_tc); setItem("ovr_phu_18", ovr_phu_18);
    ovr_phu_19 = parseInt(ovr_phu_19) + parseInt(ovr_tc); setItem("ovr_phu_19", ovr_phu_19);
    ovr_phu_20 = parseInt(ovr_phu_20) + parseInt(ovr_tc); setItem("ovr_phu_20", ovr_phu_20);
    ovr_phu_21 = parseInt(ovr_phu_21) + parseInt(ovr_tc); setItem("ovr_phu_21", ovr_phu_21);
    ovr_phu_22 = parseInt(ovr_phu_22) + parseInt(ovr_tc); setItem("ovr_phu_22", ovr_phu_22);
    ovr_phu_23 = parseInt(ovr_phu_23) + parseInt(ovr_tc); setItem("ovr_phu_23", ovr_phu_23);
    ovr_phu_24 = parseInt(ovr_phu_24) + parseInt(ovr_tc); setItem("ovr_phu_24", ovr_phu_24);
    ovr_phu_25 = parseInt(ovr_phu_25) + parseInt(ovr_tc); setItem("ovr_phu_25", ovr_phu_25);
    ovr_phu_26 = parseInt(ovr_phu_26) + parseInt(ovr_tc); setItem("ovr_phu_26", ovr_phu_26);
    ovr_phu_27 = parseInt(ovr_phu_27) + parseInt(ovr_tc); setItem("ovr_phu_27", ovr_phu_27);
    ovr_phu_28 = parseInt(ovr_phu_28) + parseInt(ovr_tc); setItem("ovr_phu_28", ovr_phu_28);
    ovr_phu_29 = parseInt(ovr_phu_29) + parseInt(ovr_tc); setItem("ovr_phu_29", ovr_phu_29);
    ovr_phu_30 = parseInt(ovr_phu_30) + parseInt(ovr_tc); setItem("ovr_phu_30", ovr_phu_30);
    ovr_phu_31 = parseInt(ovr_phu_31) + parseInt(ovr_tc); setItem("ovr_phu_31", ovr_phu_31);
    ovr_phu_32 = parseInt(ovr_phu_32) + parseInt(ovr_tc); setItem("ovr_phu_32", ovr_phu_32);
    ovr_phu_33 = parseInt(ovr_phu_33) + parseInt(ovr_tc); setItem("ovr_phu_33", ovr_phu_33);
    ovr_phu_34 = parseInt(ovr_phu_34) + parseInt(ovr_tc); setItem("ovr_phu_34", ovr_phu_34);
}
// kết thúc

// công chỉ số 
// kết thúc