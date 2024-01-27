import CourseGoal, {
  CourseGoalWithChildren,
  CourseGoalFC,
} from "./components/CourseGoal";
export default function App() {
  return (
    <main>
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
