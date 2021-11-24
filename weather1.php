<?php
date_default_timezone_set('Asia/Tokyo');
 
$wind_d = array("北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北");
 
$url = 'http://api.openweathermap.org/data/2.5/forecast?q=Kamakura,jp&APPID=3973573df4b90d77334586fa2dfedd87';
$weather = json_decode(file_get_contents($url), true);
 
    //天気予報テーブルの作成
    $tbhtml  = "<table align='center'>";
    $tbhtml .= "<tbody>"; 
            //日時取得
            $tbhtml .= "<tr>\n";
            $tbhtml .= "<th>日時</th>";
            for($i=0; $i < 9; $i++){
                $tbhtml .= "<td align='center'>";
                $tbhtml .= date("d日H時" , $weather['list'][$i]['dt']);
                $tbhtml .= "</td>\n";
            }
            $tbhtml .= "</tr>\n";
            //天気アイコン取得
            $tbhtml .= "<tr>\n";
            $tbhtml .= "<th rowspan='2'>天気</th>";
            for($i=0; $i < 9; $i++){
                $tbhtml .= "<td align='center'>";
                $tbhtml .= "<img src='http://openweathermap.org/img/w/" .$weather['list'][$i]['weather'][0]['icon'] .".png'>";
                $tbhtml .= "</td>\n";
            }
            $tbhtml .= "</tr>\n";
            //天気名(略)取得
            $tbhtml .= "<tr>\n";
            for($i=0; $i < 9; $i++){
                $tbhtml .= "<td align='center'>";
                $tbhtml .= $weather['list'][$i]['weather'][0]['main'];
                $tbhtml .= "</td>\n";
            }
            $tbhtml .= "</tr>\n";
            //気温取得
            $tbhtml .= "<tr>\n";
            $tbhtml .= "<th>気温(℃)</th>";
            for($i=0; $i < 9; $i++){
                $tbhtml .= "<td align='center'>";
                $tbhtml .= round(($weather['list'][$i]['main']['temp']) - 273.15);
                $tbhtml .= "</td>\n";
            }
            $tbhtml .= "</tr>\n";
            //湿度取得
            $tbhtml .= "<tr>\n";
            $tbhtml .= "<th>湿度(%)</th>";
            for($i=0; $i < 9; $i++){
                $tbhtml .= "<td align='center'>";
                $tbhtml .= $weather['list'][$i]['main']['humidity'];
                $tbhtml .= "</td>\n";
            }
            $tbhtml .= "</tr>\n";
            //風速取得
            $tbhtml .= "<tr>\n";
            $tbhtml .= "<th>風速(m/s)</th>";
            for($i=0; $i < 9; $i++){
                $tbhtml .= "<td align='center'>";
                $tbhtml .= round($weather['list'][$i]['wind']['speed']);
                $tbhtml .= "</td>\n";
            }
            $tbhtml .= "</tr>\n";
            //風向取得
            $tbhtml .= "<tr>\n";
            $tbhtml .= "<th>風向</th>";
            for($i=0; $i < 9; $i++){
                $wind_d2 = round($weather['list'][$i]['wind']['deg'] / 22.5);
                $wind_16 = $wind_d[$wind_d2];
                $tbhtml .= "<td align='center'>";
                $tbhtml .= $wind_16;
                $tbhtml .= "</td>\n";
            }
            $tbhtml .= "</tr>\n";
 
        $tbhtml .= "</tbody>\n";
        $tbhtml .= "</table>\n";