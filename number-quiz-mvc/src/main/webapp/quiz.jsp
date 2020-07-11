<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head><title>NumberQuiz</title></head>
<body>
<form method='post'><h3>Have fun with NumberQuiz!</h3>
    <p>Your current score is:  ${ quiz.numCorrect }</br>
    <p>Guess the next number in the sequence!</p>
    <p>${ quiz.questions[quiz.currentQuestionIndex].question }</p>
    <p>Your answer:<input type='text' name='txtAnswer' value=''/></p>
    <c:if test="${error && (answer != null)}">
        <p style='color:red'>Your last answer was not correct! Please try again</p>
    </c:if>
    <p><input type='submit' name='btnNext' value='Next'/><input type='submit' name='btnStart' value='Restart!'/></p>
</form>
</body>
</html>