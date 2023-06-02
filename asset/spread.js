function spreadData(aiData) {
    
    const $body = document.querySelector("body")
    const div = document.createElement("div")
    div.setAttribute("id", "display")
    $body.append(div) 
    const $display = document.getElementById("display")
    
    // $(document).ready(function(){
    //     $("p").hide();
    //     $("button").click(function(){
    //         $("p").toggle();
    //     });
    // });
    
    for (i in aiData) {
        const id = aiData[i]
        const problemBox = document.createElement("div")
        problemBox.classList.add('flex', 'flex-col', 'mt-3', 'border-black', 'border-solid', 'border-2', 'w-2/3')
        
        const problem = document.createElement("h2")
        problem.textContent = `문제 : ${id["문제"]}`
        // problem.classList.add('flex')
        
        const solve = document.createElement("textarea")
        solve.innerText = ''
        solve.classList.add('border-black', 'border-solid', 'border-2', 'w-2/3')
        
        const show = document.createElement("button")
        show.setAttribute("onclick", "showHide(id[key])")
        show.textContent = '정답 보기'
        solve.classList.add('border-black', 'border-solid', 'border-2')
        
        const answer = document.createElement("p")
        answer.setAttribute("id", id.key)
        answer.textContent = `정답 : ${id["정답"]}`
        answer.classList.add('display', 'hide')
        
        const solution = document.createElement("p")
        solution.setAttribute("id", id.key)
        solution.textContent = `해설 : ${id["해설"]}`
        solution.classList.add('display', 'hide')
        
        problemBox.append(problem, solve, show, answer, solution)
        $display.append(problemBox)
        $("p").hide();
    }
}