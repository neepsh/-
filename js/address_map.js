$('#header').load('data/header.php',function () {
    $('.header').text('选择地址');
})
$('#footer').load('data/footer.php');

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

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

                    $('.list').append(`
                        <li>
                            <div class="list_num">${i+1}</div>
                            <div class="address">
                                <p>${str.name}</p>
                                <p >${str.address}</p>
                            </div>
                        </li>
                   `)
                })
            }
        });

        var search=new qq.maps.SearchService({

            complete:function (data) {

                $('.list').empty()
               $.each(data.detail.pois,function (i ,obj) {
                  $('.list').append(`
                        <li>
                            <div class="list_num">${i+1}</div>
                            <div class="address">
                                <p>${obj.name}</p>
                                <p >${obj.address}</p>
                            </div>
                        </li>
                   `)
               })
            }
        })

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

