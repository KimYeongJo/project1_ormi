const $button = document.querySelector('button')
const $input = document.querySelectorAll('input')

const inputData = []
const sendData = [{
    "role": "system",
    "content": "assistant는 천재 문제 제작자다."
}]

$button.addEventListener("click", e => {
    for (i = 0; i < $input.length; i++) {
        inputData[i] = $input[i].value
    }
    
    $input[2].value = ''
    $input[3].value = ''

    sendData.push({
        "role": "user",
        content: `${inputData[0]} ${inputData[1]} ${inputData[2]} ${inputData[3]} 문제를 각 ${inputData[4]}개 만들어줘. 결과는 반드시 "문제1":{"문제", "정답", "해설"} 순이고, json 으로만 해줘.`
    })
})