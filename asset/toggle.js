// 정답,해설 display toggle 함수
function answerToggle(name) {
    const $key = document.getElementsByName(name)
    $key.forEach((toggle) => {
        if (toggle.style.display == 'none') {
            toggle.style.display = 'block'
        }
        else {
            toggle.style.display = 'none'
        }
    })
}