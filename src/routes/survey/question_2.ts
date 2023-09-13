const questions: quest = [
    {
        index: 1,
        question: "최근 2주 동안, 우울한 기분이나 슬픔을 느낍니다.",
        answers: [
            { index: 1, answer: "느끼지 않습니다.", score: 1 },
            { index: 2, answer: "가끔 느낍니다.", score: 2 },
            { index: 3, answer: "하루의 절반 이하의 시간 동안, 매일 느낍니다.", score: 3 },
            { index: 4, answer: "하루의 절반이 넘는 시간 동안, 매일 느낍니다.", score: 4 }
        ]
    },
    {
        index: 2,
        question: "최근 2주 동안, 평소보다 더 짜증스럽고 화가 납니다.",
        answers: [
            { index: 1, answer: "평소와 다르지 않습니다.", score: 1 },
            { index: 2, answer: "며칠 정도 그랬던 적이 있습니다.", score: 2 },
            { index: 3, answer: "절반 이상의 기간 동안 그랬습니다.", score: 3 },
            { index: 4, answer: "거의 매일 짜증스럽고 화가 났습니다.", score: 4 }
        ]
    },
    {
        index: 3,
        question: "최근 2주 동안, 일상이나 취미생활에서의 즐거움이 느껴지지 않습니다.",
        answers: [
            { index: 1, answer: "평소처럼 즐거움이 잘 느껴집니다.", score: 1 },
            { index: 2, answer: "이전만큼 즐겁지 않습니다.", score: 2 },
            { index: 3, answer: "어떤 것을 해도 만족스럽지 않습니다.", score: 3 },
            { index: 4, answer: "모든 것이 즐겁지 않고, 불만입니다.", score: 4 }
        ]
    },
    {
        index: 4,
        question: "최근 사는 것이 허무하게 느껴집니다.",
        answers: [
            { index: 1, answer: "전혀 그렇지 않습니다.", score: 1 },
            { index: 2, answer: "가끔 그렇습니다.", score: 2 },
            { index: 3, answer: "매우 그렇습니다.", score: 3 },
            { index: 4, answer: "늘 그렇습니다.", score: 4 }
        ]
    },
    {
        index: 5,
        question: "최근 1개월 동안, 너무 많이 먹거나 적게 먹어서, 체중 변화가 뚜렷합니다.",
        answers: [
            { index: 1, answer: "전혀 그렇지 않습니다.", score: 1 },
            { index: 2, answer: "1kg 내외의 약간의 변화가 있습니다.", score: 2 },
            { index: 3, answer: "원래 체중의 5%(1/20)이상의 살이 찌거나, 빠졌습니다.", score: 3 },
            { index: 4, answer: "원래 체중의 10%(1/10)이상의 살이 찌거나, 빠졌습니다.", score: 4 }
        ]
    },
    {
        index: 6,
        question: "최근 식욕이 떨어졌습니다.",
        answers: [
            { index: 1, answer: "아닙니다. 평소와 다르지 않습니다.", score: 1 },
            { index: 2, answer: "이전만큼은 식욕이 좋지 않습니다.", score: 2 },
            { index: 3, answer: "식욕이 많이 떨어져, 식사보다는 끼니를 때운다는 표현이 더 적당한 것 같습니다.", score: 3 },
            { index: 4, answer: "식욕이 전혀 없고, 음식 맛이 잘 느껴지지도 않습니다.", score: 4 }
        ]
    },
    {
        index: 7,
        question: "설명할 수 없는 메슥거리고 토할 것 같은 증상을 느낍니다.",
        answers: [
            { index: 1, answer: "거의 없습니다.", score: 1 },
            { index: 2, answer: "일 년에 한 번 느낍니다.", score: 2 },
            { index: 3, answer: "한 달에 한 번 느낍니다.", score: 3 },
            { index: 4, answer: "일주일에 한 번 이상 느낍니다.", score: 4 }
        ]
    },
    {
        index: 8,
        question: "요즘 잠이 드는 것이 힘듭니다.",
        answers: [
            { index: 1, answer: "이불 속에 들어가면 30분 이내에 잠듭니다.", score: 1 },
            { index: 2, answer: "이불 속에 들어가면 잠이 드는데 30분 이상 걸릴 때가 가끔 있습니다.", score: 2 },
            { index: 3, answer: "거의 매일 잠이 드는데 30분 이상 걸리지만, 약이나 술 없이 잠들 수 있습니다.", score: 3 },
            { index: 4, answer: "거의 매일 잠이 드는데 30분 이상 걸리고, 약이나 술 등의 방법을 이용해야 잠이 듭니다.", score: 4 }
        ]
    },
    {
        index: 9,
        question: "남들이 괜찮다고 하는 일도 나는 죄책감을 느낍니다.",
        answers: [
            { index: 1, answer: "아닙니다. 남들보다 더 죄책감을 느끼지는 않습니다.", score: 1 },
            { index: 2, answer: "죄책감을 느낄 때가 많습니다.", score: 2 },
            { index: 3, answer: "죄책감을 느낄 때가 아주 많습니다.", score: 3 },
            { index: 4, answer: "죄책감으로 늘 고통스럽습니다.", score: 4 }
        ]
    },
    {
        index: 10,
        question: "나는 거의 모든 일에 지나치게 걱정을 합니다.",
        answers: [
            { index: 1, answer: "아닙니다. 지나치게 걱정하지 않습니다.", score: 1 },
            { index: 2, answer: "남들보다 걱정이 많지만, 어느 정도 걱정하는 것을 조절 할 수 있습니다.", score: 2 },
            { index: 3, answer: "걱정 때문에 실제로 해야 할 일에 집중이 잘 안되지만, 일을 제 시간에 끝낼 수 있습니다.", score: 3 },
            { index: 4, answer: "지나치게 걱정이 많아서 해야 할 일을 제때 완료할 수 없습니다.", score: 4 }
        ]
    },
    {
        index: 11,
        question: "나는 요즘 피곤합니다.",
        answers: [
            { index: 1, answer: "아닙니다. 평소보다 더 피곤하지는 않습니다.", score: 1 },
            { index: 2, answer: "이전보다 쉽게 피곤해지지만, 일상생활만으로는 피곤해지지 않습니다.", score: 2 },
            { index: 3, answer: "일상생활만으로도 쉽게 피곤해집니다.", score: 3 },
            { index: 4, answer: "너무 피곤해서 아무 일도 할 수 없습니다.", score: 4 }
        ]
    },
    {
        index: 12,
        question: "특별한 이유 없이도 불안감을 느낍니다.",
        answers: [
            { index: 1, answer: "아닙니다. 그렇지 않습니다.", score: 1 },
            { index: 2, answer: "가끔 불안한 기분을 느낍니다.", score: 2 },
            { index: 3, answer: "늘 불안한 기분을 느낍니다.", score: 3 },
            { index: 4, answer: "불안함이 극심하여, 일상생활에 지장이 있습니다.", score: 4 }
        ]
    },
    {
        index: 13,
        question: "나는 최근 집중력이 떨어졌습니다.",
        answers: [
            { index: 1, answer: "아닙니다. 평소와 다르지 않습니다.", score: 1 },
            { index: 2, answer: "집중력이 조금 떨어졌다고 느끼지만, 주변 사람들은 눈치채지 못합니다.", score: 2 },
            { index: 3, answer: "집중력이 꽤 떨어져 깜빡 잊어버리는 일이 늘었고, 이전보다 더 노력해서 집중해야 동일한 일을 할 수 있습니다.", score: 3 },
            { index: 4, answer: "집중력이 완전히 떨어져 주변 사람들이 쉽게 눈치채며, 생활에 현저하게 지장을 줍니다.", score: 4 }
        ]
    },
    {
        index: 14,
        question: "나는 과거의 사소한 실패에 집착합니다.",
        answers: [
            { index: 1, answer: "아닙니다. 사소한 실패에는 집착하지 않습니다.", score: 1 },
            { index: 2, answer: "내 실수에 대해 나 자신을 탓하는 편이지만, 그 실수에 대해 자주 생각하지는 않습니다.", score: 2 },
            { index: 3, answer: "내가 한 일이 잘못되었을 때는 언제나 나를 탓하며, 그 일을 자주 생각합니다.", score: 3 },
            { index: 4, answer: "일어나는 모든 나쁜 일이 다 내 탓이며, 과거의 사소한 실수들조차 늘 머리 속에서 머뭅니다.", score: 4 }
        ]
    },
    {
        index: 15,
        question: "나는 비행기를 타거나, 어떤 동물을 보거나, 높은 곳에 올라가는 등 특정 상황에서 유독 극심한 공포를 느낍니다.",
        answers: [
            { index: 1, answer: "아닙니다. 극심한 공포를 느끼지 않습니다.", score: 1 },
            { index: 2, answer: "극심한 공포를 간혹 느낍니다.", score: 2 },
            { index: 3, answer: "극심한 공포를 자주 느낍니다.", score: 3 },
            { index: 4, answer: "특정 상황에서 예외 없이 극심한 공포를 느껴, 그 상황을 최대한 피하려 합니다.", score: 4 }
        ]
    },
    {
        index: 16,
        question: "연설이나 발표 등 많은 사람이 있는 곳에서 말할 때, 나쁜 평가를 받을까 봐 불안합니다.",
        answers: [
            { index: 1, answer: "아닙니다. 위 상황에서 불안함은 없습니다.", score: 1 },
            { index: 2, answer: "약간의 불안함은 있으나, 다른 사람이 내 불안을 눈치채지는 못합니다.", score: 2 },
            { index: 3, answer: "늘 불안함을 느끼며, 목소리가 떨리고 얼굴이 붉어져 다른 사람이 쉽게 알 수 있습니다.", score: 3 },
            { index: 4, answer: "거의 언제나 극심한 불안함을 느껴, 위 상황을 적극적으로 피합니다.", score: 4 }
        ]
    },
    {
        index: 17,
        question: "자는 중간에 잠에서 깹니다. (화장실을 가기 위해 깨는 것은 제외.)",
        answers: [
            { index: 1, answer: "아닙니다. 잘 깨지 않습니다.", score: 1 },
            { index: 2, answer: "가끔 깨지만, 신경 쓰이지 않습니다.", score: 2 },
            { index: 3, answer: "한밤중에 깨긴 하지만, 노력하면 30분 이내에 잠이 듭니다.", score: 3 },
            { index: 4, answer: "한밤중에 깨고, 노력해도 다시 잠들 수 없습니다.", score: 4 }
        ]
    },
    {
        index: 18,
        question: "나는 특별한 일이 없어도 초조하고 안절부절 못합니다.",
        answers: [
            { index: 1, answer: "아닙니다. 특별한 일이 없다면 그렇지 않습니다.", score: 1 },
            { index: 2, answer: "가끔 초조하고 안절부절 못합니다.", score: 2 },
            { index: 3, answer: "자주 초조하고 안절부절못하며, 손을 비틀거나 몸을 움직이면 바로 호전됩니다", score: 3 },
            { index: 4, answer: "거의 언제나 초조하고 안절부절못하며, 무엇을 해도 잘 호전되지 않습니다.", score: 4 }
        ]
    },
    {
        index: 19,
        question: "나는 별 것 아닌 일에도 쉽게 놀랍니다.",
        answers: [
            { index: 1, answer: "전혀 그렇지 않습니다.", score: 1 },
            { index: 2, answer: "가끔 그렇습니다.", score: 2 },
            { index: 3, answer: "매우 그렇습니다.", score: 3 },
            { index: 4, answer: "늘 그렇습니다.", score: 4 }
        ]
    },
    {
        index: 20,
        question: "갑자기 시작해서, 10분 안에 최고조에 달하는 공포감이나 두려움(이하 공황발작)을 겪어 보셨나요 ? 혹시 겪어 보셨다면, 다음 중 어떤 증상이 같이 나타났는지 모두 체크 해 주세요.",
        group: [21, 22, 23],
        answers: [
            { index: 1, answer: "심장이 마구 두근거림.", score: 1 },
            { index: 2, answer: "스스로 통제할 수 없거나, 미칠 것 같은 두려움.", score: 2 },
            { index: 3, answer: "숨이 막히는 느낌.", score: 3 },
            { index: 4, answer: "진땀이 남.", score: 4 },
            { index: 5, answer: "몸이 떨림.", score: 5 },
            { index: 6, answer: "메스껍거나 배가 불편함..", score: 6 },
            { index: 7, answer: "비현실감이나, 내가 나에게서 분리된 느낌", score: 7 },
            { index: 8, answer: "죽을 것 같은 공포.", score: 8 },
            { index: 9, answer: "숨이 가빠짐.", score: 9 },
            { index: 10, answer: "감각이 둔해지거나 따끔거림.", score: 10 },
            { index: 11, answer: "가슴이 아프거나 불편함.", score: 11 },
            { index: 12, answer: "춥거나 화끈거리는 느낌.", score: 12 },
            { index: 13, answer: "경험해 본 적 없다.", score: 13, pass: true }
        ]
    },
    {
        index: 21,
        question: "위 질문에서 대답하신 갑작스러운 공포감이나 두려움(공황 발작)을, 평생 동안 몇 번 경험해 보셨나요?",
        answers: [
            { answer: "경험한 적 없습니다.", score: 1, index: 1 },
            { answer: "한 번 경험한 적 있습니다.", score: 2, index: 2 },
            { answer: "두 번 이상 경험한 적 있습니다.", score: 3, index: 3 },
            { answer: "두 번 이상 경험한 적 있으며, 심지어 자다가도 경험해 봤습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 22,
        question: "공황 발작을 다시 겪을까 봐 걱정되시나요?",
        answers: [
            { answer: "걱정되지 않습니다.", score: 1, index: 1 },
            { answer: "약간 걱정이 됩니다.", score: 2, index: 2 },
            { answer: "매우 걱정이 되지만, 그 걱정으로 인해 집안일 혹은 직장 일을 하는데 지장은 없습니다.", score: 3, index: 3 },
            { answer: "매우 걱정이 되고, 그 걱정으로 인해 집안일 혹은 직장 일을 하는데 뚜렷한 문제가 있습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 23,
        question: "나는 공황 발작이 일어날까 두려워 대중교통 이용, 밀폐된 공간(엘리베이터 등)이나 군중 속에 있기, 열린 공간(광장 등)에 가기, 혼자 외출하기 등을 하는 것이 힘듭니다.",
        answers: [
            { answer: "문제 없습니다.", score: 1, index: 1 },
            { answer: "약간 힘들지만, 생활에 지장을 주지 않습니다.", score: 2, index: 2 },
            { answer: "생활에 상당한 지장을 주지만, 내가 꼭 필요할 때는 극복할 수 있습니다.", score: 3, index: 3 },
            { answer: "생활에 뚜렷한 지장을 주고, 어떤 경우에도 극복하는 것이 불가능합니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 24,
        question: "나는 공용 물건이나 문 손잡이 등을 만지면 병균에 감염될 수 있기 때문에 사용을 꺼립니다.",
        answers: [
            { answer: "그렇지 않습니다.", score: 1, index: 1 },
            { answer: "약간 그렇습니다.", score: 2, index: 2 },
            { answer: "매우 그렇습니다.", score: 3, index: 3 },
            { answer: "거의 항상 그렇습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 25,
        question: "내가 원하지 않는 나쁜 생각이나 충동이 반복적으로 떠올라 괴로웠던 일이 있습니다.",
        answers: [
            { answer: "그렇지 않습니다.", score: 1, index: 1 },
            { answer: "하루 1시간 미만 혹은 8회 이하 떠오릅니다.", score: 2, index: 2 },
            { answer: "하루 1 - 3시간 혹은 9회 이상 떠오릅니다.", score: 3, index: 3 },
            { answer: "하루 3시간 이상 혹은 10회 이상 떠오릅니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 26,
        question: "나는 이미 확인한 것도, 수 차례 반복해서 다시 확인하곤 합니다.",
        answers: [
            { answer: "그렇지 않습니다.", score: 1, index: 1 },
            { answer: "약간 그렇습니다.", score: 2, index: 2 },
            { answer: "매우 그렇지만, 생활에는 지장이 없습니다.", score: 3, index: 3 },
            { answer: "거의 항상 여러 번 확인해서 약속에 늦는 등 생활에 지장이 있습니다.", score: 4, index: 4 }
        ]
    },

    {
        index: 27,
        question: "손 씻기, 정리정돈하기, 청소하기 등을 나만의 방법으로, 남들보다 많이, 반복적으로 합니다.",
        answers: [
            { answer: "그렇지 않습니다.주변 사람들과 같은 것 같습니다.", score: 1, index: 1 },
            { answer: "하루 한 시간 미만 이런 행동을 반복하며, 생활에 영향을 주지는 않습니다.", score: 2, index: 2 },
            { answer: "하루 한 시간 이상 이런 행동을 반복하거나 사회 생활에 영향을 줍니다.", score: 3, index: 3 },
            { answer: "하루 한 시간 이상 이런 행동을 반복하며, 이런 행동을 하지 못한다면 뭔가 나쁜 일이 일어날 것이라는 확신이 있습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 28,
        question: "격한 화를 내거나, 통제 불능의 분노를 느끼기도 합니다.",
        answers: [
            { answer: "그렇지 않습니다.", score: 1, index: 1 },
            { answer: "한 달에 한 번 정도는 그런 경향이 있습니다.", score: 2, index: 2 },
            { answer: "한 달에 수차례는 그런 경향이 있습니다.", score: 3, index: 3 },
            { answer: "한 달에 수차례는 그런 경향이 있으며, 때로는 주변 사람들에게 상처를 주기도 합니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 29,
        question: "기억상실, 의식 상실, 주변 환경이나 자신의 몸이 낯설게 느껴지기도 합니다.",
        answers: [
            { answer: "그렇지 않습니다.", score: 1, index: 1 },
            { answer: "한 달에 한 번 정도는 그런 증상이 있습니다.", score: 2, index: 2 },
            { answer: "한 달에 수차례는 그런 증상이 있습니다.", score: 3, index: 3 },
            { answer: "한 달에 수차례는 그런 증상이 있으며, 때로는 사회 생활에 지장을 줍니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 30,
        question: "위협적인 사건을 겪은 이후에, 안절부절못하며 경계를 풀 수 없습니다.",
        answers: [
            { answer: "그렇지 않습니다.", score: 1, index: 1 },
            { answer: "약간 그렇지만, 생활에 방해가 되지 않습니다.", score: 2, index: 2 },
            { answer: "매우 그렇지만, 대개의 경우에는 극복할 수 있습니다.", score: 3, index: 3 },
            { answer: "거의 항상 그렇습니다. 주변 환경이나 사람들에게 경계를 느끼며, 편안한 상태를 유지하기 어렵습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 31,
        question: "위협적인 사건을 다시 떠오르게 하는 물건이나 사람, 상황을 피하려고 합니다.",
        answers: [
            { answer: "그렇지 않습니다.", score: 1, index: 1 },
            { answer: "가볍게 피하려고 합니다.", score: 2, index: 2 },
            { answer: "확실히 그 상황을 피하려고 하지만, 생활에 큰 영향을 주지는 않습니다.", score: 3, index: 3 },
            { answer: "그 상황을 늘 피하려고 하며, 일상 생활에 확실한 영향을 줍니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 32,
        question: "나는 설명할 수 없는 허리나 등의 아픔을 느낍니다.",
        answers: [
            { answer: "거의 느낀 적 없습니다.", score: 1, index: 1 },
            { answer: "일 년에 한 번 정도 느낍니다.", score: 2, index: 2 },
            { answer: "한 달에 한 번 정도 느낍니다.", score: 3, index: 3 },
            { answer: "일주일에 한 번 이상 느낍니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 33,
        question: "나는 속이 안 좋음, 몸의 통증 등 신체 증상에 대해 자주 걱정합니다.",
        answers: [
            { answer: "전혀 그렇지 않습니다.", score: 1, index: 1 },
            { answer: "가끔 그렇습니다.", score: 2, index: 2 },
            { answer: "매우 그렇습니다.", score: 3, index: 3 },
            { answer: "늘 그렇습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 34,
        question: "다른 사람들이 평소 같지 않다고 할 정도로, 4일 이상 연속으로, 기분이 너무 좋고 들떴던 적이 있습니다.",
        answers: [
            { answer: "전혀 없습니다.혹은 기분이 들떴던 기간이 4일 미만입니다.", score: 1, index: 1 },
            { answer: "4일 이상, 평소의 모습과 약간 달랐으며, 대인 관계나 생활에 경미한 문제만 있었습니다.", score: 2, index: 2 },
            { answer: "4일 이상, 평소의 모습과 달랐으나, 대인 관계나 생활에 중등도의 문제가 있었습니다.", score: 3, index: 3 },
            { answer: "4일 이상, 확실히 평소의 모습과 달랐으며, 대인 관계나 생활에 심각한 문제가 생겼었습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 35,
        question: "나는 기운이 넘쳐서 자는 시간이 줄거나, 심지어 잠을 잘 필요가 없다고 느꼈던 기간이 있었습니다.",
        answers: [
            { answer: "전혀 없습니다.", score: 1, index: 1 },
            { answer: "약간 자는 시간이 줄었던 적이 있습니다.", score: 2, index: 2 },
            { answer: "자는 시간이 줄었으며, 자는 시간이 줄어도 피곤하지 않았던 기간이 있습니다.", score: 3, index: 3 },
            { answer: "거의 잠을 자지 않아도 전혀 피곤하지 않았던 기간이 있습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 36,
        question: "내 머리 속에만 있는 생각을 다른 사람이 알 수 있는 것 같습니다.",
        answers: [
            { answer: "전혀 그렇지 않습니다.", score: 1, index: 1 },
            { answer: "다른 사람이 내 생각을 조금 아는 것 같습니다.", score: 2, index: 2 },
            { answer: "다른 사람이 내 생각을 알고 있으나, 이것이 나에게 해가 되는지는 잘 모르겠습니다.", score: 3, index: 3 },
            { answer: "확실히 내 생각을 다른 사람이 알 수 있으며, 이것이 나에게 해가 되는 것이 확실합니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 37,
        question: "다른 사람이 들을 수 없는 소리를 나는 들을 수 있습니다.",
        answers: [
            { answer: "그런 적 없습니다.혹은 잠들기 전이나 또는 잠에서 깬 직후에 들은 적이 있습니다.", score: 1, index: 1 },
            { answer: "졸리지 않은 상태에서, 다른 사람이 들을 수 없는 소리를 들은 적이 있는 것 같습니다.", score: 2, index: 2 },
            { answer: "졸리지 않은 상태에서, 다른 사람이 들을 수 없는 소리를 확실히 들은 적이 있지만, 어떤 소리인지는 잘 모르겠습니다.", score: 3, index: 3 },
            { answer: "졸리지 않은 상태에서, 다른 사람이 들을 수 없는 소리를 들었고, 어떤 소리인지 정확히 알고 있습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 38,
        question: "누군가가 내 생각을 조종하는 것 같습니다.",
        answers: [
            { answer: "전혀 그렇지 않습니다.", score: 1, index: 1 },
            { answer: "가끔 그렇습니다.", score: 2, index: 2 },
            { answer: "매우 그렇습니다.", score: 3, index: 3 },
            { answer: "늘 그렇습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 39,
        question: "누군가가 나를 해치려고 하는 것 같습니다.",
        answers: [
            { answer: "전혀 그렇지 않습니다.", score: 1, index: 1 },
            { answer: "가끔 그렇습니다.", score: 2, index: 2 },
            { answer: "매우 그렇습니다.", score: 3, index: 3 },
            { answer: "늘 그렇습니다.", score: 4, index: 4 }
        ]
    },
    {
        index: 40,
        question: "자신의 자살에 대해 생각해 본 적이 있나요?",
        answers: [
            { answer: "생각해 본 적이 없습니다.", score: 1, index: 1 },
            { answer: "자살할 생각을 가끔은 하지만, 실제로 하지는 않을 것입니다.", score: 2, index: 2 },
            { answer: "자살하고 싶은 생각이 자주 들며, 계획도 있으나 실행하고 싶지는 않습니다.", score: 3, index: 3 },
            { answer: "구체적인 자살 계획을 세운적이 있으며, 기회가 되면 실행하려 합니다.", score: 4, index: 4 }
        ]
    }
];








