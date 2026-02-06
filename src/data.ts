type ExampleContent = {
  title: string;
  description: string;
  code: string;
};

type ExamplesType = {
  [key: string]: ExampleContent;
};

export const EXAMPLES: ExamplesType = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a reusable piece of UI.",
    code: `function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript.",
    code: `<div>
  <h1>Hello, World!</h1>
  <p>This is JSX</p>
</div>`,
  },
  props: {
    title: "Props",
    description:
      "Props allow you to pass data from parent to child components. They are read-only and help make components reusable.",
    code: `function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
}`,
  },
  state: {
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render.",
    code: `function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
  },
};
