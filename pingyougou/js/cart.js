
window.onload = function() {
    var aData = [{
            "imgUrl": "upload/images/shoppingcart_iphone-12-blue-select-2020.png",
            "proName": " iphone 12 Blue 2020",
            "proPrice": "750",
            "proComm": "1"
        },
        {
            "imgUrl": "upload/images/shoppingcart_iphone-12-purple-select-2021.png",
            "proName": " ihpone 12 Purple 2021",
            "proPrice": "820",
            "proComm": "9.7"
        },
        {
            "imgUrl": "upload/images/shoppingcart_iphone-13-pink-select-2021.png",
            "proName": "iphone 13 2021",
            "proPrice": "1510",
            "proComm": "1.3"
        },
        {
            "imgUrl": "upload/images/shoppingcart_iphone-13-pro-family-hero.png",
            "proName": " iphone 13pro Hero",
            "proPrice": "1560",
            "proComm": "1.1"
        },
        {
            "imgUrl": "upload/images/shoppingcart_iphone-13-product-red-select-2021.png",
            "proName": "iphone 13 red ",
            "proPrice": "1650",
            "proComm": "0.3"
        },
        {
            "imgUrl": "upload/images/shoppingcart_iphone-13-pink-select-2021.png",
            "proName": " iphone 13 pink ",
            "proPrice": "1299",
            "proComm": "3.3"
        },
        {
            "imgUrl": "upload/images/shoppingcart_iphone-12-blue-select-2020.png",
            "proName": " iphone 12 Blue 2021",
            "proPrice": "759",
            "proComm": "1.2"
        },
        {
            "imgUrl": "upload/images/shoppingcart_iphone-12-purple-select-2021.png",
            "proName": "  ihpone 12 Purple 2021 ",
            "proPrice": "869",
            "proComm": "0.6"
        },
        {
            "imgUrl": "upload/images/shoppingcart_iphone-13-product-red-select-2021.png",
            "proName": "  iphone 13pro red  ",
            "proPrice": "1799",
            "proComm": "0.3"
        },
        {
            "imgUrl": "upload/images/shoppingcart_iphone-13-pro-family-hero.png",
            "proName": " iphone 13 hero ",
            "proPrice": "1350",
            "proComm": "7.2"
        }
    ];
    var oCar = document.getElementById("car");
    var oBox = document.getElementById("box");
    var oUl = document.getElementsByTagName("ul")[0];
    for (var i = 0; i < aData.length; i++){
        var oLi = document.createElement("li");
        var data = aData[i];
        oLi.innerHTML += '<div class = "pro_img"><img src="'+data["imgUrl"]+'" width ="150" height = "150"></div>';
        oLi.innerHTML += '<h3 id="h3" class ="pro_name"><a rel = "nofollow" href ="#">'+data["proName"]+'</a></h3>';
        oLi.innerHTML += '<p class ="pro_price">$'+data["proPrice"]+'</p>';
        oLi.innerHTML += '<p class="pro_rank">'+data["proComm"]+'????????????</p>';
        oLi.innerHTML += '<div class = "add_btn">Add to Cart </div>';
        oUl.appendChild(oLi);
    }

    
    
    
    var aBtn = getClass(oBox, "add_btn");//get all buttons in the box 
    var number = 0;//initilize the qty of products
    for (var i = 0; i < aBtn.length; i++) { 
        number++;
        aBtn[i].index = i;
        aBtn[i].onclick = function() {
            var oDiv = document.createElement("div");
            var data = aData[this.index];
            oDiv.className = "row hid";
            oDiv.innerHTML += '<div class="check left"> <i class="i_check" id="i_check" onclick="i_check()" >???</i></div>';
            oDiv.innerHTML += '<div class="img left"><img src="' + data["imgUrl"] + '" width="80" height="80"></div>';
            oDiv.innerHTML += '<div class="name left"><span>' + data["proName"] + '</span></div>';
            oDiv.innerHTML += '<div class="price left"> <span>$' + data["proPrice"] + '</span></div>';
            oDiv.innerHTML +=' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div> </div>'
            oDiv.innerHTML += '<div class="subtotal left"><span>$' + data["proPrice"] + '</span></div>'
            oDiv.innerHTML += '<div class="ctrl left"><a rel="nofollow" href="javascript:;">??</a></div>';
            oCar.appendChild(oDiv);
            
            var flag = true;
            var check = oDiv.firstChild.getElementsByTagName("i")[0];
            check.onclick = function() {
                // console.log(check.className);
                if (check.className == "i_check i_acity") {
                    check.classList.remove("i_acity");

                } else {
                    check.classList.add("i_acity");
                }
                getAmount();
            }
            var delBtn = oDiv.lastChild.getElementsByTagName("a")[0];
            delBtn.onclick = function() {
                var result = confirm("????????????????");
                if (result) {
                    oCar.removeChild(oDiv);
                    number--;
                    getAmount();
                }
            }
            var i_btn = document.getElementsByClassName("count_i");
            for (var k = 0; k < i_btn.length; k++) {
                i_btn[k].onclick = function() {
                    bt = this;
                    console.log(bt);
                    //??????????????????
                    at = this.parentElement.parentElement.nextElementSibling;
                    console.log(at);
                    //??????????????????
                    pt = this.parentElement.parentElement.previousElementSibling;
                    //???????????????
                    node = bt.parentNode.childNodes[1];
                    console.log(node);
                    num = node.innerText;
                    num = parseInt(num);
                    num++;
                    node.innerText = num;
                    //????????????
                    price = pt.innerText;
                    price = price.substring(1, price.length );
                    console.log(price);
                    //???????????????
                    at.innerText =  '$'+ price * num ;
                    //???????????????
                    getAmount();
                }
            }
            //?????????????????????????????????
            var d_btn = document.getElementsByClassName("count_d");
            for (k = 0; k < i_btn.length; k++) {
                d_btn[k].onclick = function() {
                    bt = this;
                    //??????????????????
                    at = this.parentElement.parentElement.nextElementSibling;
                    //??????????????????
                    pt = this.parentElement.parentElement.previousElementSibling;
                    //??????c_num??????
                    node = bt.parentNode.childNodes[1];
                    num = node.innerText;
                    num = parseInt(num);
                    if (num > 1) {
                        num--;
                    }
                    node.innerText = num;
                    //????????????
                    price = pt.innerText;
                    price = price.substring(1, price.length);
                    //???????????????		
                    at.innerText = '$' + price * num;
                    //???????????????
                    getAmount();
                }
            }

            delBtn.onclick = function() {
                var result = confirm("Delete Confirmation?");
                if (result) {
                    oCar.removeChild(oDiv);
                    number--;
                    getAmount();
                }
            }

        }
    }

}

