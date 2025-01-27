import { useState } from "react";
import { Button, Progress, ScrollView, Text, View, XStack, YStack } from "tamagui";

const quizQuestions = [
  {
    question: "What can we do to save water?",
    options: [
      "Leave the tap running while brushing teeth",
      "Take long showers",
      "Turn off the tap while brushing teeth",
      "Use water without thinking"
    ],
    correctAnswer: "Turn off the tap while brushing teeth"
  },
  {
    question: "Which of these helps protect our environment?",
    options: [
      "Throwing trash on the ground",
      "Recycling paper and plastic",
      "Leaving lights on when leaving a room",
      "Using lots of plastic bags"
    ],
    correctAnswer: "Recycling paper and plastic"
  },
  {
    question: "What is renewable energy?",
    options: [
      "Energy from coal",
      "Energy from oil",
      "Energy from the sun and wind",
      "Energy from gas"
    ],
    correctAnswer: "Energy from the sun and wind"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    
    // Use the callback form of setState to ensure accurate updates
    setCurrentQuestion((prevQuestion) => {
      const nextQuestion = prevQuestion + 1;
      if (nextQuestion >= quizQuestions.length) {
        setShowResult(true);
        return prevQuestion; // Keep the current question if we're showing results
      }
      return nextQuestion;
    });
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  if (showResult) {
    return (
      <View flex={1} backgroundColor="white" padding={20} justifyContent="center">
        <YStack space={20} alignItems="center">
          <Text fontSize={24} textAlign="center">
            Quiz Complete! 🎉
          </Text>
          <Text fontSize={20} textAlign="center">
            You scored {score} out of {quizQuestions.length}!
          </Text>
          <Button onPress={restartQuiz} backgroundColor="$green9">
            Try Again
          </Button>
        </YStack>
      </View>
    );
  }

  console.log(typeof progress);
  

  return (
    <View flex={1} backgroundColor="white">
      <ScrollView>
        <View padding={20}>
          <Progress value={progress.toFixed(1)} backgroundColor="$green5">
            <Progress.Indicator animation="bouncy" backgroundColor="$green9" />
          </Progress>
          
          <Text fontSize={24} marginVertical={20}>
            Question {currentQuestion + 1} of {quizQuestions.length}
          </Text>
          
          <Text fontSize={20} marginBottom={20}>
            {quizQuestions[currentQuestion].question}
          </Text>

          <YStack space={10}>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onPress={() => handleAnswer(option)}
                backgroundColor="$green9"
                color="white"
                size="$5"
              >
                {option}
              </Button>
            ))}
          </YStack>
        </View>
      </ScrollView>
    </View>
  );
};

export default Quiz;
