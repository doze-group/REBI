const { Component } = React;

function Profile(props) {

    const [Load, setLoad] = useState(true);

    if (Load) {
        <div class="container full is-fullhd">
            <NavBar props={props} />
        </div>
    } else {
        return (
            <div class="full">
                <NavBar props={props} />
                <Loader />
            </div>
        );
    }
}