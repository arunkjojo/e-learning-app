import React, { Component } from 'react';
import { Divider } from 'antd';

class ClassLifeCycle extends Component {
    // The constructor gets called with the component props. You must call super and pass in the props. You can then initialize your state, setting the default values. You can even base the state on the props. "Most Common Use Case For Constructor: Setting up state, creating refs and method binding".
    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            hasError:false,
            errorMessage:null
        }
    }

    // When mounting, getDerivedStateFromProps is the last method called before rendering. You can use it to set state according to the initial props. "Most Common Use Case For getDerivedStateFromProps (during mount): Returning a state object based on the initial props."
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps", props, state)
        return {
            points: 200 // update state with this
        }
        // or 
        //  return null  // to make no updates
    }

    // Called immediately before mounting occurs, and before Component#render. Avoid introducing any side-effects or subscriptions in this method. Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.@deprecated — 16.3, use componentDidMount or the constructor instead; will stop working in React 17.
    componentWillMount() {
        console.log("componentWillMount")
    }

    // After we’ve rendered our component for the first time, this method is called. If you need to load data, here’s where you do it. Don’t try to load data in the constructor or render or anything crazy. / You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update. / "Most Common Use Case for componentDidMount: Starting AJAX calls to load in data for your component."
    componentDidMount() {
        console.log("componentDidMount")
    }

    // Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes. Calling Component#setState generally does not trigger this method. Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked. @deprecated — 16.3, use static getDerivedStateFromProps instead; will stop working in React 17.
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps ", nextProps)
    }

    // If you need to update your state based on a prop changing, you can do it here by returning a new state object. "Most Common Use Case: Updating state based on props, when the props themselves aren’t enough."
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps ", props, state)
    }

    // We have new props. Typical React dogma says that when a component receives new props, or new state, it should update. a shouldComponentUpdate method, called with nextProps as the first argument, and nextState is the second. shouldComponentUpdate should always return a boolean — an answer to the question, “should I re-render?” Yes, little component, you should. The default is that it always returns true. "Most Common Use Case: Controlling exactly when your component will re-render."
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate ", nextProps, nextState)
    }

    // Note it’s called between render and the updated component actually being propagated to the DOM. It exists as a last-chance-look at your component with its previous props and state. You should either return null or a value from getSnapshotBeforeUpdate. "Most Common Use Case: Taking a look at some attribute of the current DOM, and passing that value on to componentDidUpdate."
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate ", prevProps, prevState)
    }

    // Called immediately before rendering when new props or state is received. Not called for the initial render. Note: You cannot call Component#setState here. Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked. @deprecated — 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17.
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate ", nextProps, nextState)
    }

    // Now, our changes have been committed to the DOM. In componentDidUpdate, we have access to three things: the previous props, the previous state, and whatever value we returned from getSnapshotBeforeUpdate. "Most Common Use Case for componentDidUpdate: Reacting (hah!) to committed changes to the DOM."
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate ", prevProps, prevState)
    }

    // Here you can cancel any outgoing network requests, or remove all event listeners associated with the component. Basically, clean up anything to do that solely involves the component in question — when it’s gone, it should be completely gone. "Most Common Use Case for componentWillUnmount: Cleaning up any leftover debris from your component."
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    // Something broke. We want to show an error screen. The easiest way to do so is to have a value like this.state.hasError, which gets flipped to true at this point. Note that you must return the updated state object. Don’t use this method for any side effects. Instead, use the below componentDidCatch. "Most Common Use Case for getDerivedStateFromError: Updating state to display an error screen.""
    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message };
    }

    // Very similar to the above, in that it is triggered when an error occurs in a child component. The difference is rather than updating state in response to an error, we can now perform any side effects, like logging the error. error would be the actual error message (Undefined Variable blah blah blah ) and info would be the stack trace (In Component, in div, etc). Note that componentDidCatch only works for errors in the render/lifecycle methods. If your app throws an error in a click handler, it will not be caught. You would commonly use componentDidCatch only in special error boundary components. These components wrap a child tree with the sole purpose of catching and logging errors. "Most Common Use Case for componentDidCatch: Catching and logging errors."
    componentDidCatch(error, info) {
        console.log("componentDidCatch", error, info);
        this.setState({
            hasError: true,
            errorMessage: error.message
        });
    }

    // Rendering does all the work. It returns the JSX of your actual component. "Most Common Use Case For Render: Returning component JSX."
    render() {
        if (this.state.hasError) {
            return <h1>Oops! {this.state.errorMessage}</h1>;
        }
        return (
            <>
                <h2>Class Life Cycle Methods</h2>
                
                <div style={{background: '#eedd82'}}>
                    <Divider orientation="center">
                        Flow of the component
                    </Divider>
                    <div style={{marginLeft:'5px', marginRight: '5px'}}>
                        <p> MOUNTING :: 
                            constructor() {'-->'} getDerivedStateFromProps() {'-->'} render() {'-->'}componentDidMount() {'-->'}
                        </p>
                        <p> UPDATING :: 
                            getDerivedStateFromProps() {'-->'} shouldComponentUpdate() {'-->'} render() {'-->'} getSnapshotBeforeUpdate() {'-->'} componentDidUpdate() {'-->'}
                        </p>
                        <p> UNMOUNTING ::
                            componentWillUnmount()
                        </p>

                        <p> ERROR :: 
                            getDerivedStateFromError() {'-->'} componentDidCatch() {'-->'} render()
                        </p>
                    </div>
                </div>

                <div style={{background:'#e5f183'}}>
                    <Divider orientation="center">
                        MOUNTING
                    </Divider>
                    <div style={{marginLeft:'5px', marginRight: '5px'}}>
                        <Divider orientation="left" orientationMargin="0">
                            constructor()
                        </Divider>
                        <p>
                            The constructor gets called with the component props. You must call super and pass in the props. You can then initialize your state, setting the default values. You can even base the state on the props. 
                            "Most Common Use Case For Constructor: Setting up state, creating refs and method binding".
                        </p>

                        <Divider orientation="left" orientationMargin="0">
                            getDerivedStateFromProps()
                        </Divider>
                        <p>
                            When mounting, getDerivedStateFromProps is the last method called before rendering.
                            You can use it to set state according to the initial props. 
                            "Most Common Use Case For getDerivedStateFromProps (during mount): Returning a state object based on the initial props".
                        </p>

                        <Divider orientation="left" orientationMargin="0">
                            render()
                        </Divider>
                        <p>
                            Rendering does all the work. It returns the JSX of your actual component. 
                            "Most Common Use Case For Render: Returning component JSX".
                        </p>

                        <Divider orientation="left" orientationMargin="0">
                            componentDidMount()
                        </Divider>
                        <p>
                            After we’ve rendered our component for the first time, this method is called. If you need to load data, here’s where you do it. Don’t try to load data in the constructor or render or anything crazy.
                            <span>
                                `You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update.`
                            </span>
                            "Most Common Use Case for componentDidMount: Starting AJAX calls to load in data for your component".
                        </p>

                        <Divider orientation="center">
                            UNSAFE Methods
                        </Divider>
                        <div>
                            <Divider orientation="right" orientationMargin="0">
                                componentWillMount()
                            </Divider>
                            <p>
                                Called immediately before mounting occurs, and before Component#render. Avoid introducing any side-effects or subscriptions in this method. 
                                Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.
                                @deprecated — 16.3, use componentDidMount or the constructor instead; will stop working in React 17.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{background:'#fca3ba'}}>
                    <Divider orientation="center">
                        UPDATING
                    </Divider>
                    <div style={{marginLeft:'5px', marginRight: '5px'}}>
                        <Divider orientation="left" orientationMargin="0">
                            getDerivedStateFromProps()
                        </Divider>
                        <p>
                            If you need to update your state based on a prop changing, you can do it here by returning a new state object. 
                            "Most Common Use Case: Updating state based on props, when the props themselves aren’t enough."
                        </p>

                        <Divider orientation="left" orientationMargin="0">
                            shouldComponentUpdate()
                        </Divider>
                        <p>
                            We have new props. Typical React dogma says that when a component receives new props, or new state, it should update. 
                            a shouldComponentUpdate method, called with nextProps as the first argument, and nextState is the second. 
                            shouldComponentUpdate should always return a boolean — an answer to the question, “should I re-render?” Yes, little component, you should. The default is that it always returns true. 
                            "Most Common Use Case: Controlling exactly when your component will re-render".
                        </p>

                        <Divider orientation="left" orientationMargin="0">
                            render()
                        </Divider>
                        <p>
                            Same as before.
                        </p>

                        <Divider orientation="left" orientationMargin="0">
                            getSnapshotBeforeUpdate()
                        </Divider>
                        <p>
                            Note it’s called between render and the updated component actually being propagated to the DOM. It exists as a last-chance-look at your component with its previous props and state.
                            You should either return null or a value from getSnapshotBeforeUpdate. 
                            "Most Common Use Case: Taking a look at some attribute of the current DOM, and passing that value on to componentDidUpdate".
                        </p>

                        <Divider orientation="left" orientationMargin="0">
                            componentDidUpdate()
                        </Divider>
                        <p>
                            Now, our changes have been committed to the DOM.
                            In componentDidUpdate, we have access to three things: the previous props, the previous state, and whatever value we returned from getSnapshotBeforeUpdate.
                            "Most Common Use Case for componentDidUpdate: Reacting (hah!) to committed changes to the DOM."
                        </p>

                        <Divider orientation="center">
                            UNSAFE Methods
                        </Divider>
                        <div>
                            <Divider orientation="right" orientationMargin="0">
                                componentWillReceiveProps()
                            </Divider>
                            <p>
                                Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.Calling Component #setState generally does not trigger this method. 
                                Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked. 
                                @deprecated — 16.3, use static getDerivedStateFromProps instead; will stop working in React 17.
                            </p>

                            <Divider orientation="right" orientationMargin="0">
                                componentWillUpdate()
                            </Divider>
                            <p>
                                Called immediately before rendering when new props or state is received. Not called for the initial render. Note: You cannot call Component#setState here. 
                                Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked. 
                                @deprecated — 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{background:'#82a8cd'}}>
                    <Divider orientation="center">
                        UNMOUNTING
                    </Divider>
                    <div style={{marginLeft:'5px', marginRight: '5px'}}>
                        <Divider orientation="left" orientationMargin="0">
                            componentWillUnmount()
                        </Divider>
                        <p>
                            Here you can cancel any outgoing network requests, or remove all event listeners associated with the component.
                            Basically, clean up anything to do that solely involves the component in question — when it’s gone, it should be completely gone.
                            "Most Common Use Case for componentWillUnmount: Cleaning up any leftover debris from your component".
                        </p>
                    </div>
                </div>

                <div style={{background:'#cd8282'}}>
                    <Divider orientation="center">
                        ERROR
                    </Divider>
                    <div style={{marginLeft:'5px', marginRight: '5px'}}>
                        <Divider orientation="left" orientationMargin="0">
                            getDerivedStateFromError()
                        </Divider>
                        <p>
                            Something broke. 
                            We want to show an error screen. The easiest way to do so is to have a value like this.state.hasError, which gets flipped to true at this point. 
                            Note that you must return the updated state object. Don’t use this method for any side effects. Instead, use the below componentDidCatch.
                            "Most Common Use Case for getDerivedStateFromError: Updating state to display an error screen".
                        </p>

                        <Divider orientation="left" orientationMargin="0">
                            componentDidCatch()
                        </Divider>
                        <p>
                            Very similar to the above, in that it is triggered when an error occurs in a child component. 
                            The difference is rather than updating state in response to an error, we can now perform any side effects, like logging the error. 
                            Error would be the actual error message (Undefined Variable blah blah blah ) and info would be the stack trace (In Component, in div, etc). 
                            "Note that componentDidCatch only works for errors in the render/lifecycle methods. If your app throws an error in a click handler, it will not be caught".
                            You would commonly use componentDidCatch only in special error boundary components. These components wrap a child tree with the sole purpose of catching and logging errors. 
                            "Most Common Use Case for componentDidCatch: Catching and logging errors".
                        </p>

                        <Divider orientation="left" orientationMargin="0">
                            render()
                        </Divider>
                        <p>
                            Same as before.
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

ClassLifeCycle.propTypes = {

};

export default ClassLifeCycle;