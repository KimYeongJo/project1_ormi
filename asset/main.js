const $main = document.querySelector("main")

const $form = document.createElement("form")
$form.classList.add('flex', 'flex-col')

$main.append($form)

// id, label, placeholder 배열로 선언
const id = ["grade", "semester", "subject", "range", "count"]
const text = ["학년을 입력해주세요.", "학기를 입력해주세요.", "과목을 입력해주세요.",
              "출제범위를 입력해주세요.", "풀고 싶은 문제 개수를 적어주세요."]
const explain = ["고등학교 2학년", "1학기, 2학기", "물리학, 지구과학, 미적분",
                 "파동, 로그함수, 수열", "1, 2, 3 ..."]

// label, input 창 구현                
for (i = 0; i < id.length; i++) {
    const $label = document.createElement("label")
    $label.setAttribute("for", id[i])
    $label.classList.add('m-2', 'ml-6','text-xl')
    $label.textContent = text[i]

    const $input = document.createElement("input")
    $input.setAttribute("type", "text")
    $input.setAttribute("id", id[i])
    $input.setAttribute("placeholder", explain[i])
    $input.classList.add('border-black', 'border-solid', 'rounded-full', 'm-2', 'p-2', 'pl-4', 'text-black')

    $form.append($label, $input)
}

// sumbit btn 구현
const $btn = document.createElement("button")
$btn.setAttribute("type", "submit")
$btn.classList.add('m-2', 'mt-5', 'p-2', 'border-black', 'border-solid', 'rounded-full', 'bg-green-300', 'text-gray-800')
$btn.textContent = '문제 생성'

$form.append($btn)