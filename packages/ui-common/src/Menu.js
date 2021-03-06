import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import Apartments from './Apartment'
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'

import { useDispatch, useSelector } from 'react-redux'

import ReactDOM from 'react-router-dom'

import './Menu.css'

import { initializeJourney } from '@openbanking/ui-data/lib/services/auth-service'
import { setAccessToken } from '@openbanking/ui-data/lib/actions/auth'
import { setAccountId } from '@openbanking/ui-data/src/actions/account'
import { Opacity } from '@material-ui/icons'

const cardContainer = document.querySelector('.react-card')
import InfoDisplay from 'C:\\Users\\Mukund Ayodhya\\Documents\\GitHub\\openbanking-ui\\packages\\ui-common\\src\\InfoDisplay'

// React component for form inputs
class CardInput extends React.Component {
    render() {
        return (
            <fieldset>
                <input
                    name={this.props.name}
                    id={this.props.id}
                    type={this.props.type || 'text'}
                    placeholder={this.props.placeholder}
                    required
                />
            </fieldset>
        )
    }
}

// React component for textarea
class CardTextarea extends React.Component {
    render() {
        return (
            <fieldset>
                <textarea
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    required
                ></textarea>
            </fieldset>
        )
    }
}

// React component for form button
export class CardBtn extends React.Component {
    render() {
        return (
            <fieldset>
                <button
                    className={this.props.className}
                    type={this.props.type}
                    value={this.props.value}
                >
                    {this.props.value}
                </button>
            </fieldset>
        )
    }
}

// React component for social profile links
class CardProfileLinks extends React.Component {
    render() {
        const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook']

        const linksList = profileLinks.map((link, index) => (
            <li key={index}>
                <a href="#">
                    <i className={'fa fa-' + link}></i>
                </a>
            </li>
        ))

        return (
            <div className="card-social-links">
                <ul className="social-links">{linksList}</ul>
            </div>
        )
    }
}

// React component for the front side of the card
class CardFront extends React.Component {
    render() {
        return (
            <div className="card-side side-front">
                <div className="topDiv" style={{ backgroundColor: '#470E69' }}>
                    <div
                        className="col-xs-6 side-front-content"
                        style={{ color: 'white' }}
                    >
                        <h1 align="center">Your Bank accounts </h1>
                        <p align="center">
                            View and add your bank accounts in one place !
                        </p>
                    </div>
                </div>
                <div
                    className="fill"
                    style={{ backgroundColor: '#470E69', opacity: 0.5 }}
                ></div>
            </div>
        )
    }
}

class CardFront2 extends React.Component {
    render() {
        return (
            <div className="card-side side-front">
                <div className="topDiv" style={{ background: '#00B5BE' }}>
                    <div className="col-xs-6 side-front-content">
                        <h1 align="center">Find Rentals/Buy a home</h1>
                        <p align="center">
                            Check out Apartment listings at your preferred
                            location based on your lifestyle at your budget!
                        </p>
                    </div>
                </div>
                <div
                    className="fill"
                    style={{ background: '#00B5BE', opacity: 0.5 }}
                ></div>
            </div>
        )
    }
}

class CardFront3 extends React.Component {
    render() {
        return (
            <div className="card-side side-front">
                <div className="topDiv" style={{ backgroundColor: '#FF2D5D' }}>
                    <div className="col-xs-6 side-front-content">
                        <h1 align="center">Pay your rent</h1>
                        <p align="center">
                            Pay your rent with the click of a button!
                        </p>
                    </div>
                </div>
                <div
                    className="fill"
                    style={{ backgroundColor: '#FF2D5D', opacity: 0.5 }}
                ></div>
            </div>
        )
    }
}

