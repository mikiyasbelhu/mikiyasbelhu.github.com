import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/")
public class QuizServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        Quiz quiz = new Quiz();
        HttpSession session = request.getSession();
        session.setAttribute("quiz", quiz);
        RequestDispatcher rDispatcher = request.getRequestDispatcher("/quiz-page");
        rDispatcher.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        String start = request.getParameter("btnStart");
        if (start != null) {
            response.sendRedirect(String.valueOf(request.getRequestURL()));
        } else {
            String answer = request.getParameter("txtAnswer");

            HttpSession session = request.getSession();
            Quiz quiz = (Quiz) session.getAttribute("quiz");

            boolean error = true;
            if ((answer != null) && quiz.isCorrect(answer)) {
                error = false;
                quiz.scoreAnswer();
            }

            /* see if have finished questions */
            if (quiz.getNumCorrect() == quiz.getNumQuestions()) {
                quiz = new Quiz();
                session.setAttribute("quiz", quiz);
                RequestDispatcher rDispatcher = request.getRequestDispatcher("/quiz-page-over");
                rDispatcher.forward(request, response);
            } else {
                request.setAttribute("error", error);
                RequestDispatcher rDispatcher = request.getRequestDispatcher("/quiz-page");
                rDispatcher.forward(request, response);
            }
        }
    }

}