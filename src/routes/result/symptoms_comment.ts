
const gradingCriteria: {
    [key: string]: {
        score: number,
        comment: string
    }[]
} = {
    '우울': [
        {
            score: 75,
            comment: '중증의 우울 증상을 보이고 있습니다.'
        },
        {
            score: 70,
            comment: '중등도의 우울 증상을 보이고 있습니다. '
        },
        {
            score: 65,
            comment: '중등도의의 우울 증상을 보이고 있습니다.'
        },
        {
            score: 0,
            comment: '정상 수준입니다.'
        }
    ],
    '공황': [
        {
            score: 75,
            comment: '중증의 공황 증상을 보이고 있습니다.'
        },
        {
            score: 70,
            comment: '중등도의 공황 증상을 보이고 있습니다. '
        },
        {
            score: 65,
            comment: '중등도의의 공황 증상을 보이고 있습니다.'
        },
        {
            score: 0,
            comment: '정상 수준입니다.'
        }
    ],
    'ptsd': [
        {
            score: 75,
            comment: '중증의 외상후 스트레스 장애(PTSD) 증상을 보이고 있습니다.'
        },
        {
            score: 70,
            comment: '중등도의 외상후 스트레스 장애(PTSD) 증상을 보이고 있습니다.'
        },
        {
            score: 65,
            comment: '중등도의의 외상후 스트레스 장애(PTSD) 증상을 보이고 있습니다.'
        },
        {
            score: 0,
            comment: '외상후 스트레스 장애(PTSD)가 의심되지 않습니다.'
        }
    ],
    '불안': [
        {
            score: 75,
            comment: '중증의 불안 증상을 보이고 있습니다.'
        },
        {
            score: 70,
            comment: '중등도의 불안 증상을 보이고 있습니다.'
        },
        {
            score: 65,
            comment: '중등도의의 불안 증상을 보이고 있습니다.'
        },
        {
            score: 0,
            comment: '불안 증상이 의심되지 않습니다.'
        }
    ],
    '특정 공포': [
        {
            score: 75,
            comment: '특정공포증이 강하게 의심됩니다. '
        },
        {
            score: 70,
            comment: '특정공포증이 의심됩니다.'
        },
        {
            score: 65,
            comment: '특정공포증 가능성이 낮습니다.'
        },
        {
            score: 0,
            comment: '정상 수준입니다.'
        }
    ],
    '신체화': [
        {
            score: 75,
            comment: '중증의 신체화 증상을 보이고 있습니다.'
        },
        {
            score: 70,
            comment: '중증의 신체화 증상을 보이고 있습니다.'
        },
        {
            score: 65,
            comment: '중등도의의 신체화 증상을 보이고 있습니다.'
        },
        {
            score: 0,
            comment: '정상 수준입니다.'
        }
    ],
    '조증': [
        {
            score: 75,
            comment: '중증의 조증이 의심됩니다.'
        },
        {
            score: 70,
            comment: '중등도의 조증이 의심됩니다.'
        },
        {
            score: 65,
            comment: '경도의 조증이 의심됩니다.'
        },
        {
            score: 0,
            comment: '정상 수준입니다.'
        }
    ],
    '강박': [
        {
            score: 75,
            comment: '중증의 강박 증상을 보이고 있습니다.'
        },
        {
            score: 70,
            comment: '중등도의 강박 증상을 보이고 있습니다.'
        },
        {
            score: 65,
            comment: '중등도의의 강박 증상을 보이고 있습니다.'
        },
        {
            score: 0,
            comment: '정상 수준입니다.'
        }
    ],
    '수면장애': [
        {
            score: 75,
            comment: '중증의 수면 문제를 보이고 있습니다.'
        },
        {
            score: 70,
            comment: '중등도의 수면 문제를 보이고 있습니다.'
        },
        {
            score: 65,
            comment: '경증의 수면 문제를 보이고 있습니다.'
        },
        {
            score: 0,
            comment: '정상 수준입니다.'
        }
    ],
    '정신증': [
        {
            score: 75,
            comment: '중증의 정신증이 의심됩니다. '
        },
        {
            score: 70,
            comment: '중등도의 정신증이 의심됩니다.'
        },
        {
            score: 65,
            comment: '중등도의의 정신증이 의심됩니다.'
        },
        {
            score: 0,
            comment: '정상 수준입니다.'
        }
    ],
    '편집증': [
        {
            score: 75,
            comment: '중증의 편집증이 의심됩니다.'
        },
        {
            score: 70,
            comment: '중등도의 편집증이 의심됩니다. '
        },
        {
            score: 65,
            comment: '중등도의의 편집증이 의심됩니다.'
        },
        {
            score: 0,
            comment: '정상 수준입니다.'
        }
    ],
}


export const cutoff = (result: Map<string, number>) => {
    const a: [string, string][] = []
    result.forEach((value, key) => {
        const criteria = gradingCriteria[key].sort((a, b) => b.score - a.score);

        for (const [i, c] of criteria.entries()) {
            if (value >= c.score) {
                a.push([key, c.comment])
                return
            };
            if (i === criteria.length - 1) {
                a.push([key, c.comment])
                return
            };
        }
    }
    );
    return a
}