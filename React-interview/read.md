# React Interview Preparation Guide with Examples

## 1. Limitations of React in Large-Scale Applications
**Explanation:** React is a library, not a full-fledged framework. You need to integrate other libraries for routing, state management, etc., which may complicate large-scale app development.

**Example:** Managing global state across hundreds of components might require Redux or Context API, which adds complexity.

---

## 2. Virtual DOM and Its Benefits
**Explanation:** React creates a virtual copy of the DOM to minimize direct manipulation. Updates are batched and only minimal changes are applied to the real DOM.

**Example:**
```js
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Increment</button>
```
Only the updated part (button text) is re-rendered.

---

## 3. React Hooks vs Redux for State Management
**Explanation:** Hooks like `useContext` and `useReducer` can replace Redux for small to medium applications, but Redux is better for large, complex apps.

**Example:**
```js
const MyContext = React.createContext();
<MyContext.Provider value={{ count, setCount }}>
```

---

## 4. State Management Best Practices
- Keep state minimal and scoped
- Use Context for app-wide state
- Split state logically

---

## 5. Optimizing Large Component Trees
- Use React.memo
- Code-splitting
- Lazy loading components

**Example:**
```js
const MemoizedComponent = React.memo(() => <Child />);
```

---

## 6. React Strict Mode
**Explanation:** It helps identify unsafe lifecycles, legacy APIs, and unexpected side effects.

```js
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

## 7. Preventing Re-renders
**Tips:**
- Use `React.memo`, `useCallback`, and `useMemo`
- Avoid anonymous functions in JSX

---

## 8. Functional vs Class Components
- Functional: Hooks, simpler syntax
- Class: Lifecycle methods, more verbose

```js
function Counter() {
  const [count, setCount] = useState(0);
}
```

---

## 9. React Fiber
**Explanation:** Fiber is React's reconciliation algorithm enabling async rendering.

---

## 10. Handling Side Effects
Use `useEffect` for data fetching, timers, subscriptions, etc.

```js
useEffect(() => {
  fetchData();
}, []);
```

---

## 11. useMemo vs useCallback
```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => { doSomething(a); }, [a]);
```

---

## 12. Dynamic Form Handling
```js
const [form, setForm] = useState({ name: '', email: '' });
<input name="name" onChange={handleChange} />
```

---

## 13. Lazy Loading
```js
const LazyComponent = React.lazy(() => import('./MyComponent'));
```

---

## 14. Error Boundaries
```js
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) { /* handle */ }
}
```

---

## 15. SSR Benefits
- Better SEO
- Faster load times

---

## 16. Styling Approaches
- CSS Modules
- Styled Components
- Inline Styles

```js
const style = { color: 'red' };
<p style={style}>Hello</p>
```

---

## 17. Passing Data Without Redux
Use a shared parent component to pass props.

---

## 18. useEffect for Fetching
```js
useEffect(() => {
  fetch('api/data').then(res => res.json()).then(setData);
}, []);
```

---

## 19. Async with async/await
```js
const fetchData = async () => {
  const res = await fetch('/api');
  const data = await res.json();
  setData(data);
};
```

---

## 20. Window Resize Re-render
```js
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

---

## 21. Context API
```js
const ThemeContext = React.createContext('light');
<ThemeContext.Provider value="dark">...</ThemeContext.Provider>
```

---

## 22. React Router & Dynamic Routing
```js
<Route path="/user/:id" component={UserProfile} />
```

---

## 23. Controlled vs Uncontrolled Components
```js
// Controlled
<input value={value} onChange={e => setValue(e.target.value)} />

// Uncontrolled
<input ref={inputRef} />
```

---

## 24. Optimizing Lists/Grids
- Virtualization (react-window, react-virtualized)
- Pagination

---

## 25. Shallow vs Deep Comparison
- Shallow: compares refs
- Deep: compares nested values

---

## 26. Async State Updates
```js
setState(prev => prev + 1);
```

---

## 27. Custom Hooks
```js
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  return { count, increment: () => setCount(c => c + 1) };
}
```

---

