Webix-React demo
================

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can use Webix inside of React App, to add some rich widgets to the existing functionality.

If you plan to use Webix for most UI in the app, please check [Webix Jet](https://webix.gitbooks.io/webix-jet/content/chapter1.html) first. It is a micro-framework for building Webix-based apps.

How to Start
----------------

[Grab the demo from Github](https://github.com/webix-hub/react-demo) if you haven't done this yet.
Thus you will get an example of integration usage.

Run `npm install` and `npm start` after that. Open `http://localhost:3000` to view the demo in the browser.

The page will be reloading while you are editing form fields.

**Production build**

To build the production version, run `npm run build`.

It will build the application for production to the *build* folder. After that your app is ready to be deployed.


Using Webix Widget in React App
-------------------------------

You can create a React component with a Webix widget inside like this:

~~~js
const ui = {
	view:"slider"
};
const value = 123;

const SliderView = () => (
  <Webix ui={ui} data={value} />
)
~~~

The logic is the following:

- use the tag  < Webix > to define a Webix widget
- specify the necessary view in the *ui* object and define its config

Creating Custom Webix-React Component
--------------------------------

Instead of using a prebuilt Webix component, there is a possibility to make a custom one.
For example, the code for a custom Slider component can look as follows:

~~~js
class SliderView extends Component {
  constructor(props) {
    super(props);
    this.uiContainer = React.createRef();
  }

  render() {
    return (
      <div ref={this.uiContainer}></div>
    );
  }

  componentDidMount(){
    webix.ready(() => {
      this.ui = webix.ui({
        view:"slider",
        container:this.uiContainer.current,
      });
    })
  }

  componentWillUnmount(){
    this.ui.destructor();
    this.ui = null;
  }

  shouldComponentUpdate(){
    return false;
  }
}
~~~

In the above code we have created the SliderView component that contains a Webix slider inside.

The list of the defined methods is:

- the **componentDidMount()** method creates a new component
- the **componentWillUnmount()** method will destruct the component when it won't be needed anymore
- the **shouldComponentUpdate()** method is responsible for the component's updates. In this example, updates for the component are disabled

Using Webix Widget with Redux
-------------------------------

You can use a Webix widget with Redux without any extra customization required.

For custom components make sure that such a component returns *true* from **shouldComponentUpdate()** and provides
the **componentDidUpdate** handler to mutate the state of the Webix widget.

~~~js
componentDidUpdate(){
    if (this.props.data)
      this.setWebixData(this.props.data);
    if (this.props.select)
      this.select(this.props.select);
},
shouldComponentUpdate(){
	return true;
}
~~~
License
--------

MIT
