function ch(){
    var text = document.getElementById('level');
    var level = document.level.level.value*1;
    let texts = level*100;
    document.getElementById('maxexp').textContent = texts;
  }
  
  function lv(){
    var level = document.level.level.value*1;
    var nowxp = document.level.nowxp.value*1;
    var xp = document.level.xp.value*1;
    var oldlevel = level;
    var max = 100*level+100;
    var exp = xp+nowxp;
    set(max, level, exp);
  };
  
  function set(max, lv, xp){
    var exp = xp;
    var level = lv;
    var m = max;
    while(m <= exp){
      var m = 100*level;
      var exp = exp-m;
      var level = level+1
    };
    var disp = "";
  
    var m = 100*level;
    let a = document.level.level.value*1
    let b = document.level.nowxp.value*1;
    let c = a * 100
    let d = a;
    let e = level-d;
    let l1 = "Lv"+a+" (XP"+b+"/"+c+")";
    let l2 = "Lv"+level+" "+disp+" (XP"+exp+"/"+m+")";
    let l3 = l1+" → "+l2+"\n(ステータスポイント"+e+"獲得)"
    var results = document.getElementById('result');
    results.textContent = l3;
    if (document.level.result.value == "Lv0 (XP0/0) → Lv2  (XP-100/200)\n(ステータスポイント2獲得)")   results.textContent = "値を入力しやがれください";
  }