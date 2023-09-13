type ScoreMap = { [key: string]: number[] };
const r: { [key: string]: ScoreMap } = {
    "단절 및 거절": {
        "정서적 결핍": [1, 19],
        '유기불안정': [2, 20],
        "불신/ 학대": [3, 21],
        "사회적고립 / 소외": [4, 22],
        "결함 / 수치심": [5, 23],
    },
    "손상된 자율성 및 손상된 수행": {
        "실패": [6, 24],
        "의존 / 무능": [7, 25],
        "취약성": [8, 26],
        "융합 / 미발달된 자기": [9, 27],
    },
    "타인 - 중심성": {
        "복종": [10, 28],
        "자기희생": [11, 29],
        "승인추구 / 인정추구": [12, 30],
    },
    "과잉 경계 및 억제": {
        "정서적 억제": [13, 31],
        "엄격한기준 / 과잉비판": [14, 32],
        "부정성 / 비관주의": [15, 33],
        "처벌": [16, 34],
    },
    "손상된 한계": {
        "특권의식 / 웅대성": [17, 35],
        "부족한자기통제 / 훈련": [18, 36],
    }
}
export const calculate = (scores: number[]): { category: string, name: string; sum: number; answers: number[][]; }[] => {
    const aa: Map<string, { category: string, name: string; sum: number; answers: number[][]; }> = new Map();


    for (const category in r) {
        for (const label in r[category]) {
            const questions = r[category][label];

            const matchingQuestions = questions.filter((q) => scores[q - 1] >= 4);

            if (matchingQuestions.length > 0) {
                const questionScore = questions.map(q => [q, scores[q - 1]]);
                const sum = questionScore.reduce((a, b) => a + b[1], 0);
                const qq = {
                    category: category,
                    name: label,
                    sum: sum,
                    answers: questionScore
                }

                aa.set(label, qq);
            }
        }
    }
    const mapToArray = Array.from(aa, ([name, value]) => value);
    const sortedArray = mapToArray.sort((a, b) => {
        const maxA = Math.max(...a.answers.map(v => v[1]));
        const maxB = Math.max(...b.answers.map(v => v[1]));

        if (maxA !== maxB) {
            return maxB - maxA;  // 기존의 비교 로직
        }
        const sumA = a.sum;
        const sumB = b.sum;

        if (sumA !== sumB) {
            return sumB - sumA;
        }

        let indexA = a.answers[0][0];
        let indexB = b.answers[0][0];

        if (indexA >= 19) indexA - 18
        if (indexB >= 19) indexB - 18

        return indexA - indexB;

    });

    return sortedArray.slice(0, 3);
};



