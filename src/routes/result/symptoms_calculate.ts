type aa = {
    index: number[],
    avr: {
        male: number,
        famale: number,
        other: number
    },
    oneSd: {
        male: number,
        famale: number,
        other: number
    }
}

const gradingCriteria: { [key: string]: aa } = {
    '우울': {
        index: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 40],
        avr: {
            male: 25.33,
            famale: 29.45,
            other: 27.97
        },
        oneSd: {
            male: 7.21,
            famale: 7.91,
            other: 7.91
        }
    },
    '공황': {
        index: [20, 21, 22, 23],
        avr: {
            male: 5.88,
            famale: 6.66,
            other: 6.38
        },
        oneSd: {
            male: 2.82,
            famale: 3.18,
            other: 3.08
        }
    },
    'ptsd': {
        index: [28, 29, 30, 31],
        avr: {
            male: 5.53,
            famale: 6.69,
            other: 6.27
        },
        oneSd: {
            male: 2.75,
            famale: 3.31,
            other: 3.16
        }
    },
    '불안': {
        index: [10, 12, 13, 16, 18, 19],
        avr: {
            male: 10.75,
            famale: 12.84,
            other: 12.09
        },
        oneSd: {
            male: 3.34,
            famale: 3.5,
            other: 3.58
        }
    },
    '특정 공포': {
        index: [15],
        avr: {
            male: 1.42,
            famale: 1.66,
            other: 1.58
        },
        oneSd: {
            male: 0.75,
            famale: 0.81,
            other: 0.8
        }
    },
    '신체화': {
        index: [7, 11, 32, 33],
        avr: {
            male: 7.4,
            famale: 9.06,
            other: 8.47
        },
        oneSd: {
            male: 2.65,
            famale: 2.9,
            other: 2.92
        }
    },
    '조증': {
        index: [34, 35],
        avr: {
            male: 2.46,
            famale: 2.46,
            other: 2.46
        },
        oneSd: {
            male: 0.98,
            famale: 0.91,
            other: 0.94
        }
    },
    '강박': {
        index: [24, 25, 26, 27],
        avr: {
            male: 6,
            famale: 6.29,
            other: 6.18
        },
        oneSd: {
            male: 1.78,
            famale: 1.87,
            other: 1.84
        }
    },
    '수면장애': {
        index: [8, 17],
        avr: {
            male: 3.44,
            famale: 4.05,
            other: 3.83
        },
        oneSd: {
            male: 1.47,
            famale: 1.59,
            other: 1.58
        }
    },
    '정신증': {
        index: [37, 38],
        avr: {
            male: 2.38,
            famale: 2.22,
            other: 2.24
        },
        oneSd: {
            male: 0.75,
            famale: 0.64,
            other: 0.68
        }
    },
    '편집증': {
        index: [36, 39],
        avr: {
            male: 2.46,
            famale: 2.69,
            other: 2.61
        },
        oneSd: {
            male: 0.83,
            famale: 0.94,
            other: 0.91
        }
    }
}


export const symptomsCalculate = (scores: number[], gender: 'male' | 'famale' | 'other') => {
    const results = new Map<string, number>();
    for (const category in gradingCriteria) {
        const questions = gradingCriteria[category];
        const avr = questions.avr[gender];
        const sd = questions.oneSd[gender];
        const matchingQuestions = questions.index.map((q) => scores[q - 1]).reduce((a, b) => a + b, 0);

        const result = ((matchingQuestions - avr) / sd * 10) + 50
        console.log(category, result)
        results.set(category, result);
    }
    return results;

}