import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import reactLogo from 'src/assets/react.svg';
import Header from 'src/components/Header';
import 'src/App.css';
function App() {
    const [count, setCount] = useState(0);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(Header, {}), _jsx("a", { href: "https://vitejs.dev", target: "_blank" }), _jsx("a", { href: "https://react.dev", target: "_blank", children: _jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })] }), _jsx("h1", { children: "Vite + React" }), _jsxs("div", { className: "card", children: [_jsxs("button", { onClick: () => setCount((count) => count + 1), children: ["count is ", count] }), _jsxs("p", { children: ["Edit ", _jsx("code", { children: "src/App.tsx" }), " and save to test HMR"] })] }), _jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })] }));
}
export default App;
