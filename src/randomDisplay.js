import React from 'react';

const displayArray = [
    {
        id: 1,
        word: 'Read a book, exercise your mind'
    },
    {
        id: 2,
        word: 'We love that'
    },
    {
        id: 3,
        word: "Let's face it, getting a handy note is hack, that's why we wrote one"
    },
    {
        id: 4,
        word: "developer by profession, writing by passion"
    },
    {
        id: 5,
        word: "Islamic student in the morning, developer in the evening, writer in the night"
    },
    {
        id: 6,
        word: "Fail BIG, Yeah. Think Outside the Browser"
    },
    {
        id: 7,
        word: "Discipline and Consistency"
    },
    {
        id: 8,
        word: "Don't confuse movement with progress"
    },
    {
        id: 9,
        word: "Remember, dreams without goals are just dreams"
    },
    {
        id: 10,
        word: "Power and Trust"
    },
    {
        id: 11,
        word: "IF You See A Developer, My Brother, Please, Run for Your Life"
    }
]

const RandomDisplayIndex = Math.floor(Math.random() * displayArray.length)


const RandomDisplay = () => {
    const item = displayArray.map(item => (item.word));
    return (
        <div>
            {
                item[RandomDisplayIndex]
            }
        </div>
    );
}
 
export default RandomDisplay;