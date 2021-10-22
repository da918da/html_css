      //算平均數 並四捨五入到小數點第二位

      function array_avg(scores) {
        //邏輯後放進函式當中

        var total = 0;
        for (let i = 0; i < scores.length; i++) {
          total += scores[i];
        }
        console.log(total);

        var average_score = (total / scores.length).toFixed(2);
        // console.log(average_score);
        // console.log(average_score.toFixed(2));
        return average_score;
      }

      //陣列移除重覆的項目

      var line_ids = ["232fsda", "fsafsdf", "barwr", "232fsda", "98yfsae", "barwr"];
      var line_ids_unique = [];        //空值判斷有值
      for (let i = 0; i < line_ids.length; i++) {
          if(!line_ids_unique.includes(line_ids[i])){
            line_ids_unique.push(line_ids[i]);
          }
          // if(!line_ids.includes(line_ids_unique[i])){
          //   line_ids_unique.push(line_ids[i]);
          // }
          
      }
      console.log(line_ids_unique);

      //倒數 10 秒
    setTimeout(function(){
      console.log("timeout");     
    }, 10000);
    console.log("這裡會先執行");



     