class CardFront4 extends React.Component {
    render() {
        return (
            <div className="card-side side-front">
                <div className="topDiv" style={{ backgroundColor: '#FFAD00' }}>
                    <div className="col-xs-6 side-front-content">
                        <h1 align="center">Credit scores and offers</h1>
                        <p align="center">
                            Now generate an exclusive credit rating based on
                            your rent paying history and <br />
                            Avail exciting offers including housing loans!
                        </p>
                    </div>
                </div>
                <div
                    className="fill"
                    style={{ backgroundColor: '#FFAD00', opacity: 0.5 }}
                ></div>
            </div>
        )
    }
}

// React component for the back side of the card
/*class CardBack extends React.Component {
    render() {

        var data = useSelector((state) => state.app.data);
        const dispatch = useDispatch()
        getAccountList(dispatch);
        return (
            <div className="card-side side-back">
                <div className="container-fluid">
                   <Dashboard />
                <h1> {data} </h1>
            </div>
            </div>
        )
    }
}*/

class CardBack extends React.Component {
    render() {
        const accounts = localStorage.getItem('accounts')
        return (
            <div className="card-side side-back">
                <div className="container-fluid">
                    <h1>View/Add your bank accounts</h1>
                    {accounts ? accounts[0].Nickname : null}
                    {this.props.data ? this.props.data[0].Nickname : null}
                    <Dashboard />
                </div>
            </div>
        )
    }
}

class CardBack2 extends React.Component {
    render() {
        return (
            <div className="card-side side-back">
                <div className="container-fluid">
                    <h1>Search for your Dream Home</h1>

                    <div className="">
                        <a href="/apartments">
                            <CardBtn
                                className="btn btn-primary"
                                value="Search"
                            />
                        </a>
                    </div>

                    <CardProfileLinks />
                </div>
            </div>
        )
    }
}

/*class CardBack3 extends React.Component {
    render() {
        const dispatch = useDispatch()
    function setType(type) {
    // initialize aisp/pisp journey to get authorization URL
    initializeJourney(dispatch, type)
}
        return (
            <div className="card-side side-back">
                <div className="container-fluid">
                    <h1>Pay your rent now!</h1>

                        <div className="">
                            
                            
                            <CardBtn
                                className="btn btn-primary"
                                value="Search"
                                onClick={() => setType('pisp')}
                            />
                        </div>

                    <CardProfileLinks />
                </div>
            </div>
            

        )
    }
}*/

function CardBack3(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        //remove access_token to start journey again
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')
        dispatch(setAccessToken(null, null))
        dispatch(setAccountId(null))
    }, [])
    function setType(type) {
        // initialize aisp/pisp journey to get authorization URL
        initializeJourney(dispatch, type)
    }
    return (
        <div className="card-side side-back">
            <div className="container-fluid">
                <h1>Pay your rent now!</h1>

                <div className="">
                    <a
                        href="https://www.nwolb.com/Default.aspx?CookieCheck=2020-07-22T05:06:52"
                        target="_blank"
                    >
                        <button className="btn btn-primary">Pay now</button>
                    </a>
                </div>

                <CardProfileLinks />
            </div>
        </div>
    )
}

class CardBack4 extends React.Component {
    render() {
        return (
            <div className="card-side side-back">
                <div className="container-fluid">
                    <h1>Coming soon!</h1>

                    <CardProfileLinks />
                </div>
            </div>
        )
    }
}

// React component for the card (main component)
class Menu extends React.Component {
    //    const dispatch = useDispatch()

    render() {
        console.log(this.props.data)

        return (
            <>
                <div className="column">
                    <div className="card-container">
                        <div className="card-body">
                            <CardBack data={this.props.data} />

                            <CardFront />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card-container">
                        <div className="card-body">
                            <CardBack2 />

                            <CardFront2 />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card-container">
                        <div className="card-body">
                            <CardBack3 />

                            <CardFront3 />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card-container">
                        <div className="card-body">
                            <CardBack4 />

                            <CardFront4 />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// Render Card component
//ReactDOM.render(<Card />, cardContainer)

export { Menu }
