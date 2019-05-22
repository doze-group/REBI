const { Component } = React;

function Loader(props) {
    return (
        <div class="columns">
            <div class="column is-horizontal-center is-vertical-center">
                <img src="https://loading.io/spinners/liquid/lg.liquid-fill-preloader.gif" />
            </div>
        </div>
    );
}