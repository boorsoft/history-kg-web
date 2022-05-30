import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import LoadingSpinner from "../../components/LoadingSpinner";
import { fetchQuizzes } from "../../store/app/actionCreators";
import { AppDispatch, RootState } from "../../store/store";
import { Quiz } from "../../types/store/AppState";
import { Container } from "../Home/Home";
import QuizCard from "./components/QuizCard";

const QuizMenu: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { quizzes, quizzes: { isLoading } } = useSelector((state: RootState) => state.app)

    const getQuizzes = bindActionCreators(fetchQuizzes, dispatch);

    useEffect(() => {
        getQuizzes();
    }, [])

    return (<Container>
        {isLoading && <LoadingSpinner />}
        {!isLoading && quizzes.data.map((quiz: Quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
        ))}
    </Container>)
}

export default QuizMenu;