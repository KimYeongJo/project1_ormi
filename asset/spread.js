function spreadData(aiData) {
    
    // 문제 재생성 시 기존 문제 제거
    if (document.getElementById("display")) {
        document.getElementById("display").remove()
    }

    // API 답변 출력할 div 생성 
    const $body = document.querySelector("body")
    const div = document.createElement("div")
    div.setAttribute("id", "display")
    div.classList.add('flex', 'flex-col', 'px-20', 'mx-20', 'mt-20')
    $body.append(div)
    const $display = document.getElementById("display")
    const $scroll = $display.getBoundingClientRect().top
    
    // 화면에 API 답변 출력
    for (let i = 0; i < Object.keys(aiData).length; i++) {
        const id = Object.keys(aiData)[i]
        const problemBox = document.createElement("div")
        problemBox.classList.add('flex', 'flex-col', 'mt-3', 'p-2', 'border-gray', 
                                 'border-solid', 'border-2', 'rounded-lg')
        
        const problem = document.createElement("h2")
        problem.textContent = `문제 : ${aiData[id]["문제"]}`
        
        const solve = document.createElement("textarea")
        solve.innerText = ''
        solve.classList.add('mt-3', 'border-white', 'border-solid', 'border-2',
                            'rounded-lg', 'text-black')
        
        const show = document.createElement("button")
        show.setAttribute("onclick", `answerToggle("${id}")`)
        show.textContent = '정답 보기/숨기기'
        show.classList.add('my-2')
        
        const answer = document.createElement("p")
        answer.setAttribute("name", id)
        answer.setAttribute("style", "display: none")
        answer.textContent = `정답 : ${aiData[id]["정답"]}`
        
        const solution = document.createElement("p")
        solution.setAttribute("name", id)
        solution.setAttribute("style", "display: none")
        solution.textContent = `해설 : ${aiData[id]["해설"]}`
        
        problemBox.append(problem, solve, show, answer, solution)
        $display.append(problemBox)
    }

    window.scrollTo(0, $scroll)
}