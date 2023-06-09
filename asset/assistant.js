export const sendData = [
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
    },
    {"type": "module"}
]