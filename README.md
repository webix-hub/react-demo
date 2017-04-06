Webix-React demo
================

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

How to start
------------

Run `npm install` and `npm start` after that. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### Production build

Run `npm run build`

Builds the app for production to the `build` folder. Your app is ready to be deployed!


Integration with Webix
----------------------

You can use Webix inside of React App, to add some rich widgets to the existing functionality.

If you are plan to use Webix for most UI in the app, please check <a href='https://webix.gitbooks.io/webix-jet/content/chapter1.html'>Webix Jet</a> first,
it is a micro-framework for building Webix based apps.

There are 3 main techniques

### Webix component

```jsx
	const ui = {
		view:"slider"
	};
	const value = 123;

	<Webix ui={ui} data={value} />
```

### Custom components

```jsx
class FilmsView extends Component {
  render() {
    return (
      <div ref="root" style={{height:"100%"}}></div>
    );
  }

  componentDidMount(){
    this.ui = window.webix.ui({
      view:"slider"
      container:ReactDOM.findDOMNode(this.refs.root)
    });
  }

  componentWillUnmount(){
    this.ui.destructor();
    this.ui = null;
  }

  shouldComponentUpdate(){
    return false;
  }
}
```


### Using with Redux

You can use Webix component with Redux without any customizations.   
For custom components, be sure that custom component returns true from shouldComponentUpdate and provides componentWillUpdate handler, to mutate state of Webix component

```js
  componentWillUpdate(props){
    if (props.data)
      this.setWebixData(props.data);
    if (props.select)
      this.select(props.select);
  },
  shouldComponentUpdate(){
    return true;
  }
```



License
--------

MIT