function spreadData(aiData) {
    
    const $body = document.querySelector("body")
    const div = document.createElement("div")
    div.setAttribute("id", "display")
    $body.append(div) 
    const $display = document.getElementById("display")
    
    let j = 0
    
    for (i in aiData) {
        const id = aiData[i]
        const key = Object.keys(aiData)[j]
        const problemBox = document.createElement("div")
        problemBox.classList.add('flex', 'flex-col', 'mt-3', 'border-black', 'border-solid', 'border-2', 'w-2/3')
        
        const problem = document.createElement("h2")
        problem.textContent = `문제 : ${id["문제"]}`
        
        const solve = document.createElement("textarea")
        solve.innerText = ''
        solve.classList.add('border-black', 'border-solid', 'border-2', 'w-2/3')
        
        const show = document.createElement("button")
        show.setAttribute("id", "btn_toggle")
        show.setAttribute("onclick", `$('#${key}').toggle()`)
        show.textContent = '정답 보기'
        solve.classList.add('border-black', 'border-solid', 'border-2')
        
        const answer = document.createElement("p")
        answer.setAttribute("id", `${key}`)
        answer.setAttribute("style", "display: none")
        answer.textContent = `정답 : ${id["정답"]}`
        
        const solution = document.createElement("p")
        solution.setAttribute("id", `${key}`)
        solution.setAttribute("style", "display: none")
        solution.textContent = `해설 : ${id["해설"]}`
        
        problemBox.append(problem, solve, show, answer, solution)
        $display.append(problemBox)
        j++
    }
}