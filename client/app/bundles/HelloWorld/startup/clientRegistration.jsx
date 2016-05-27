import ReactOnRails from 'react-on-rails';
import HelloWorldApp from './HelloWorldAppClient';
import HelloRubyApp from './HelloRubyAppClient';
import TodoApp from './TodoAppClient';

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ HelloWorldApp, HelloRubyApp, TodoApp });
