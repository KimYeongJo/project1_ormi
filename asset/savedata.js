const $button = document.querySelector('button')
const $input = document.querySelectorAll('input')

// user input Data
const inputData = []

// API 전달 Data
const sendData = [
    {
        role: "system",
        content: "assistant는 천재 문제 제작자다."
    }, {
        role: "user",
        content: "초등학교 1학년 1학기 수학 연산 문제를 각 2개 만들어줘."
    }, {
        role: "assistant",
        content: JSON.stringify({
            문제1: {
                문제: "1 + 1 은 ?",
                정답: "2",
                해설: "1 + 1 은 2 입니다."},
            문제2: {
                문제: "1 + 2 은 ?",
                정답: "3",
                해설: "1 + 2 은 3 입니다."}
        })
    }
]

// 질문 저장
$button.addEventListener("click", e => {
    for (i = 0; i < $input.length; i++) {
        inputData[i] = $input[i].value
    }

    sendData.push({
        "role": "user",
        content: `${inputData[0]} ${inputData[1]} ${inputData[2]} ${inputData[3]} 문제를 각 ${inputData[4]}개 만들어줘. 결과는 반드시 "문제1":{"문제", "정답", "해설"} 순이고, json 으로만 해줘.`
    })
})