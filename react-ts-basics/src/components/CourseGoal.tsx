export default function CourseGoal({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p> {description}</p>
        <button>Delete</button>
      </div>
    </article>
  );
}
