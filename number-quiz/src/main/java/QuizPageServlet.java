import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/quiz-page")
public class QuizPageServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();
        Quiz quiz = (Quiz) session.getAttribute("quiz");

        PrintWriter out = response.getWriter();
        String answer = quiz.getQuestions().get(quiz.getCurrentQuestionIndex()).getAnswer();
        genQuizPage(quiz, out, quiz.getCurrentQuestion(), false, answer);
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        String answer = request.getParameter("txtAnswer");

        HttpSession session = request.getSession();
        Quiz quiz = (Quiz) session.getAttribute("quiz");
        genQuizPage(quiz, out, quiz.getCurrentQuestion(), (Boolean) request.getAttribute("error"), answer);
    }

    private void genQuizPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {

        out.print("<html>");
        out.print("<head>");
        out.print("	<title>NumberQuiz</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("	<form method='post'>");
        out.print("		<h3>Have fun with NumberQuiz!</h3>");
        out.print("<p>Your current score is: ");
        out.print(sessQuiz.getNumCorrect() + "</br>");
        out.print("<p>Guess the next number in the sequence!</p>");
        out.print("<p>" + currQuest + "</p>");

        out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

        /* if incorrect, then print out error message */
        if (error && (answer != null)) {  //REFACTOR?-- assumes answer null only when first open page
            out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
        }
        out.print("<p><input type='submit' name='btnNext' value='Next' /><input type='submit' name='btnStart' value='Restart!' /></p> ");

        out.print("</form>");
        out.print("</body></html>");
    }

}