// function to get all tags from the box 
function getClass(oBox , tagname){
    var aTag = oBox.getElementsByTagName('*');
    var aBox = [];
    for (var i = 0; i < aTag.length; i++){
        if (aTag[i].className == tagname){
            aBox.push(aTag[i]);
        }
    }
    return aBox;
}



var index = false;
function checkAll() {
    var choose = document.getElementById("car").getElementsByTagName("i");
    // console.log(choose);
    if (choose.length != 1) {
        for (i = 1; i < choose.length; i++) {
            if (!index) {
                choose[0].classList.add("i_acity2")
                choose[i].classList.add("i_acity");
            } else {
                choose[i].classList.remove("i_acity");
                choose[0].classList.remove("i_acity2")
            }
        }
        index = !index;
    }
    getAmount();
}



//??????????????????
function getAmount() {
    // console.log(ys);
    ns = document.getElementsByClassName("i_acity");
    // console.log(ns);
    sum = 0;
    //?????????
    document.getElementById("price_num").innerText = sum;
    for (y = 0; y < ns.length; y++) {
        //??????
        amount_info = ns[y].parentElement.parentElement.lastElementChild.previousElementSibling;
        num = amount_info.innerText;
        num = num.substring(1,num.length);
        num = parseInt(num);
        sum += num;
        
        document.getElementById("price_num").innerText = sum;
    }
}
