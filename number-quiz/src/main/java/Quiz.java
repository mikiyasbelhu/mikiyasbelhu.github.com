import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Quiz {

    private static List<Question> questions = new ArrayList<>(
            Arrays.asList(
                    new Question("[3, 1, 4, 1, 5, ? ]", "9"),
                    new Question("[1, 1, 2, 3, 5, ? ]", "8"),
                    new Question("[1, 4, 9, 16, 25, ? ]", "36"),
                    new Question("[2, 3, 5, 7, 11, ? ]", "13"),
                    new Question("[1, 2, 4, 8, 16, ? ]", "32")
            )
    );

    private int currentIndex = 0;
    private int correctAnswers = 0;

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        Quiz.questions = questions;
    }

    public Boolean isCorrect(String answer) {
        return Quiz.questions.get(currentIndex).getAnswer().equals(answer);
    }

    public int getNumQuestions() {
        return Quiz.questions.size();
    }

    public int getNumCorrect() {
        return correctAnswers;
    }

    public void scoreAnswer() {
        currentIndex++;
        correctAnswers++;
    }

    public String getCurrentQuestion() {
        return Quiz.questions.get(currentIndex).getQuestion();
    }

    public int getCurrentQuestionIndex() {
        return currentIndex;
    }
}