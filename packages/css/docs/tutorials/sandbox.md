# Visualize Your Component Quickly

It is mandatory have the component's styles in the `packages/css` project to reflect the changes in the sandbox

1 - Add the component with your styles created (selectors) in the `packages/sandbox/src/App.js` file:

```js
const YourComponent = ({ content }) => {
  return <div className="eds-yourcomponent">
    {content}
  </div>
}
```

2 - Consume you component in `packages/sandbox/src/App.js` file in the `render()` methdod of the `App.jss`, as show below:

```js
 <section>
    <h1>YourComponent</h1>
    <YoutComponent content="Aa"/>
 </section>
```

Check the last two files changes in [PR#53](https://github.com/bod-endava/e-toast-ds/pull/53) as reference