# Documenting Your Component

The next steps are a guide to create a documentation of a component in Tostaditas.

1 - Add the markdown file in the next folder: `packages/css-doc-page/src/assets/markdown/componentname/default.md`.

2 - Create a folder in `packages/css-doc-page/src/views/componentNameDocs`.

3 - Create a file with the name `ComponentNameDocs.jsx` in the new folder with the next strcuture:

```javascript
// ComponentNameDocs.jsx
import React , { useState } from 'react';
// import docs

import Markdown from '../../components/markdown';
import Hero from '../../components/hero';
import styles from './ComponentNameDocs.module.scss';

const Sources = {
};

const ComponentNameDocs = () => {
    return (
      <div className={styles.ComponentNameDocs}>
        <Hero
          title="ComponentName"
          text=""
          image={""}
        />
        <main className={styles.Main}>
          <Markdown src={""} />
        </main>
      </div>
    );
}

export default ComponentNameDocs;
```

4 - Add the new component in the index files:


- `packages/css-doc-page/src/views/index.js`
- `packages/css-doc-page/src/views/componentNameDocs/index.js`

5 - Add the path of the new component in `packages/css-doc-page/src/containers/sidebar/Sidebar.jsx`


```javascript
 childrenList={[
  { label: 'Overview', url: '/ComponentOverview' },
  { label: 'Buttons', url: '/Buttons' },
  { label: 'Checkbox', url: '/Checkbox' },
  { label: 'Text Field', url: '' },
  { label: 'Toggle', url: '' },
  { label: 'NewComponent', url: 'NewComponent' }
]}
```

6 - Add the path of the new component in `packages/css-doc-page/src/App.jsx`.


```javascript
import ComponentNameDocs from './views/componentNameDocs';
...
 {
    path: '/ComponentName',
    component: ComponentName
  },

```

Check the next [PR#58](https://github.com/bod-endava/e-toast-ds/pull/58/files) as reference
