const $form = document.querySelector('form')

// openAI API URL
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

// API 답변 Data
let aiData = []

// form 태그 sumbit 시 API 요청
$form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
        redirect: "follow",
        })
        .then(res => res.json())
        .then(res => {
            aiData = JSON.parse(res.choices[0].message.content)
            console.log(aiData)
            closeLoadingWithMask()
            spreadData(aiData)
        })
        .catch(() => {
            alert("AI 동작 실패! 새로고침 해주세요")
        })
    LoadingWithMask()
})