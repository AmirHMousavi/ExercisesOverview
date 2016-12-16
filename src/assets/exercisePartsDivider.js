
export function divideExercisePartFrom(currentExercise){
    let json = {
      question: currentExercise.question,
      sentence: currentExercise.sentence,
      exerciseType: 'PART_OF_SPEECH',
      rightAnswersNumber: 0,
      wrongAnswersNumber: 0,
    };
    return json;
}

export function divideSolutionPartFrom(currentExercise){
    let json = {
      category: {
        value: currentExercise.solutionGroups[0].category.value,
        color: currentExercise.solutionGroups[0].category.color,
      },
      groupParts: [{
        selectedWordIndex: currentExercise.solutionGroups[0].groupParts[0].selectedWordsIndex
      }],
    };
    return json;
}