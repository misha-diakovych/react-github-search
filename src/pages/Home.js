import React, {Fragment, useContext, useEffect} from "react";
import {Search} from "../components/Search";
import {ItemCard} from "../components/ItemCard";
import {GithubContext} from "../context/github/githubContext";

export const Home = () => {
    const { loading, users } = useContext(GithubContext)

    const github = useContext(GithubContext)

    useEffect( () => {
        github.search('misha-diakovych')
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <Search />
            <div className='row'>
                { loading
                    ? <p className='text-center'>Download...</p>
                    : users.map(user => {
                            return (
                                <div className="col-sm-4 mb-4" key={user.id}>
                                    <ItemCard user={user}/>
                                </div>
                            )
                        })
                }
            </div>
        </Fragment>
    )
}
