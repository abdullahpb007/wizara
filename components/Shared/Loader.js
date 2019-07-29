class Loader extends React.Component {
    render() {
        return (
            <div className="preloader-area">
                <div className="lds-hourglass">
                    <img src={require("../../images/logo.gif")} />
                </div>
            </div>
        );
    }
}

export default Loader;