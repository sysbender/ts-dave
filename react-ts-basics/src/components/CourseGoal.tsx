// ReactNode is a type from types/React package
import { PropsWithChildren, type ReactNode, FC } from "react";

type CourseGoalPropsWithChildren = PropsWithChildren<{ title: string }>;

// custom type, type alias or (interface in a lib)
type CourseGoalProps = {
  title: string;
  //   description: string;
  children: ReactNode;
};

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
        <button>Delete</button>
      </div>
    </article>
  );
}

export function CourseGoalWithChildren({
  title,
  children,
}: CourseGoalPropsWithChildren) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
        <button>Delete</button>
      </div>
    </article>
  );
}

export const CourseGoalFC: FC<CourseGoalPropsWithChildren> = ({
  title,
  children,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
        <button>Delete</button>
      </div>
    </article>
  );
};
