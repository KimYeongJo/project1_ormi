function LoadingWithMask() {
    const $body = document.getElementById("body")

    const mask = document.createElement("div")
    mask.classList.add()

    $body.append(mask)


//     //화면의 높이와 너비를 구합니다.
//     // let maskHeight = $(document).height();
//     const $body = document.querySelector("body")
//     let maskHeight = window.document.body.clientHeight;
//     let maskWidth  = window.document.body.clientWidth;
    
//     //화면에 출력할 마스크를 설정해줍니다.
//     // let mask       = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
//     // let loadingImg = '';
    
//     // loadingImg += "<div id='loadingImg'>";
//     // loadingImg += " <img src='./Img/LoadingImg.gif' style='position: relative; display: block; margin: 0px auto;'/>";
//     // loadingImg += "</div>";  
    
//     const mask = document.createElement("div")
//     mask.setAttribute("id", "mask")
//     mask.setAttribute('style', 'position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;')

//     const loadingImg = document.createElement("div")
//     loadingImg.setAttribute("id", "loadingImg")
//     loadingImg.setAttribute('style', 'position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;')

//     //화면에 레이어 추가
//     $body.append(mask, lo)
//         .append(mask)
//         .append(loadingImg)
        
//     //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
//     $('#mask').css({
//             'width' : maskWidth
//             , 'height': maskHeight
//             , 'opacity' : '0.3'
//     }); 
  
//     //마스크 표시
//     $('#mask').show();   
  
//     //로딩중 이미지 표시
//     $('#loadingImg').show();
// }

// function closeLoadingWithMask() {
//     $('#mask, #loadingImg').hide();
//     $('#mask, #loadingImg').remove();  
// }