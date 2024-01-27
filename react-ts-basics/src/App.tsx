import CourseGoal, {
  CourseGoalWithChildren,
  CourseGoalFC,
} from "./components/CourseGoal";

import goalsImg from "./assets/goals.jpg";

import AppHeader from "./components/AppHeader";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    const id = Math.floor(Math.random() * 1000);
    const newGoal: CourseGoal = {
      title: "new Title" + id,
      description: "new Description " + id,
      id: id,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  return (
    <main>
      <AppHeader image={{ src: goalsImg, alt: "test" }}>
        <h1>List of Course Goals </h1>
      </AppHeader>

      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul>
      <CourseGoal title="learn react + ts">
        <p>Learn it from the ground up</p>
      </CourseGoal>
      <hr />
      <CourseGoalWithChildren title="The second Goal">
        <p> what is the second Goal</p>
      </CourseGoalWithChildren>
      <hr />
      <CourseGoalFC title="The third Goal">
        <p>what is the 3rd Goal?</p>
      </CourseGoalFC>
    </main>
  );
}
