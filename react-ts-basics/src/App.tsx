import CourseGoal, {
  CourseGoalWithChildren,
  CourseGoalFC,
} from "./components/CourseGoal";

import goalsImg from "./assets/goals.jpg";

import AppHeader from "./components/AppHeader";

export default function App() {
  return (
    <main>
      <AppHeader image={{ src: goalsImg, alt: "test" }}>
        <h1>List of Course Goals </h1>
      </AppHeader>
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
