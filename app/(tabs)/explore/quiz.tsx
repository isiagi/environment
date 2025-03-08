import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import {
  Button,
  Progress,
  ScrollView,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
import {
  conservationQuestions,
  pollutionQuestions,
  renewableEnergyQuestions,
  waterConservationQuestions,
  recyclingQuestions,
} from "@/utils/quiz";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const { type } = useLocalSearchParams();

  let quizQuestions;
  switch (type) {
    case 'conservation':
      quizQuestions = conservationQuestions;
      break;
    case 'pollution':
      quizQuestions = pollutionQuestions;
      break;
    case 'renewable':
      quizQuestions = renewableEnergyQuestions;
      break;
    case 'water':
      quizQuestions = waterConservationQuestions;
      break;
    case 'recycling':
      quizQuestions = recyclingQuestions;
      break;
    default:
      quizQuestions = conservationQuestions;
  }

  const [answers, setAnswers] = useState<string[]>(
    new Array(quizQuestions.length).fill("")
  );

  const router = useRouter();

  const handleAnswer = (selectedAnswer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    // Recalculate score
    const newScore = newAnswers.reduce((acc, answer, index) => {
      return answer === quizQuestions[index].correctAnswer
        ? acc + quizQuestions[index].points
        : acc;
    }, 0);
    setScore(newScore);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswers(new Array(quizQuestions.length).fill(""));
  };

  const progress = Math.round((currentQuestion / quizQuestions.length) * 100);

  if (showResult) {
    return (
      <View
        flex={1}
        backgroundColor="white"
        paddingTop={50}
       
        paddingHorizontal={20}
      >
        <ScrollView>
          <YStack space={20}>
            <Text fontSize={24} textAlign="center" color={"$green9"}>
              Quiz Complete! 🎉
            </Text>
            <Text fontSize={20} textAlign="center" color={"$black10"}>
              You scored {score} out of {quizQuestions.length}!
            </Text>

            <Text
              fontSize={18}
              color={"$gray9"}
              fontWeight="bold"
              marginTop={20}
            >
              Summary:
            </Text>

            {quizQuestions.map((question, index) => (
              <View
                key={index}
                backgroundColor="$gray2"
                padding={15}
                borderRadius={10}
              >
                <Text fontSize={16} marginBottom={10} color={"$black10"}>
                  Question {index + 1}: {question.question}
                </Text>
                <Text
                  color={
                    answers[index] === question.correctAnswer
                      ? "$green9"
                      : "$red9"
                  }
                >
                  Your answer: {answers[index] || "Not answered"}
                </Text>
                <Text color="$green9">
                  Correct answer: {question.correctAnswer}
                </Text>
              </View>
            ))}

            <Button
              onPress={restartQuiz}
              backgroundColor="$green9"
              color={"white"}
              marginTop={20}
              marginBottom={30}
            >
              Try Again
            </Button>
          </YStack>
        </ScrollView>
      </View>
    );
  }

  return (
    <View flex={1} backgroundColor="white" paddingTop={30}>
      <ScrollView>
        <View padding={15}>
          <View onPress={() => router.back()} alignItems="flex-end">
            <Text
              color={"$red9"}
              fontWeight={"600"}
              fontSize={20}
              padding={5}
              paddingBottom={15}
            >
              X
            </Text>
          </View>
          <Progress value={progress} backgroundColor="$green5">
            <Progress.Indicator animation="bouncy" backgroundColor="$green9" />
          </Progress>

          <Text fontSize={24} marginVertical={20} color={"$black9"}>
            Question {currentQuestion + 1} of {quizQuestions.length}
          </Text>

          <Text fontSize={20} marginBottom={20} color={"$black10"}>
            {quizQuestions[currentQuestion].question}
          </Text>

          <YStack space={10} marginVertical={20}>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onPress={() => handleAnswer(option)}
                backgroundColor={
                  answers[currentQuestion] === option ? "$green9" : "$yellow8"
                }
                color="white"
                size="$5"
              >
                {option}
              </Button>
            ))}
          </YStack>

          <XStack space={10} marginTop={20} justifyContent="space-between">
            <Button
              onPress={goToPreviousQuestion}
              disabled={currentQuestion === 0}
              backgroundColor="$gray9"
              width={150}
              color={"white"}
            >
              Previous
            </Button>
            <Button
              onPress={goToNextQuestion}
              backgroundColor="$green9"
              width={150}
              color={"white"}
            >
              {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
            </Button>
          </XStack>
        </View>
      </ScrollView>
    </View>
  );
};

export default Quiz;
