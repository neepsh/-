$('#header').load('../data/header.php',function () {
    $('.header').text('选择地址').click(function () {
        history.back()
    });
})
$('#footer').load('data/footer.php');

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

$.ajax({
    url:"",
    type:"get",
    success:function (res) {
        console.log(res)
    }
})
window.onload=function () {
    function init() {

        let oHeader = document.getElementById('header'),
            oSearch = document.getElementsByClassName('search')[0],
            oMap = document.getElementById('map'),
            oList = document.getElementsByClassName('list')[0];

        let all_height = oMap.offsetHeight + oSearch.offsetHeight + oHeader.offsetHeight;

        let win_hieght = document.documentElement.offsetHeight;

        oList.style.height = win_hieght - all_height + 'px';

        var map = new qq.maps.Map(document.getElementById("map"), {//创建地图，设置中心点，缩放级别
            // 地图的中心地理坐标。
            center: new qq.maps.LatLng(32.02175940032968, 118.9049855092621),
            zoom: 17,
        });

        var geoCoder=new qq.maps.Geocoder({
            complete:function (result) {
                $('.list').empty();
                $.each(result.detail.nearPois,function (i ,str) {
                    //console.log(str)
                    $('.list').append(`
                        <li data-lat=${str.latLng.lat} data-lng=${str.latLng.lng}>
                            <div class="list_num">${i+1}</div>
                            <div class="address">
                                <p>${str.name}</p>
                                <p class="list_info">${str.address}</p>
                            </div>
                        </li>
                   `)
                });

                var aa = {
                    lat: 32.02175940032968,
                    lng: 118.9049855092621
                };
                $('.list li').click(function () {

                    var _this=$(this),lat=Number($(this).attr('data-lat')),lng=Number($(this).attr('data-lng'));

                    var distance=getFlatternDistance(  lat , lng,aa.lat , aa.lng );
                    if(distance>2000){
                        show_dialog({
                            info:"当期地区不在配送范围之内，确定选择？",
                            define:"确定",
                            cancel:"取消"
                        },function (str) {
                            if(str){

                                let info={
                                    address:_this.find('.list_info').text(),
                                    latlng:{
                                        lat:_this.attr('data-lat'),
                                        lng: _this.attr('data-lng')
                                    }
                                };

                                sessionStorage.setItem('xbz_address',JSON.stringify(info));
                                info={};
                                window.location.href='myAddress.html';

                            }
                        })
                    }else {

                        let info={
                            address:_this.find('.list_info').text(),
                            latlng:{
                                lat:_this.attr('data-lat'),
                                lng: _this.attr('data-lng')
                            }
                        };



                        sessionStorage.setItem('xbz_address',JSON.stringify(info));
                        info={};
                        window.location.href='myAddress.html';
                    }
                })

            }
        });

        var search=new qq.maps.SearchService({

            complete:function (data) {

                map.panTo(data.detail.pois[0].latLng);

                $('.list').empty()
               $.each(data.detail.pois,function (i ,obj) {
                  $('.list').append(`
                        <li data-lat=${obj.latLng.lat} data-lng=${obj.latLng.lat}>
                            <div class="list_num">${i+1}</div>
                            <div class="address">
                                <p>${obj.name}</p>
                                <p class="list_info">${obj.address}</p>
                            </div>
                        </li>
                   `)
               });

                $('.list li').click(function () {
                   console.log( $(this).attr('data-lang'))
                    //return
                  //  window.location.href="myAddress.html";
                })

            }
        });

        geoCoder.getAddress(
            new qq.maps.LatLng(32.02175940032968, 118.9049855092621)
        )

        qq.maps.event.addListener(map,"center_changed",function () {
            geoCoder.getAddress(map.getCenter());
        })
        
        $('.search_btn').click(function () {
            //search.setLocaltion('南京');
            search.search($('#address_val').val())
        })

    }
   init();
}
function getFlatternDistance(lat1, lng1, lat2, lng2) {//根据经纬度测算实际距离


    var f = this.getRad(lat1 + lat2);
    var g = this.getRad(lat1 - lat2);
    var l = this.getRad(lng1 - lng2);


    var EARTH_RADIUS = 6378137;
    var sg = Math.sin(g);
    var sl = Math.sin(l);
    var sf = Math.sin(f);


    var s, c, w, r, d, h1, h2;
    var a = EARTH_RADIUS;
    var fl = 1 / 298.257;

    sg = sg * sg;
    sl = sl * sl;
    sf = sf * sf;

    s = sg * (1 - sl) + (1 - sf) * sl;
    c = (1 - sg) * (1 - sl) + sf * sl;

    w = Math.atan(Math.sqrt(s / c));
    r = Math.sqrt(s * c) / w;
    d = 2 * w * a;
    h1 = (3 * r - 1) / 2 / c;
    h2 = (3 * r + 1) / 2 / s;
    

    return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
};
function getRad(d) {
    return d * Math.PI / 360
};

