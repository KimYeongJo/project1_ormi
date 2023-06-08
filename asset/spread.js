function spreadData(aiData) {
    
    // API 답변 출력할 div 생성 
    const $body = document.querySelector("body")
    const div = document.createElement("div")
    div.setAttribute("id", "display")
    div.classList.add('flex', 'flex-col', 'px-20', 'mx-20', 'mt-20')
    $body.append(div) 
    const $display = document.getElementById("display")
    
    // aiData index 순회용
    let j = 0
    
    // 화면에 API 답변 출력
    for (i in aiData) {
        const id = aiData[i]
        const key = Object.keys(aiData)[j]
        const problemBox = document.createElement("div")
        problemBox.classList.add('flex', 'flex-col', 'mt-3', 'p-2', 'border-gray', 'border-solid', 'border-2', 'rounded-lg')
        
        const problem = document.createElement("h2")
        problem.textContent = `문제 : ${id["문제"]}`
        
        const solve = document.createElement("textarea")
        solve.innerText = ''
        solve.classList.add('mt-3', 'border-white', 'border-solid', 'border-2', 'rounded-lg', 'text-black')
        
        const show = document.createElement("button")
        show.setAttribute("onclick", `answerToggle("${key}")`)
        show.textContent = '정답 보기/숨기기'
        show.classList.add('my-2')
        
        const answer = document.createElement("p")
        answer.setAttribute("name", key)
        answer.setAttribute("style", "display: none")
        answer.textContent = `정답 : ${id["정답"]}`
        
        const solution = document.createElement("p")
        solution.setAttribute("name", key)
        solution.setAttribute("style", "display: none")
        solution.textContent = `해설 : ${id["해설"]}`
        
        problemBox.append(problem, solve, show, answer, solution)
        $display.append(problemBox)
        j++
    }
}