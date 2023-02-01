import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Profile } from 'components/Profile/Profile';
import './index.css';
import { Form } from 'components/Forms/Forms';
import { Stats } from 'components/stats/stats';
import { Friends } from 'components/Friends/Friends';
import { Trans } from 'components/Trans/Trans';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Friends />
    <Form />
    <Stats />
    <Trans />
  </React.StrictMode>
);
